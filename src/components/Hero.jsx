import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="profil" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
          >
            Profesional Teacher & Trainer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-lg text-gray-700"
          >
            Membantu individu dan organisasi berkembang melalui program pelatihan modern, kurasi media edukatif, dan komunitas pembelajar berkelanjutan.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#program" className="px-5 py-3 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition">Jelajahi Program</a>
            <a href="#kontak" className="px-5 py-3 rounded-xl bg-white text-gray-900 font-medium ring-1 ring-gray-300 hover:ring-gray-400 transition">Kontak</a>
          </motion.div>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {[{k:'10K+',v:'Alumni'},{k:'50+',v:'Program'},{k:'4.9',v:'Rating'}].map((s) => (
              <div key={s.k} className="p-4 rounded-xl bg-white/80 ring-1 ring-gray-200 backdrop-blur-sm">
                <div className="text-2xl font-bold text-gray-900">{s.k}</div>
                <div className="text-sm text-gray-600">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:block hidden" />
      </div>
    </section>
  )
}
