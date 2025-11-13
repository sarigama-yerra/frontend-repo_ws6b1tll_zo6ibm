import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="pricing" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_50%_0%,rgba(56,189,248,.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Launch a stunning site this week</h2>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">Instantly elevate your brand with a premium look and feel. Perfect for SaaS, fintech, and product landing pages.</p>

        <div className="mt-8 inline-flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-slate-900 px-6 py-3 text-sm font-semibold shadow-lg hover:bg-slate-100 transition">
            Get Dev Blueprint <ArrowRight size={16} />
          </a>
          <a href="#faq" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 border border-white/20 text-white px-6 py-3 text-sm font-semibold backdrop-blur-xl hover:bg-white/20 transition">
            Questions? Read FAQ
          </a>
        </div>

        <p className="mt-6 text-xs text-white/60">Backed by a 14‑day refund policy. Build with confidence.</p>
      </div>
    </section>
  )
}
