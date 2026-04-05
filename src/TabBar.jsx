import { useState } from 'react'

const tabs = ['DEEP DIVES', 'AI RISKS', 'HUMAN ADVANCEMENT', 'GLOBAL COLLABORATION']

export default function TabBar() {
  const [active, setActive] = useState(0)

  return (
    <div className="flex items-center gap-1 rounded-lg border border-white/10" style={{ backgroundColor: '#13151f' }}>
      {tabs.map((tab, i) => (
        <button
          key={tab}
          onClick={() => setActive(i)}
          className="px-5 py-2 rounded-md text-m tracking-widest transition-all duration-200 cursor-pointer"
          style={{
            backgroundColor: active === i ? '#1e2235' : 'transparent',
            color: active === i ? '#ffffff' : '#6b7280',
            fontWeight: active === i ? '700' : '400',
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
