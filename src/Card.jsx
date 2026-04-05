import { useRef } from "react";

function lightenHex(hex, amount = 0.6) {
  const r = Math.round(parseInt(hex.slice(1, 3), 16) + (255 - parseInt(hex.slice(1, 3), 16)) * amount);
  const g = Math.round(parseInt(hex.slice(3, 5), 16) + (255 - parseInt(hex.slice(3, 5), 16)) * amount);
  const b = Math.round(parseInt(hex.slice(5, 7), 16) + (255 - parseInt(hex.slice(5, 7), 16)) * amount);
  return `rgb(${r}, ${g}, ${b})`;
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function Card({ stat, title, description, badge, color, svgPath, wallpaper }) {
  const glowRef = useRef(null);
  const borderRef = useRef(null);
  const cardRef = useRef(null);

  const dimBorder = hexToRgba(color, 0.35);

  function handleMouseMove(e) {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -8;
    const rotateY = ((x - cx) / cx) * 8;

    if (glowRef.current) {
      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top = `${e.clientY}px`;
    }
    if (borderRef.current) {
      borderRef.current.style.background = `radial-gradient(300px circle at ${x}px ${y}px, ${hexToRgba(color, 1)}, ${hexToRgba(color, 0.7)} 30%, ${hexToRgba(color, 0.2)} 70%, transparent 100%)`;
      borderRef.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    }
  }

  function handleMouseEnter() {
    if (glowRef.current) glowRef.current.style.opacity = '1';
    if (borderRef.current) borderRef.current.style.transition = 'background 0.1s, transform 0.1s';
  }

  function handleMouseLeave() {
    if (glowRef.current) glowRef.current.style.opacity = '0';
    if (borderRef.current) {
      borderRef.current.style.background = dimBorder;
      borderRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
      borderRef.current.style.transition = 'background 0.3s, transform 0.4s ease';
    }
  }

  return (
    <>
      {/* Cursor glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed z-50 transition-opacity duration-300"
        style={{
          opacity: 0,
          transform: 'translate(-50%, -50%)',
          width: 1,
          height: 1,
          borderRadius: '50%',
          boxShadow: `0 0 60px 30px ${hexToRgba(lightenHex(color, 0.85), 0.08)}, 0 0 120px 60px ${hexToRgba(lightenHex(color, 0.85), 0.03)}`,
        }}
      />

      {/* Border glow wrapper */}
      <div
        ref={borderRef}
        className="rounded-xl"
        style={{ background: dimBorder, padding: '2px' }}
      >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative flex items-start justify-between rounded-[11px] px-6 py-5 gap-4 overflow-hidden h-44 cursor-pointer"
        style={{ backgroundColor: "#1b1f33" }}
      >
        {/* Wallpaper */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(/${wallpaper})`,
            backgroundSize: '60%',
            backgroundPosition: 'calc(100% + 40px) center',
            maskImage: 'linear-gradient(to left, black 0%, transparent 65%)',
            WebkitMaskImage: 'linear-gradient(to left, black 0%, transparent 65%)',
            opacity: 0.8,
          }}
        />

        <div
          className="relative z-10 shrink-0 w-14 h-14"
          style={{ filter: `drop-shadow(0 0 6px ${color}) drop-shadow(0 0 16px ${color}80)` }}
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

        <div className="relative z-10 flex flex-col gap-2 flex-1">
          <div className="flex items-end gap-2 mb-4">
            <span className="text-5xl font-bold leading-none" style={{ color: lightenHex(color, 0.65), textShadow: `0 0 10px ${hexToRgba(color, 0.6)}, 0 0 25px ${hexToRgba(color, 0.3)}` }}>{stat}</span>
            <div className="flex flex-col leading-tight mb-1">
              {title.map((line) => (
                <span key={line} className="text-xs font-semibold tracking-widest" style={{ color: lightenHex(color, 0.65), textShadow: `0 0 8px ${hexToRgba(color, 0.5)}` }}>{line}</span>
              ))}
            </div>
          </div>
          <p className="text-m leading-relaxed">{description}</p>
        </div>
        {badge && (
          <span
            className="absolute z-10 bottom-4 right-5 text-xs px-2 py-0.5 rounded-xl tracking-widest"
            style={{ border: `1px solid ${color}80`, color: lightenHex(color, 0.65), backgroundColor: hexToRgba(color, 0.6) }}
          >
            {badge}
          </span>
        )}
      </div>
      </div>
    </>
  );
}
