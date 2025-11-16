import { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

const navItems = [
  { id: 'profil', label: 'Profil' },
  { id: 'program', label: 'Program' },
  { id: 'media', label: 'Media' },
  { id: 'komunitas', label: 'Komunitas' },
  { id: 'store', label: 'Store' },
  { id: 'kontak', label: 'Kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button onClick={() => handleNav('profil')} className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-violet-500 to-teal-400 grid place-items-center text-white shadow-md">
              <Sparkles size={18} />
            </div>
            <span className="font-semibold text-gray-900">EduPro</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-gray-200 pb-4">
            <div className="flex flex-col pt-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className="px-3 py-3 text-left text-gray-700 hover:bg-gray-100"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
