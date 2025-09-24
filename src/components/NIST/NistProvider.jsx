import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { evaluateQuestion, parseGiftLike } from "../../lib/nist/helpers.js";
import { DEFAULT_QUESTIONS } from "../../lib/nist/questions.js";

const NistCtx = createContext(null);
const STORAGE_KEY = "csf2_trainer_v1";

export function NistProvider({ children }) {
  const [qaText, setQaText] = useState(DEFAULT_QUESTIONS.trim());
  const [questionBank, setQuestionBank] = useState(() => parseGiftLike(DEFAULT_QUESTIONS));
  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.qaText) setQaText(parsed.qaText);
        if (parsed.questionBank) setQuestionBank(parsed.questionBank);
        if (parsed.answers) setAnswers(parsed.answers);
        if (typeof parsed.currentIndex === "number") setCurrentIndex(parsed.currentIndex);
      }
    } catch {}
  }, []);

  useEffect(() => {
    const payload = { qaText, questionBank, answers, currentIndex };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }, [qaText, questionBank, answers, currentIndex]);

  const score = useMemo(() => {
    let correct = 0, partial = 0, wrong = 0;
    for (const q of questionBank) {
      const a = answers[q.id];
      if (!a) continue;
      if (a.result === "correct") correct++;
      else if (a.result === "partial") partial++;
      else if (a.result === "wrong") wrong++;
    }
    return { correct, partial, wrong, total: questionBank.length };
  }, [answers, questionBank]);

  function importQuestions() {
    const parsed = parseGiftLike(qaText);
    setQuestionBank(parsed);
    setAnswers({});
    setCurrentIndex(0);
  }

  function resetProgress() {
    setAnswers({});
    setCurrentIndex(0);
  }

  function selectOption(q, optionIndex) {
    const multi = q.options.filter((o) => o.isCorrect || o.partialCredit > 0).length > 1;
    const prev = answers[q.id]?.selected || [];
    let nextSelected;
    if (multi) {
      if (prev.includes(optionIndex)) nextSelected = prev.filter((i) => i !== optionIndex);
      else nextSelected = [...prev, optionIndex];
    } else {
      nextSelected = [optionIndex];
    }
    const result = evaluateQuestion(q, nextSelected);
    setAnswers((old) => ({ ...old, [q.id]: { selected: nextSelected, result } }));
  }

  const value = {
    // data
    qaText, setQaText,
    questionBank, setQuestionBank,
    answers, setAnswers,
    currentIndex, setCurrentIndex,
    score,
    // actions
    importQuestions,
    resetProgress,
    selectOption,
  };

  return <NistCtx.Provider value={value}>{children}</NistCtx.Provider>;
}

export function useNist() {
  const ctx = useContext(NistCtx);
  if (!ctx) throw new Error("useNist must be used within <NistProvider>");
  return ctx;
}
