import Card from "./Card";

const cards = [
  {
    stat: 1,
    title: ["INHABITED", "PLANETS"],
    description:
      "The observable universe contains only one known planet with intelligent life: Earth.",
    icon: "🌍",
    glow: "shadow-blue-500/40",
    ring: "ring-blue-500/30",
  },
  {
    stat: 1,
    title: ["NATURAL", "INTELLIGENCE"],
    description:
      "The observable universe contains only one known form of natural intelligence: Humans.",
    icon: "🧠",
    glow: "shadow-purple-500/40",
    ring: "ring-purple-500/30",
  },
  {
    stat: 1,
    title: ["ARTIFICIAL", "INTELLIGENCE"],
    description:
      "Artificial Intelligence, created by humans, now exists on Earth.",
    icon: "🤖",
    glow: "shadow-emerald-500/40",
    ring: "ring-emerald-500/30",
  },
  {
    stat: 0,
    title: ["HYBRID", "INTELLIGENCE"],
    description:
      "Hybrid intelligence, the integration of human and artificial minds — does not yet exist.",
    icon: "⚡",
    glow: "shadow-orange-500/40",
    ring: "ring-orange-500/30",
    badge: "DEVELOPING",
  },
];

export default function App() {
  return (
    <div
      className="relative min-h-screen text-white flex flex-col items-center justify-start pt-12  pb-12 gap-10 font-sans"
      style={{ backgroundColor: "#0E101C" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-x-0 top-0 h-[60%] pointer-events-none"
        style={{
          backgroundImage: "url(/spaceBackground.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />
      {/* Gradient overlay fading wallpaper into page color */}
      <div
        className="absolute inset-x-0 top-0 h-[60%] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 20%, #0E101C 100%)",
        }}
      />
      <div className="relative z-10 text-center text-[#CAE2EB]">
        <h1
          className="mb-4 tracking-normal leading-tight mb-4 text-6xl md:text-[52px]"
          style={{
            textShadow:
              "0 0 18px rgba(2, 2, 2, 3.4), 0 0 70px rgb(196, 192, 192)",
          }}
        >
          <span className="[-webkit-text-stroke:0.5px_#000000] font-medium">
            SAPIENS COUNTER:{" "}
            <span className="font-extrabold md:text-[54px]">TRACKING</span>
          </span>
          <br className="leading-[0]" />
          <span className="font-extrabold [-webkit-text-stroke:0.5px_#000000] -mt-2 block md:text-[54px]">
            THE STATE OF INTELLIGENCE
          </span>
        </h1>
        <p className="text-gray-400 text-base">
          Monitoring the presence and evolution of natural, artificial, and
          hybrid intelligence.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-6xl">
        {cards.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </div>
    </div>
  );
}
