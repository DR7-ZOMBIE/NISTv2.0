import { useNist } from "../components/Nist";
import { inferTopic } from "../lib/nist/helpers.js";
import { CheckCircle2, AlertTriangle, XCircle, HelpCircle } from "lucide-react";

export default function NistReview() {
  const { questionBank, answers } = useNist();

  const paletteMap = {
    correct: {
      border: "border-emerald-400",
      bg: "bg-emerald-50",
      icon: <CheckCircle2 className="h-5 w-5 text-emerald-500" />,
      label: "Correcta",
    },
    partial: {
      border: "border-amber-400",
      bg: "bg-amber-50",
      icon: <AlertTriangle className="h-5 w-5 text-amber-500" />,
      label: "Parcial",
    },
    wrong: {
      border: "border-rose-400",
      bg: "bg-rose-50",
      icon: <XCircle className="h-5 w-5 text-rose-500" />,
      label: "Incorrecta",
    },
    pending: {
      border: "border-slate-200",
      bg: "bg-white",
      icon: <HelpCircle className="h-5 w-5 text-slate-400" />,
      label: "Pendiente",
    },
  };

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-12">
      <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-900">
        📘 Revisión de respuestas
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {questionBank.map((q, idx) => {
          const a = answers[q.id];
          const state = a?.result || "pending";
          const style = paletteMap[state];

          return (
            <div
              key={q.id}
              className={`rounded-3xl border ${style.border} ${style.bg} p-5 shadow-sm transition`}
            >
              {/* Encabezado */}
              <div className="mb-2 flex items-center justify-between text-xs uppercase text-slate-500">
                <span>#{idx + 1} · {inferTopic(q)}</span>
                <span className="flex items-center gap-1 font-medium">
                  {style.icon}
                  {style.label}
                </span>
              </div>

              {/* Texto pregunta */}
              <div className="text-base font-semibold text-slate-800">{q.text}</div>

              {/* Opciones */}
              <div className="mt-3 space-y-2 text-sm">
                {q.options.map((o, i) => {
                  const picked = a?.selected?.includes(i);

                  // Colores del punto indicador
                  const dotColor = o.isCorrect
                    ? "bg-emerald-500"
                    : o.partialCredit > 0
                    ? "bg-amber-500"
                    : picked
                    ? "bg-rose-500"
                    : "bg-slate-300";

                  return (
                    <div key={i} className="flex items-center gap-2">
                      <span className={`h-2.5 w-2.5 rounded-full ${dotColor}`} />
                      <span className={`${picked ? "font-medium text-slate-800" : "text-slate-600"}`}>
                        {o.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
