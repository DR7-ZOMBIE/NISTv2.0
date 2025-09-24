import { motion } from "framer-motion";
import { Info } from "lucide-react";

export default function About() {
  return (
    <section className="relative py-16 px-4 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold tracking-tight text-slate-800"
        >
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Acerca de esta plataforma
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-lg text-slate-600"
        >
          Entrenador interactivo para el{" "}
          <strong className="text-slate-800 font-semibold">NIST CSF 2.0</strong>, sin TypeScript.
          Pega tu propio banco de preguntas en formato <code>::n::</code> con{" "}
          <code>{`{=correcta ~incorrecta}`}</code> y <code>{`{T}/{F}`}</code>. 
          Soporta crédito parcial con <code>%xx.xx%</code>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 rounded-3xl border bg-white/80 p-6 text-left shadow-md backdrop-blur-md"
        >
          <div className="flex items-center gap-2 text-indigo-600 font-medium text-sm mb-3">
            <Info className="h-5 w-5" />
            Notas importantes
          </div>
          <ul className="list-disc space-y-2 pl-6 text-sm text-slate-700">
            <li>
              IDs únicos garantizados aunque se repitan etiquetas como <code>::37::</code>.
            </li>
            <li>
              El progreso se guarda en <code>localStorage</code> (solo visible desde este navegador).
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
