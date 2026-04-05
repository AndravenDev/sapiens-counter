import Card from './Card'

const cards = [
  {
    stat: 1,
    title: ['INHABITED', 'PLANETS'],
    description: 'The observable universe contains only one known planet with intelligent life: Earth.',
    icon: '🌍',
    glow: 'shadow-blue-500/40',
    ring: 'ring-blue-500/30',
  },
  {
    stat: 1,
    title: ['NATURAL', 'INTELLIGENCE'],
    description: 'The observable universe contains only one known form of natural intelligence: Humans.',
    icon: '🧠',
    glow: 'shadow-purple-500/40',
    ring: 'ring-purple-500/30',
  },
  {
    stat: 1,
    title: ['ARTIFICIAL', 'INTELLIGENCE'],
    description: 'Artificial Intelligence, created by humans, now exists on Earth.',
    icon: '🤖',
    glow: 'shadow-emerald-500/40',
    ring: 'ring-emerald-500/30',
  },
  {
    stat: 0,
    title: ['HYBRID', 'INTELLIGENCE'],
    description: 'Hybrid intelligence, the integration of human and artificial minds — does not yet exist.',
    icon: '⚡',
    glow: 'shadow-orange-500/40',
    ring: 'ring-orange-500/30',
    badge: 'DEVELOPING',
  },
]

export default function App() {
  return (
    <div
      className="min-h-screen bg-[#07090f] text-white flex flex-col items-center justify-center px-6 py-12 gap-10 font-sans"
      style={{ backgroundImage: 'radial-gradient(ellipse at 50% 30%, #0d1a3a 0%, #07090f 70%)' }}
    >
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
          SAPIENS COUNTER: TRACKING<br />THE STATE OF INTELLIGENCE
        </h1>
        <p className="text-gray-400 text-base">
          Monitoring the presence and evolution of natural, artificial, and hybrid intelligence.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl">
        {cards.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </div>
    </div>
  )
}
