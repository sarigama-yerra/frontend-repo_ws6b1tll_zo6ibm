import Spline from '@splinetool/react-spline'
import { ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(56,189,248,.25),rgba(29,78,216,.08)_40%,transparent_70%)]" />
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 w-full">
        <div className="py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur-xl">
            <Sparkles size={14} className="text-cyan-300" />
            New: Glassmorphic Finance UI Kit
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Design modern fintech experiences that feel premium
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/80 max-w-xl">
            Ship polished, conversion-focused product pages and dashboards with a 3D credit card hero, soft gradients, and refined micro-interactions.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-slate-900 px-6 py-3 text-sm font-semibold shadow-lg hover:bg-slate-100 transition">
              Get the Blueprint <ArrowRight size={16} />
            </a>
            <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 border border-white/20 text-white px-6 py-3 text-sm font-semibold backdrop-blur-xl hover:bg-white/20 transition">
              See Features
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-white/80 text-sm">
            <div className="flex items-center gap-2"><ShieldCheck className="text-cyan-300" size={16} /> Secure by design</div>
            <div className="flex items-center gap-2"><Zap className="text-cyan-300" size={16} /> Lightning fast</div>
            <div className="flex items-center gap-2"><Sparkles className="text-cyan-300" size={16} /> Polished visuals</div>
          </div>
        </div>

        <div className="relative h-[50vh] lg:h-[80vh]" />
      </div>
    </section>
  )
}
