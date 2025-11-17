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
    },
    en: {
      title: "Bilal Qori – Soulful Qur'an Trainer",
      subtitle: "Building the soul through the rhythm and meaning of the Qur'an",
      quote: "“Let Qur'an recitation be the energy of life and a source of inspiration.”",
      ctaPrimary: 'Start Learning',
      ctaSecondary: 'See Programs',
    },
  }[lang]

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      {/* Soft noise + subtle gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(246,210,158,0.35),transparent_60%),radial-gradient(ellipse_at_bottom,_rgba(196,170,128,0.25),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-multiply"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;utf8,<?xml version=\\"1.0\\"?><svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"100\\" height=\\"100\\" viewBox=\\"0 0 100 100\\"><filter id=\\"n\\"><feTurbulence type=\\"fractalNoise\\" baseFrequency=\\"0.8\\" numOctaves=\\"3\\" stitchTiles=\\"stitch\\"/></filter><rect width=\\"100%\\" height=\\"100%\\" filter=\\"url(%23n)\\" opacity=\\"0.8\\"/></svg>')",
            backgroundSize: '220px 220px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left: Minimal typographic focus */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[clamp(2rem,6vw,3.5rem)] leading-tight font-extrabold tracking-tight text-[#282828]"
          >
            {t.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 text-lg text-[#282828]/80 max-w-xl"
          >
            {t.subtitle}
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-[#936732] font-medium"
          >
            {t.quote}
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
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
        </div>

        {/* Right: Spline inside a rounded card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[28px] bg-white/70 backdrop-blur-md ring-1 ring-[#C4AA80] p-2 shadow-[0_10px_40px_rgba(40,40,40,0.08)]">
            <div className="absolute -top-10 -right-10 h-24 w-24 rounded-2xl bg-[#936732] opacity-10 rotate-12" />
            <div className="h-[380px] sm:h-[440px] lg:h-[500px] w-full rounded-2xl overflow-hidden">
              <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
