import { useState } from 'react'
import { Menu, ShoppingCart, Search } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40 backdrop-blur-md bg-white/60 border-b border-white/40">
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="md:hidden p-2 rounded-lg hover:bg-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu className="w-5 h-5 text-rose-700" />
          </button>
          <a href="/" className="text-xl font-extrabold tracking-tight">
            <span className="text-gray-900">Bubble</span>
            <span className="text-rose-600">Joy</span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <a href="#menu" className="text-gray-700 hover:text-rose-700">Menu</a>
          <a href="#specials" className="text-gray-700 hover:text-rose-700">Specials</a>
          <a href="#about" className="text-gray-700 hover:text-rose-700">About</a>
          <a href="#contact" className="text-gray-700 hover:text-rose-700">Contact</a>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2 bg-white rounded-xl px-3 py-2 border border-gray-200">
            <Search className="w-4 h-4 text-gray-400" />
            <input placeholder="Search drinks, bowls..." className="outline-none text-sm placeholder:text-gray-400" />
          </div>
          <button className="relative p-2 rounded-xl bg-rose-600 text-white hover:bg-rose-700">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 text-[10px] px-1.5 py-0.5 bg-white text-rose-700 rounded-full font-bold">2</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/40 bg-white/80 backdrop-blur-md">
          <div className="px-6 py-4 grid gap-3 text-sm font-semibold">
            <a href="#menu" className="text-gray-700">Menu</a>
            <a href="#specials" className="text-gray-700">Specials</a>
            <a href="#about" className="text-gray-700">About</a>
            <a href="#contact" className="text-gray-700">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
