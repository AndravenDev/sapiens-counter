import Card from "./Card";

const cards = [
  {
    stat: 1,
    title: ["INHABITED", "PLANETS"],
    description:
      "The observable universe contains only one known planet with intelligent life: Earth.",
    icon: "🌍",
    color: "#4d86f0",
    svgPath: "/planet-earth-world-earth.svg",
    wallpaper: "earthWallpaperDark.png",
  },
  {
    stat: 1,
    title: ["NATURAL", "INTELLIGENCE"],
    description:
      "The observable universe contains only one known form of natural intelligence: Humans.",
    icon: "🧠",
    color: "#63f5ff",
    svgPath: "/dna.svg",
    wallpaper: "brainWallpaper.jpg",
  },
  {
    stat: 1,
    title: ["ARTIFICIAL", "INTELLIGENCE"],
    description:
      "Artificial Intelligence, created by humans, now exists on Earth.",
    icon: "🤖",
    color: "#2ECC71",
    svgPath: "/robot-head.svg",
    wallpaper: "processor.jpg",
  },
  {
    stat: 0,
    title: ["HYBRID", "INTELLIGENCE"],
    description:
      "Hybrid intelligence, the integration of human and artificial minds — does not yet exist.",
    icon: "⚡",
    badge: "DEVELOPING",
    color: "#FF7A30",
    svgPath: "/newBrain.svg",
    wallpaper: "hybrid.jpg",
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
          className="tracking-normal leading-tight text-6xl md:text-[52px]"
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
          <span className="font-extrabold [-webkit-text-stroke:0.5px_#000000] -mt-2 block md:text-[54px]" >
            THE STATE OF INTELLIGENCE
          </span>
        </h1>
        <p className="text-base text-[#CAE2EB] text-[20px] [text-shadow:5px_2px_39px_rgba(0,0,0, 0.93)]" >
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
