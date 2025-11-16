import { motion } from 'framer-motion'
import { BookOpen, PlayCircle, Users2, ShoppingBag, Phone } from 'lucide-react'

export default function Sections() {
  return (
    <>
      <Section id="program" title="Program" icon={<BookOpen className="text-blue-600" />}
        subtitle="Kurikulum praktis untuk kebutuhan industri dan pendidikan." >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {['Public Training','In-House Training','Coaching 1:1','Workshop','Bootcamp','Webinar'].map((t,i)=> (
            <Card key={i} title={t} />
          ))}
        </div>
      </Section>

      <Section id="media" title="Media" icon={<PlayCircle className="text-violet-600" />}
        subtitle="Konten edukatif: artikel, video, dan podcast yang dikurasi.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i)=> (
            <div key={i} className="aspect-video rounded-xl bg-gradient-to-br from-blue-100 to-violet-100 ring-1 ring-gray-200" />
          ))}
        </div>
      </Section>

      <Section id="komunitas" title="Komunitas" icon={<Users2 className="text-teal-600" />}
        subtitle="Tempat berkumpulnya para pembelajar untuk tumbuh bersama.">
        <div className="rounded-2xl p-6 bg-white ring-1 ring-gray-200">
          <p className="text-gray-700">Bergabung dengan forum diskusi, sesi live bulanan, dan project kolaboratif lintas daerah.</p>
        </div>
      </Section>

      <Section id="store" title="Store" icon={<ShoppingBag className="text-amber-600" />}
        subtitle="E-book, template, dan resources untuk mendukung karier Anda.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <Card key={i} title={`E-book ${i}`} />
          ))}
        </div>
      </Section>

      <Section id="kontak" title="Kontak" icon={<Phone className="text-rose-600" />}
        subtitle="Hubungi untuk konsultasi program terbaik.">
        <form onSubmit={(e)=> e.preventDefault()} className="grid sm:grid-cols-2 gap-4">
          <input className="px-4 py-3 rounded-xl ring-1 ring-gray-300 focus:ring-2 focus:ring-gray-900 outline-none" placeholder="Nama" />
          <input className="px-4 py-3 rounded-xl ring-1 ring-gray-300 focus:ring-2 focus:ring-gray-900 outline-none" placeholder="Email" />
          <textarea rows="4" className="sm:col-span-2 px-4 py-3 rounded-xl ring-1 ring-gray-300 focus:ring-2 focus:ring-gray-900 outline-none" placeholder="Pesan" />
          <button className="sm:col-span-2 px-5 py-3 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition">Kirim Pesan</button>
        </form>
      </Section>
    </>
  )
}

function Section({ id, title, subtitle, icon, children }) {
  return (
    <section id={id} className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-white to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white ring-1 ring-gray-200 grid place-items-center">
              {icon}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
          </div>
          <p className="mt-2 text-gray-600">{subtitle}</p>
        </motion.div>
        <div className="mt-8">
          {children}
        </div>
      </div>
    </section>
  )
}

function Card({ title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group p-5 rounded-2xl bg-white ring-1 ring-gray-200 hover:shadow-lg hover:-translate-y-0.5 transition transform"
    >
      <div className="h-36 rounded-xl bg-gradient-to-br from-slate-100 to-white ring-1 ring-gray-200" />
      <div className="mt-4 flex items-center justify-between">
        <div>
          <div className="font-semibold text-gray-900">{title}</div>
          <div className="text-sm text-gray-600">Detail ringkas program</div>
        </div>
        <button className="px-3 py-1.5 rounded-lg bg-gray-900 text-white text-sm">Detail</button>
      </div>
    </motion.div>
  )
}
