import { useState } from 'react'
import { Menu, X, CreditCard, ArrowRight } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (
    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 text-sm">
      <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
      <a href="#pricing" className="text-white/80 hover:text-white transition">Pricing</a>
      <a href="#testimonials" className="text-white/80 hover:text-white transition">Stories</a>
      <a href="#faq" className="text-white/80 hover:text-white transition">FAQ</a>
      <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
    </div>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl px-4 py-3 flex items-center justify-between shadow-lg shadow-blue-900/10">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex size-8 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 text-white shadow-md">
              <CreditCard size={18} />
            </span>
            <span className="text-white font-semibold tracking-tight">DevBlueprint</span>
          </a>

          <nav className="hidden md:block">{navItem}</nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-white/80 hover:text-white text-sm">Sign in</a>
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2 text-sm font-semibold shadow-sm hover:bg-slate-100 transition">
              Get Started <ArrowRight size={16} />
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-4 shadow-lg">
            {navItem}
            <div className="mt-4 flex items-center gap-3">
              <a href="#" className="text-white/80 hover:text-white text-sm">Sign in</a>
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2 text-sm font-semibold shadow-sm hover:bg-slate-100 transition">
                Get Started <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
