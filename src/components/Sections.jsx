import { motion } from 'framer-motion'
import { BookOpen, PlayCircle, Users2, ShoppingBag, Phone } from 'lucide-react'

export default function Sections({ lang = 'id' }) {
  const copy = {
    id: {
      program: {
        title: 'Program',
        subtitle: 'Kurikulum praktis dan berjenjang untuk meningkatkan kualitas tilawah dan pemahaman Al-Qur\'an dengan pendekatan hati.',
        items: [
          {
            title: 'Pelatihan Tilawah Intensif',
            desc: 'Program 4–8 pekan untuk memperbaiki tajwid, makharij, dan irama (maqamat) secara terstruktur.',
          },
          {
            title: 'Mentoring Tahsin 1:1',
            desc: 'Sesi privat dengan umpan balik langsung, cocok untuk peningkatan cepat dan target spesifik.',
          },
          {
            title: 'Workshop Soulful Qur\'an',
            desc: 'Kelas sehari penuh memadukan teknik vokal, penghayatan makna, dan adab tilawah.',
          },
          {
            title: 'In-House Training Masjid/Institusi',
            desc: 'Kurikulum kustom untuk komunitas, sekolah, atau lembaga dakwah dengan output terukur.',
          },
          {
            title: 'Bootcamp Tartil & Tadabbur',
            desc: 'Pendalaman bacaan tartil plus praktik tadabbur tematik setiap pertemuan.',
          },
          {
            title: 'Kelas Online Berkala',
            desc: 'Belajar dari mana saja dengan sesi live dan LMS materi rekaman.',
          },
        ],
        cta: 'Lihat detail program',
      },
      media: {
        title: 'Media',
        subtitle: 'Artikel, video, dan podcast yang menumbuhkan kecintaan kepada Al-Qur\'an—praktis, hangat, dan aplikatif.',
      },
      komunitas: {
        title: 'Komunitas',
        subtitle: 'Bertumbuh bersama di ruang yang suportif: forum diskusi, setoran tilawah, dan kajian bulanan.',
        body: 'Gabung di komunitas Soulful Qur\'an: akses grup khusus, tantangan 30 hari, dan pendampingan rutin untuk menjaga konsistensi ibadah dan belajar.',
      },
      store: {
        title: 'Store',
        subtitle: 'E-book, lembar kerja, dan paket audio latihan untuk memperkaya perjalanan belajar Anda.',
        items: [
          { title: 'E-book Tartil Praktis', desc: 'Rangkuman tajwid inti dengan contoh aplikatif dan latihan harian.' },
          { title: 'Worksheet Tadabbur Juz Amma', desc: 'Panduan refleksi ayat demi ayat untuk membangun kedekatan makna.' },
          { title: 'Audio Latihan Maqamat', desc: 'Track latihan berjenjang untuk membentuk rasa irama bacaan.' },
        ],
      },
      kontak: {
        title: 'Kontak',
        subtitle: 'Konsultasikan kebutuhan pelatihan untuk personal, masjid, atau institusi.',
        cta: 'Kirim Pesan',
        name: 'Nama',
        email: 'Email',
        message: 'Pesan',
      },
    },
    en: {
      program: {
        title: 'Programs',
        subtitle: 'Practical, leveled curriculum to improve recitation and Qur\'anic understanding with a heart-centered approach.',
        items: [
          {
            title: 'Intensive Recitation Training',
            desc: '4–8 week track to refine tajwid, makharij, and melodic flow (maqamat).',
          },
          {
            title: '1:1 Tahsin Mentoring',
            desc: 'Private sessions with direct feedback for fast, targeted improvement.',
          },
          {
            title: 'Soulful Qur\'an Workshop',
            desc: 'One-day class combining vocal technique, meaning, and adab of recitation.',
          },
          {
            title: 'In-House Training for Institutions',
            desc: 'Custom curriculum for mosques, schools, or da\'wah organizations with measurable outcomes.',
          },
          {
            title: 'Tartil & Tadabbur Bootcamp',
            desc: 'Deeper tartil practice plus thematic tadabbur every session.',
          },
          {
            title: 'Recurring Online Classes',
            desc: 'Learn from anywhere with live sessions and recorded materials.',
          },
        ],
        cta: 'See program details',
      },
      media: {
        title: 'Media',
        subtitle: 'Articles, videos, and podcasts that nurture love for the Qur\'an—practical, warm, and applicable.',
      },
      komunitas: {
        title: 'Community',
        subtitle: 'Grow together in a supportive space: discussion forum, recitation submissions, and monthly studies.',
        body: 'Join the Soulful Qur\'an community: access private groups, 30-day challenges, and regular mentoring to stay consistent.',
      },
      store: {
        title: 'Store',
        subtitle: 'E-books, worksheets, and audio practice packs to enrich your learning journey.',
        items: [
          { title: 'Practical Tartil E-book', desc: 'Core tajwid summary with examples and daily drills.' },
          { title: 'Juz Amma Tadabbur Worksheets', desc: 'Verse-by-verse reflection guide to build meaningful connection.' },
          { title: 'Maqamat Practice Audio', desc: 'Leveled tracks to develop melodic sense in recitation.' },
        ],
      },
      kontak: {
        title: 'Contact',
        subtitle: 'Consult training needs for personal, mosques, or institutions.',
        cta: 'Send Message',
        name: 'Name',
        email: 'Email',
        message: 'Message',
      },
    },
  }[lang]

  return (
    <>
      <Section id="program" title={copy.program.title} icon={<BookOpen className="text-[#936732]" />}
        subtitle={copy.program.subtitle} >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {copy.program.items.map((it, i)=> (
            <Card key={i} title={it.title} desc={it.desc} />
          ))}
        </div>
        <div className="mt-6">
          <a href="#kontak" className="inline-flex px-4 py-2 rounded-lg bg-[#282828] text-white text-sm font-medium hover:opacity-90">{copy.program.cta}</a>
        </div>
      </Section>

      <Section id="media" title={copy.media.title} icon={<PlayCircle className="text-[#936732]" />}
        subtitle={copy.media.subtitle}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i)=> (
            <div key={i} className="aspect-video rounded-xl bg-gradient-to-br from-[#F6D29E]/50 to-[#C4AA80]/30 ring-1 ring-[#C4AA80]" />
          ))}
        </div>
      </Section>

      <Section id="komunitas" title={copy.komunitas.title} icon={<Users2 className="text-[#936732]" />}
        subtitle={copy.komunitas.subtitle}>
        <div className="rounded-2xl p-6 bg-white ring-1 ring-[#C4AA80]">
          <p className="text-[#282828]/80">{copy.komunitas.body}</p>
        </div>
      </Section>

      <Section id="store" title={copy.store.title} icon={<ShoppingBag className="text-[#936732]" />}
        subtitle={copy.store.subtitle}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {copy.store.items.map((it, i) => (
            <Card key={i} title={it.title} desc={it.desc} />
          ))}
        </div>
      </Section>

      <Section id="kontak" title={copy.kontak.title} icon={<Phone className="text-[#936732]" />}
        subtitle={copy.kontak.subtitle}>
        <form onSubmit={(e)=> e.preventDefault()} className="grid sm:grid-cols-2 gap-4">
          <input className="px-4 py-3 rounded-xl ring-1 ring-[#C4AA80] focus:ring-2 focus:ring-[#936732] outline-none bg-white" placeholder={copy.kontak.name} />
          <input className="px-4 py-3 rounded-xl ring-1 ring-[#C4AA80] focus:ring-2 focus:ring-[#936732] outline-none bg-white" placeholder={copy.kontak.email} />
          <textarea rows="4" className="sm:col-span-2 px-4 py-3 rounded-xl ring-1 ring-[#C4AA80] focus:ring-2 focus:ring-[#936732] outline-none bg-white" placeholder={copy.kontak.message} />
          <button className="sm:col-span-2 px-5 py-3 rounded-xl bg-[#282828] text-white font-medium hover:opacity-90 transition">{copy.kontak.cta}</button>
        </form>
      </Section>
    </>
  )
}

function Section({ id, title, subtitle, icon, children }) {
  return (
    <section id={id} className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white ring-1 ring-[#C4AA80] grid place-items-center">
              {icon}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#282828]">{title}</h2>
          </div>
          <p className="mt-2 text-[#282828]/70">{subtitle}</p>
        </motion.div>
        <div className="mt-8">
          {children}
        </div>
      </div>
    </section>
  )
}

function Card({ title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group p-5 rounded-2xl bg-white ring-1 ring-[#C4AA80] hover:shadow-lg hover:-translate-y-0.5 transition transform"
    >
      <div className="h-36 rounded-xl bg-gradient-to-br from-[#F6D29E]/50 to-white ring-1 ring-[#C4AA80]" />
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <div className="font-semibold text-[#282828]">{title}</div>
          <div className="text-sm text-[#282828]/70">{desc}</div>
        </div>
        <button className="px-3 py-1.5 rounded-lg bg-[#282828] text-white text-sm">Detail</button>
      </div>
    </motion.div>
  )
}
