export default function Card({
  stat,
  title,
  description,
  badge,
  color,
  svgPath,
}) {
  return (
    <div
      className="flex items-center justify-between rounded-xl px-6 py-5 gap-4 transition"
      style={{ backgroundColor: "#1b1f33", border: `1px solid ${color}40` }}
    >
      <div
        className="shrink-0 w-14 h-14"
        style={{
          filter: `drop-shadow(0 0 6px ${color}) drop-shadow(0 0 16px ${color}80)`,
        }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundColor: color,
            WebkitMaskImage: `url(${svgPath})`,
            maskImage: `url(${svgPath})`,
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
          }}
        />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex items-end gap-2">
          <span className="text-5xl font-bold text-white leading-none">
            {stat}
          </span>
          <div className="flex flex-col leading-tight mb-1">
            {title.map((line) => (
              <span
                key={line}
                className="text-xs font-semibold tracking-widest text-gray-300"
              >
                {line}
              </span>
            ))}
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        {badge && (
          <span
            className="self-start text-xs px-2 py-0.5 rounded tracking-widest mt-1"
            style={{ border: `1px solid ${color}80`, color }}
          >
            {badge}
          </span>
        )}
      </div>
    </div>
  );
}
