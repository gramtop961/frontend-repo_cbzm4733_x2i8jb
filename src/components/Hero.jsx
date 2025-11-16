import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ lang = 'id' }) {
  const t = {
    id: {
      title: 'Bilal Qori – Trainer Soulful Qur\'an',
      subtitle: 'Membangun Jiwa melalui Irama dan Makna Al-Qur\'an',
      quote: '“Jadikan tilawah Al-Qur\'an sebagai energi kehidupan dan sumber inspirasi”',
      cta1: 'Jelajahi Program',
      cta2: 'Kontak',
      stats: [
        { k: '10K+', v: 'Alumni' },
        { k: '50+', v: 'Program' },
        { k: '4.9', v: 'Rating' },
      ],
    },
    en: {
      title: "Bilal Qori – Soulful Qur'an Trainer",
      subtitle: 'Nurturing the Soul through the Rhythm and Meaning of the Qur\'an',
      quote: '“Let Qur\'an recitation be the energy of life and a source of inspiration”',
      cta1: 'Explore Programs',
      cta2: 'Contact',
      stats: [
        { k: '10K+', v: 'Alumni' },
        { k: '50+', v: 'Programs' },
        { k: '4.9', v: 'Rating' },
      ],
    },
  }[lang]

  return (
    <section id="profil" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F3F0]/70 via-[#F7F3F0]/80 to-[#F7F3F0] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#282828]"
          >
            {t.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-lg text-[#282828]/80"
          >
            {t.subtitle}
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-4 text-[#936732] font-medium"
          >
            {t.quote}
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#program" className="px-5 py-3 rounded-xl bg-[#282828] text-white font-medium hover:opacity-90 transition">{t.cta1}</a>
            <a href="#kontak" className="px-5 py-3 rounded-xl bg-white text-[#282828] font-medium ring-1 ring-[#C4AA80] hover:bg-[#F6D29E]/30 transition">{t.cta2}</a>
          </motion.div>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {t.stats.map((s) => (
              <div key={s.k} className="p-4 rounded-xl bg-white/80 ring-1 ring-[#C4AA80] backdrop-blur-sm">
                <div className="text-2xl font-bold text-[#282828]">{s.k}</div>
                <div className="text-sm text-[#282828]/70">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:block hidden" />
      </div>
    </section>
  )
}
