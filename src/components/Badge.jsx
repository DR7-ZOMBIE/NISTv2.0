export default function Badge({ children, color = "slate" }) {
  const palette = {
    slate: "bg-slate-100 text-slate-700",
    green: "bg-emerald-100 text-emerald-700",
    amber: "bg-amber-100 text-amber-700",
    rose: "bg-rose-100 text-rose-700",
    blue: "bg-blue-100 text-blue-700",
  };
  return <span className={`rounded-full px-2.5 py-1 ${palette[color]} text-[11px]`}>{children}</span>;
}
