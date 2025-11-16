import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ lang = 'id' }) {
  const t = {
    id: {
      title: "Bilal Qori – Trainer Soulful Qur'an",
      subtitle: "Membangun jiwa melalui irama dan makna Al-Qur'an",
      quote: "“Jadikan tilawah Al-Qur'an sebagai energi kehidupan dan sumber inspirasi.”",
      ctaPrimary: 'Mulai Belajar',
      ctaSecondary: 'Lihat Program',
      badges: ['Soulful Qur\'an Journey', '12+ tahun pengalaman', 'Pelatih maqomat'],
      kpi: [
        { k: '10K+', v: 'Alumni' },
        { k: '50+', v: 'Program' },
        { k: '4.9', v: 'Rating' },
      ],
    },
    en: {
      title: "Bilal Qori – Soulful Qur'an Trainer",
      subtitle: "Building the soul through the rhythm and meaning of the Qur'an",
      quote: "“Let Qur'an recitation be the energy of life and a source of inspiration.”",
      ctaPrimary: 'Start Learning',
      ctaSecondary: 'See Programs',
      badges: ["Soulful Qur'an Journey", '12+ years experience', 'Maqamat coach'],
      kpi: [
        { k: '10K+', v: 'Alumni' },
        { k: '50+', v: 'Programs' },
        { k: '4.9', v: 'Rating' },
      ],
    },
  }[lang]

  return (
    <section id="profil" className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background Spline */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Layered gradient veil for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F3F0]/70 via-[#F7F3F0]/85 to-[#F7F3F0]" />
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#F6D29E]/50 blur-3xl" />
      <div className="absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-[#C4AA80]/40 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left: Title and actions */}
        <div>
          <div className="flex flex-wrap items-center gap-2">
            {t.badges.map((b, i) => (
              <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-white/80 text-[#282828] ring-1 ring-[#C4AA80]">
                {b}
              </span>
            ))}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-[#282828]"
          >
            {t.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-3 text-lg text-[#282828]/80"
          >
            {t.subtitle}
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-[#936732] font-medium"
          >
            {t.quote}
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#kontak" className="px-5 py-3 rounded-xl bg-[#282828] text-white font-medium hover:opacity-90 transition">
              {t.ctaPrimary}
            </a>
            <a href="#program" className="px-5 py-3 rounded-xl bg-white text-[#282828] font-medium ring-1 ring-[#C4AA80] hover:bg-[#F6D29E]/30 transition">
              {t.ctaSecondary}
            </a>
          </motion.div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {t.kpi.map((s) => (
              <div key={s.k} className="p-4 rounded-xl bg-white/85 ring-1 ring-[#C4AA80] backdrop-blur-sm">
                <div className="text-2xl font-bold text-[#282828]">{s.k}</div>
                <div className="text-sm text-[#282828]/70">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Alternative hero visual card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden lg:block"
        >
          <div className="relative p-6 rounded-3xl bg-white/80 ring-1 ring-[#C4AA80] backdrop-blur-md">
            <div className="absolute -top-8 -right-8 h-24 w-24 rounded-2xl bg-[#936732] opacity-20 rotate-12" />
            <div className="flex items-center gap-6">
              <div className="h-28 w-28 rounded-2xl bg-gradient-to-br from-[#F6D29E] to-[#C4AA80] ring-1 ring-[#C4AA80]" />
              <div>
                <div className="text-sm text-[#282828]/60">{lang === 'id' ? 'Profil Singkat' : 'Short Profile'}</div>
                <div className="mt-1 text-xl font-semibold text-[#282828]">Bilal Qori</div>
                <p className="mt-2 text-[#282828]/80 max-w-md">
                  {lang === 'id'
                    ? 'Qori dan pelatih maqomat, pendiri Soulful Qur\'an. Menggabungkan teknik vokal, maqomat, dan makna ayat agar tilawah menjadi indah sekaligus mendalam.'
                    : "Qari and maqamat coach, founder of Soulful Qur'an. Blending vocal technique, maqamat, and meaning for beautiful, heartfelt recitation."}
                </p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {t.kpi.map((s) => (
                <div key={s.k} className="p-3 rounded-xl bg-[#F7F3F0] ring-1 ring-[#C4AA80]/60">
                  <div className="text-lg font-bold text-[#282828]">{s.k}</div>
                  <div className="text-xs text-[#282828]/70">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
