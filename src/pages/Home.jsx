import { motion } from "framer-motion";
import { Sparkles, NotebookPen } from "lucide-react";

export default function Home({ setRoute }) {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        {/* Texto principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Entrena CSF 2.0 con un{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              quiz adaptativo
            </span>
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Practica NIST CSF 2.0: Funciones, Categorías, Subcategorías, Perfiles y Niveles. Feedback inmediato con explicaciones y vínculos a teoría.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => setRoute("quiz")}
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-[1px] hover:bg-slate-800"
            >
              <NotebookPen className="h-4 w-4" />
              Comenzar el Quiz
            </button>
            <button
              onClick={() => setRoute("learn")}
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
            >
              <Sparkles className="h-4 w-4 text-purple-500" />
              Ver teoría
            </button>
          </div>

          {/* Tarjetas secundarias */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <HomeCard title="Banco editable" text="Pega o edita el banco de preguntas en la página Quiz." />
            <HomeCard title="Progreso local" text="Tu avance se guarda en este navegador automáticamente." />
          </div>
        </motion.div>

        {/* Panel lateral */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border bg-white/90 backdrop-blur-md p-6 shadow-xl"
        >
          <h3 className="text-lg font-semibold text-slate-900">📊 Resumen</h3>

          <div className="mt-6 grid grid-cols-3 gap-4">
            <Stat label="Lecciones" value="5" />
            <Stat label="Preguntas" value="100+" />
            <Stat label="Modo" value="Práctica" />
          </div>

          <div className="mt-6 rounded-2xl border bg-slate-50/80 p-4 text-sm shadow-inner">
            <p className="font-medium text-slate-700">🧠 Consejo</p>
            <p className="text-xs text-slate-500">Si no sabes una, salta y revisa luego en “Revisión”.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Componente de tarjeta informativa
function HomeCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm transition hover:shadow-md">
      <div className="text-sm font-semibold text-slate-800">{title}</div>
      <p className="mt-1 text-xs text-slate-600">{text}</p>
    </div>
  );
}

// Componente de estadística
function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border bg-white/95 p-4 text-center shadow-sm">
      <div className="text-3xl font-bold text-slate-800">{value}</div>
      <div className="text-xs text-slate-500">{label}</div>
    </div>
  );
}
