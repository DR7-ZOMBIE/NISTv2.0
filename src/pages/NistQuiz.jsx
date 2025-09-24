import { useMemo } from "react";
import { RotateCcw } from "lucide-react";
import { useNist } from "../components/Nist";
import Progress from "../components/Progress.jsx";
import FeedbackCard from "../components/FeedbackCard.jsx";
import Badge from "../components/Badge.jsx";
import { inferTopic } from "../lib/nist/helpers.js";

export default function NistQuiz() {
  const {
    qaText, setQaText,
    questionBank, answers, currentIndex,
    setCurrentIndex, importQuestions, resetProgress, selectOption,
  } = useNist();

  const current = questionBank[currentIndex];
  const percentDone = useMemo(
    () => Math.round(((currentIndex + 1) / Math.max(1, questionBank.length)) * 100),
    [currentIndex, questionBank.length]
  );

  function goPrev() {
    if (!answers[current?.id]?.selected?.length) {
      setCurrentIndex((i) => Math.max(0, i - 1));
    }
  }

  function goNext() {
    if (!answers[current?.id]?.selected?.length) {
      setCurrentIndex((i) => Math.min(questionBank.length - 1, i + 1));
    }
  }

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-12">
      {/* Editor de preguntas */}
      <div className="mb-8 rounded-3xl border bg-white/90 p-6 shadow-lg backdrop-blur-md">
        <h3 className="text-xl font-semibold text-slate-800">📚 Banco de preguntas</h3>
        <p className="mt-1 text-sm text-slate-500">Pega o edita preguntas en formato <code>::n::</code></p>
        <textarea
          value={qaText}
          onChange={(e) => setQaText(e.target.value)}
          className="mt-3 h-40 w-full rounded-2xl border border-slate-300 bg-white p-3 text-sm shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-300"
          placeholder="::1:: Pregunta {=correcta ~incorrecta}"
        />
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            onClick={importQuestions}
            className="rounded-2xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-slate-800"
          >
            Importar / Reemplazar banco
          </button>
          <button
            onClick={resetProgress}
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-50"
          >
            <RotateCcw className="h-4 w-4" />
            Reiniciar progreso
          </button>
        </div>
      </div>

      {/* Progreso y navegación */}
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Badge color="blue">
            Pregunta {currentIndex + 1} / {questionBank.length}
          </Badge>
          <Progress value={percentDone} />
        </div>
        <div className="flex gap-2">
          <button
            onClick={goPrev}
            disabled={answers[current?.id]?.selected?.length > 0}
            className="rounded-full border bg-white px-4 py-2 text-sm shadow-sm transition disabled:cursor-not-allowed disabled:opacity-40"
          >
            ← Anterior
          </button>
          <button
            onClick={goNext}
            disabled={answers[current?.id]?.selected?.length > 0}
            className="rounded-full border bg-white px-4 py-2 text-sm shadow-sm transition disabled:cursor-not-allowed disabled:opacity-40"
          >
            Siguiente →
          </button>
        </div>
      </div>

      {/* Pregunta actual */}
      {current ? (
        <div className="rounded-3xl border bg-white/90 p-6 shadow-xl backdrop-blur-md">
          <div className="mb-2 text-xs uppercase tracking-wider text-slate-500">
            Tema: <span className="font-medium">{current.topic || inferTopic(current)}</span>
          </div>
          <h4 className="text-xl font-bold text-slate-800 leading-snug">{current.text}</h4>

          <div className="mt-5 space-y-3">
            {current.options.map((opt, idx) => {
              const picked = answers[current.id]?.selected || [];
              const alreadyAnswered = picked.length > 0;
              const chosen = picked.includes(idx);
              const showStatus = alreadyAnswered;

              let border = "border-slate-200 hover:border-slate-300";
              let dot = "";

              if (showStatus) {
                if (opt.isCorrect) { border = "border-emerald-500"; dot = "bg-emerald-500"; }
                else if (opt.partialCredit > 0) { border = "border-amber-400"; dot = "bg-amber-500"; }
                else if (chosen) { border = "border-rose-400"; dot = "bg-rose-500"; }
              } else if (chosen) {
                border = "border-indigo-500";
              }

              return (
                <button
                  key={idx}
                  onClick={() => {
                    if (!alreadyAnswered) {
                      selectOption(current, idx);
                      // Avanzar inmediatamente a la siguiente pregunta
                      setCurrentIndex((i) => Math.min(i + 1, questionBank.length - 1));
                    }
                  }}
                  disabled={alreadyAnswered}
                  className={`w-full rounded-2xl border ${border} bg-white px-4 py-3 text-left transition hover:shadow-sm
                    ${alreadyAnswered ? "cursor-not-allowed opacity-70" : ""}
                  `}
                >
                  <div className="flex items-center gap-3">
                    <span className={`h-2.5 w-2.5 rounded-full ${dot || "bg-slate-300"}`} />
                    <span className="text-sm text-slate-800">{opt.text}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-6">
            {answers[current.id]?.selected?.length > 0 ? (
              <FeedbackCard q={current} answer={answers[current.id]} />
            ) : (
              <div className="rounded-2xl border border-dashed bg-slate-50 p-4 text-sm text-slate-600">
                💡 Selecciona una opción para ver el feedback inmediato.
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border bg-white/90 p-6 text-sm shadow-inner">
          No hay preguntas disponibles. Importa el banco arriba ⬆️
        </div>
      )}
    </section>
  );
}
