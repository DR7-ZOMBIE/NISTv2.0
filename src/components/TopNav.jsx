import { BookOpen, CircleHelp, Home, Layers, ListChecks, Sparkles } from "lucide-react";
import Badge from "./Badge.jsx";
import { useNist } from "./Nist";

export default function TopNav({ route, setRoute }) {
  const { score } = useNist();
  const nav = [
    { id: "home", label: "Inicio", icon: Home },
    { id: "learn", label: "Aprender", icon: BookOpen },
    { id: "quiz", label: "Quiz", icon: ListChecks },
    { id: "review", label: "Revisión", icon: Layers },
    { id: "about", label: "Acerca de", icon: CircleHelp },
  ];

  return (
    <div className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6" />
          <span className="font-semibold">NIST CSF 2.0 Trainer</span>
          <span className="ml-3 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600">
            JS • Vite • React
          </span>
        </div>
        <div className="flex items-center gap-6">
          {nav.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setRoute(id)}
              className={`group flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition ${
                route === id ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Icon className="h-4 w-4 opacity-80" />
              <span>{label}</span>
            </button>
          ))}
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-600">
            <Badge color="green">✔ {score.correct}</Badge>
            <Badge color="amber">± {score.partial}</Badge>
            <Badge color="rose">✖ {score.wrong}</Badge>
            <Badge>{score.total} preg.</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
