export default function Progress({ value }) {
  return (
    <div className="flex w-40 items-center gap-2">
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
        <div className="h-full bg-slate-800" style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
      </div>
      <div className="text-xs text-slate-600">{value}%</div>
    </div>
  );
}
