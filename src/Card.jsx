export default function Card({ stat, title, description, icon, glow, ring, badge, color }) {
  return (
    <div
      className="flex items-center justify-between border border-white/10 rounded-xl px-6 py-5 gap-4 transition"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex items-end gap-2">
          <span className="text-5xl font-bold text-white leading-none">{stat}</span>
          <div className="flex flex-col leading-tight mb-1">
            {title.map((line) => (
              <span key={line} className="text-xs font-semibold tracking-widest text-gray-300">{line}</span>
            ))}
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        {badge && (
          <span className="self-start text-xs px-2 py-0.5 rounded border border-orange-500/50 text-orange-400 tracking-widest mt-1">
            {badge}
          </span>
        )}
      </div>
      <div className={`shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-3xl bg-white/5 ring-1 shadow-lg ${ring} ${glow}`}>
        {icon}
      </div>
    </div>
  )
}
