import { BadgeCheck, Layout, MousePointerClick, Shield, Sparkles, Timer } from 'lucide-react'

const features = [
  {
    icon: <Layout className="text-cyan-400" size={20} />,
    title: 'Glassmorphic Cards',
    desc: 'Beautiful frosted panels with soft borders and depth for a premium look.'
  },
  {
    icon: <MousePointerClick className="text-cyan-400" size={20} />,
    title: 'Micro-interactions',
    desc: 'Hover states, subtle parallax, and satisfying motions out of the box.'
  },
  {
    icon: <Shield className="text-cyan-400" size={20} />,
    title: 'Trust-first',
    desc: 'Security badges and clear UX patterns that boost conversion and credibility.'
  },
  {
    icon: <Timer className="text-cyan-400" size={20} />,
    title: 'Faster shipping',
    desc: 'Prebuilt sections help you publish in hours, not weeks.'
  },
  {
    icon: <BadgeCheck className="text-cyan-400" size={20} />,
    title: 'Accessible by default',
    desc: 'Color contrast and focus states that work for everyone.'
  },
  {
    icon: <Sparkles className="text-cyan-400" size={20} />,
    title: 'Modern aesthetic',
    desc: 'Radial gradients, soft shadows, and 3D hero that feels alive.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_50%_0%,rgba(56,189,248,.12),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-xl">What’s inside</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">Everything you need to look world‑class</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">A cohesive set of components, sections, and patterns designed for modern fintech products.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur-xl hover:bg-white/10 transition">
              <div className="size-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="text-white/70 text-sm mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
