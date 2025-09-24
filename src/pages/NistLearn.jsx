import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function NistLearn() {
  const sections = [
    {
      id: "core",
      title: "Núcleo (CSF Core)",
      points: [
        "Taxonomía de resultados de ciberseguridad de alto nivel.",
        "Jerarquía: Funciones → Categorías → Subcategorías.",
        "Aplicable a TI, OT e IoT.",
      ],
    },
    {
      id: "functions",
      title: "Funciones (6)",
      points: [
        "GV: Gobernar — estrategia y política de gestión de riesgos.",
        "ID: Identificar — comprensión de contexto, activos y riesgos.",
        "PR: Proteger — salvaguardas y controles preventivos.",
        "DE: Detectar — monitoreo continuo y análisis de eventos.",
        "RS: Responder — gestión, mitigación y comunicación.",
        "RC: Recuperar — restauración y comunicación de recuperación.",
      ],
    },
    {
      id: "profiles",
      title: "Perfiles Organizativos",
      points: [
        "Describen postura actual/objetivo en términos del Core.",
        "Útiles para priorizar y comunicar resultados.",
        "Proceso: Alcance → Recopilar → Crear → Analizar brechas → Plan → Implementar & actualizar.",
      ],
    },
    {
      id: "tiers",
      title: "Niveles (Tiers)",
      points: [
        "Nivel 1: Parcial · 2: Conocimiento de los riesgos · 3: Repetible · 4: Adaptable.",
        "Caracterizan rigor en Gobernar y en gestión de riesgos (ID/PR/DE/RS/RC).",
      ],
    },
    {
      id: "supplychain",
      title: "C-SCRM (Cadena de suministro)",
      points: [
        "Proceso sistemático para gestionar riesgos en relaciones con terceros.",
        "Incluye estrategia, políticas, procesos y procedimientos.",
      ],
    },
  ];

  return (
    <section className="relative py-16 px-4 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-center text-4xl font-extrabold text-slate-800 tracking-tight">
          🧠 CSF 2.0 — teoría esencial
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {sections.map((s) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 backdrop-blur-md shadow-lg transition hover:shadow-xl"
            >
              <div className="absolute -top-20 right-0 h-40 w-40 rotate-45 bg-gradient-to-tr from-indigo-200 via-violet-300 to-pink-200 opacity-30 blur-2xl" />
              <div className="relative z-10 p-6">
                <h3 className="flex items-center gap-3 text-xl font-semibold text-slate-900">
                  <BookOpen className="h-6 w-6 text-indigo-500" />
                  {s.title}
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-[15px] text-slate-700">
                  {s.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
