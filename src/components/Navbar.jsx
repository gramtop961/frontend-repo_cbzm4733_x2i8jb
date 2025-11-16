import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { id: 'profil', label_id: 'Profil', label_en: 'Profile' },
  { id: 'program', label_id: 'Program', label_en: 'Programs' },
  { id: 'media', label_id: 'Media', label_en: 'Media' },
  { id: 'komunitas', label_id: 'Komunitas', label_en: 'Community' },
  { id: 'store', label_id: 'Store', label_en: 'Store' },
  { id: 'kontak', label_id: 'Kontak', label_en: 'Contact' },
]

export default function Navbar({ lang = 'id', setLang }) {
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

  const label = (item) => (lang === 'id' ? item.label_id : item.label_en)

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-[#F7F3F0]/80 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button onClick={() => handleNav('profil')} className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-[#936732] grid place-items-center text-white shadow-md font-bold">BQ</div>
            <span className="font-semibold text-[#282828]">Bilal Qori</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-[#282828]/80 hover:text-[#282828] hover:bg-[#C4AA80]/20 transition"
              >
                {label(item)}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang && setLang((l) => (l === 'id' ? 'en' : 'id'))}
              className="hidden sm:inline-flex px-3 py-1.5 rounded-lg text-sm font-medium bg-[#282828] text-white hover:opacity-90"
              aria-label="Toggle language"
            >
              {lang === 'id' ? 'EN' : 'ID'}
            </button>
            <button className="md:hidden p-2" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-[#C4AA80]/40 pb-4">
            <div className="flex flex-col pt-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className="px-3 py-3 text-left text-[#282828]/90 hover:bg-[#C4AA80]/10"
                >
                  {label(item)}
                </button>
              ))}
              <button
                onClick={() => setLang && setLang((l) => (l === 'id' ? 'en' : 'id'))}
                className="mt-2 self-start ml-3 px-3 py-2 rounded-lg text-sm font-medium bg-[#282828] text-white"
              >
                {lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa'}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
