import Badge from "./Badge.jsx";
import { CircleHelp, CheckCircle2 } from "lucide-react";
import { explanationFor } from "../lib/nist/helpers.js";

export default function FeedbackCard({ q, answer }) {
  const { result } = answer;
  const tone = {
    correct: { badge: "Correcto", color: "green", icon: <CheckCircle2 className="h-4 w-4" /> },
    partial: { badge: "Crédito parcial", color: "amber", icon: <CheckCircle2 className="h-4 w-4" /> },
    wrong: { badge: "Incorrecto", color: "rose", icon: <CircleHelp className="h-4 w-4" /> },
  }[result];

  return (
    <div className="rounded-2xl border bg-white p-4">
      <div className="mb-2 flex items-center gap-2">
        <Badge color={tone.color}>{tone.icon} <span className="ml-1">{tone.badge}</span></Badge>
      </div>
      <div className="prose prose-sm max-w-none text-slate-700">
        <p>{explanationFor(q)}</p>
        <ul className="mt-2 list-disc pl-5">
          <li><strong>Correctas:</strong> {q.options.map((o, i) => (o.isCorrect ? i + 1 : null)).filter(Boolean).join(", ") || "(ninguna)"}</li>
          {q.options.some((o) => o.partialCredit > 0) && (
            <li><strong>Parciales:</strong> {q.options.map((o, i) => (o.partialCredit > 0 ? `${i + 1} (${o.partialCredit}%)` : null)).filter(Boolean).join(", ")}</li>
          )}
        </ul>
      </div>
      <div className="mt-3 text-xs text-slate-500">
        Tip: refuerza el tema en la sección <span className="underline">Aprender</span>.
      </div>
    </div>
  );
}
