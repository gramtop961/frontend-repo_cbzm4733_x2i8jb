import { motion } from 'framer-motion'
import { BookOpen, PlayCircle, Users2, ShoppingBag, Phone, Award, Star, Share2, Instagram, Youtube, Music2 } from 'lucide-react'

export default function Sections({ lang = 'id' }) {
  const copy = {
    id: {
      profil: {
        title: 'Profil',
        aboutTitle: 'Tentang Bilal Qori',
        aboutBody:
          'Bilal Qori adalah qori dan pelatih maqomat dengan pengalaman lebih dari dua belas tahun. Ia merupakan pendiri Soulful Qur\'an, pendekatan pembelajaran yang menggabungkan teknik vokal, maqomat, dan makna ayat agar tilawah menjadi indah sekaligus mendalam.',
        visiTitle: 'Visi & Filosofi',
        visiBody:
          'Bilal Qori meyakini bahwa suara adalah medium rasa—jembatan yang menghadirkan bacaan menjadi pengalaman ruhani. Fokusnya adalah tilawah yang akurat secara teknis, kuat secara emosional, dan bermakna secara spiritual.',
        soulfulTitle: "Soulful Qur'an",
        soulfulWhat: 'Apa Itu Soulful Qur\'an?',
        soulfulBody:
          'Metode pembelajaran tilawah yang menggabungkan irama, makna, dan rasa. Dirancang agar belajar Al-Qur\'an terasa mudah, relevan, dan menyentuh hati.',
        benefits: ['Menghadirkan tilawah yang soulful', 'Penguasaan suara & maqomat', 'Pemahaman makna ayat', 'Membangun rutinitas ngaji yang inspiratif'],
        testi: '“Belajar di Soulful Qur\'an membuat saya memahami tilawah lebih hidup dan penuh makna.”',
      },
      program: {
        title: 'Program',
        subtitle:
          "Jenis program untuk berbagai level: pemula hingga pengajar. Temukan ritme belajar yang pas dan berkelanjutan.",
        items: [
          { title: 'Kelas Maqomat Dasar', desc: 'Khusus pemula untuk membangun fondasi suara, tajwid, dan pengenalan maqomat.' },
          { title: "Soulful Qur'an Masterclass", desc: 'Level lanjutan untuk pendalaman rasa, improvisasi, dan metodologi pengajaran.' },
          { title: 'Workshop Online/Offline', desc: 'Sesi 1 hari yang padat praktik, tersedia untuk publik dan institusi.' },
          { title: 'Webinar Tematik', desc: 'Topik-topik fokus: pengaturan napas, artikulasi, atau penghayatan makna.' },
        ],
        meta: 'Halaman Program: Jadwal terbaru • Info event • Pendaftaran',
        cta: 'Lihat detail program',
      },
      media: {
        title: 'Media',
        subtitle: 'Video & konten inspirasi untuk menemani perjalanan tilawah Anda.',
        bullets: ['Murottal pilihan', 'Tutorial maqomat', 'Tips tilawah', 'Konten viral IG/TikTok', 'Playlist YouTube'],
        socials: { title: 'Ikuti', ig: 'Instagram', yt: 'YouTube', tk: 'TikTok' },
      },
      komunitas: {
        title: 'Komunitas',
        subtitle:
          "Komunitas pembelajar Qur'an dari seluruh Indonesia. Ruang berbagi inspirasi, praktik tilawah, dan perjalanan spiritual bersama.",
        body:
          'Gabung di Soulful Qur\'an Community: forum diskusi, setoran tilawah, dan kajian bulanan. Akses tantangan 30 hari dan pendampingan rutin.',
        gallery: 'Galeri: Foto kelas • Event komunitas • Workshop',
      },
      store: {
        title: 'Store',
        subtitle: 'Produk penunjang tilawah untuk memperkaya latihan dan konsistensi.',
        items: [
          { title: 'Buku & eBook', desc: 'Panduan tartil, tajwid inti, dan tadabbur tematik.' },
          { title: 'Merchandise', desc: 'Merch resmi untuk menemani rutinitas ngaji.' },
          { title: 'Audio/Video Eksklusif', desc: 'Materi latihan berjenjang dan contoh maqomat.' },
          { title: 'Digital Membership', desc: 'Akses kelas, komunitas, dan konten premium.' },
          { title: 'Alat Tilawah Rekomendasi', desc: 'Mic, stand, dan perlengkapan pendukung latihan.' },
        ],
        features: 'Fitur: Produk unggulan • Promo • Testimoni • FAQ',
      },
      testi: {
        title: 'Testimoni & Prestasi',
        items: [
          { name: 'Aisyah', role: 'Alumni', text: 'Pendekatannya membuat saya paham rasa dalam bacaan, bukan sekadar teknik.' },
          { name: 'Rizki', role: 'Pengajar', text: 'Materinya runtut dan aplikatif. Kelasnya hangat dan berfokus pada makna.' },
        ],
        partners: ['Partner & kolaborator', 'Institusi & komunitas'],
        achievements: 'Capaian digital: Instagram, YouTube, penghargaan tilawah digital',
      },
      kolab: {
        title: 'Kolaborasi',
        body: 'Terbuka untuk kerjasama pelatihan, event, program edukasi, media partnership, dan kolaborasi merchandise.',
        cta: 'Ajukan Kolaborasi',
      },
      kontak: {
        title: 'Kontak',
        subtitle: 'Form kontak, WA resmi, email, dan undangan kelas/event.',
        cta: 'Kirim Pesan',
        name: 'Nama',
        email: 'Email',
        message: 'Pesan',
        wa: 'Chat WhatsApp',
        emailBtn: 'Kirim Email',
      },
    },
    en: {
      profil: {
        title: 'Profile',
        aboutTitle: 'About Bilal Qori',
        aboutBody:
          "Bilal Qori is a qari and maqamat coach with over twelve years of experience. He founded Soulful Qur'an, a learning approach that blends vocal technique, maqamat, and verse meaning so recitation is both beautiful and profound.",
        visiTitle: 'Vision & Philosophy',
        visiBody:
          'He believes voice is a medium of feeling—a bridge that turns recitation into a spiritual experience. The focus is technical accuracy, emotional strength, and spiritual meaning.',
        soulfulTitle: "Soulful Qur'an",
        soulfulWhat: "What is Soulful Qur'an?",
        soulfulBody:
          "A recitation learning method that unites rhythm, meaning, and feeling. Designed to be easy, relevant, and heartfelt.",
        benefits: ['Achieve soulful recitation', 'Master voice & maqamat', 'Understand verse meanings', 'Build inspiring routines'],
        testi: '“Learning with Soulful Qur\'an made my recitation come alive with meaning.”',
      },
      program: {
        title: 'Programs',
        subtitle:
          'Program types for all levels: beginners to teachers. Find a rhythm that fits and sustains.',
        items: [
          { title: 'Foundational Maqamat Class', desc: 'For beginners to build voice, tajwid, and maqamat basics.' },
          { title: "Soulful Qur'an Masterclass", desc: 'Advanced level for depth, improvisation, and teaching methodology.' },
          { title: 'Workshops (Online/Offline)', desc: 'One-day intensive, available for public and institutions.' },
          { title: 'Thematic Webinars', desc: 'Focused topics: breathing, articulation, or meaning immersion.' },
        ],
        meta: 'Programs page: Latest schedule • Event info • Registration',
        cta: 'See program details',
      },
      media: {
        title: 'Media',
        subtitle: 'Videos and inspiring content to accompany your recitation journey.',
        bullets: ['Selected murottal', 'Maqamat tutorials', 'Recitation tips', 'Viral IG/TikTok clips', 'YouTube playlists'],
        socials: { title: 'Follow', ig: 'Instagram', yt: 'YouTube', tk: 'TikTok' },
      },
      komunitas: {
        title: 'Community',
        subtitle:
          'A community of Qur\'an learners across Indonesia. A space to share inspiration, practice, and spiritual journeys together.',
        body:
          "Join the Soulful Qur'an Community: discussion forums, recitation submissions, and monthly studies. Get 30-day challenges and regular mentoring.",
        gallery: 'Gallery: Class photos • Community events • Workshops',
      },
      store: {
        title: 'Store',
        subtitle: 'Supporting products to enrich practice and consistency.',
        items: [
          { title: 'Books & eBooks', desc: 'Tartil guides, core tajwid, and thematic tadabbur.' },
          { title: 'Merchandise', desc: 'Official merch to support your routine.' },
          { title: 'Exclusive Audio/Video', desc: 'Leveled practice materials and maqamat examples.' },
          { title: 'Digital Membership', desc: 'Access to classes, community, and premium content.' },
          { title: 'Recommended Tools', desc: 'Mics, stands, and supportive equipment.' },
        ],
        features: 'Features: Featured products • Promotions • Testimonials • FAQ',
      },
      testi: {
        title: 'Testimonials & Achievements',
        items: [
          { name: 'Aisyah', role: 'Alumni', text: 'The approach helped me feel the meaning, not only master technique.' },
          { name: 'Rizki', role: 'Teacher', text: 'Structured and applicable. Warm classes focused on meaning.' },
        ],
        partners: ['Partners & collaborators', 'Institutions & communities'],
        achievements: 'Digital reach: Instagram, YouTube, digital recitation awards',
      },
      kolab: {
        title: 'Collaboration',
        body: 'Open to training, events, education programs, media partnerships, and merchandise collaborations.',
        cta: 'Propose Collaboration',
      },
      kontak: {
        title: 'Contact',
        subtitle: 'Contact form, official WhatsApp, email, and class/event invite links.',
        cta: 'Send Message',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        wa: 'WhatsApp Chat',
        emailBtn: 'Send Email',
      },
    },
  }[lang]

  return (
    <>
      {/* Profil */}
      <Section id="profil-section" title={copy.profil.title} icon={<Award className="text-[#936732]" />}>
        <div className="grid lg:grid-cols-3 gap-6">
          <InfoCard title={copy.profil.aboutTitle}>
            <p className="text-[#282828]/80">{copy.profil.aboutBody}</p>
          </InfoCard>
          <InfoCard title={copy.profil.visiTitle}>
            <p className="text-[#282828]/80">{copy.profil.visiBody}</p>
          </InfoCard>
          <InfoCard title={`${copy.profil.soulfulTitle} — ${copy.profil.soulfulWhat}`}>
            <p className="text-[#282828]/80">{copy.profil.soulfulBody}</p>
            <ul className="mt-3 space-y-1 list-disc pl-5 text-[#282828]/80">
              {copy.profil.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <p className="mt-3 text-[#936732] font-medium">{copy.profil.testi}</p>
          </InfoCard>
        </div>
      </Section>

      {/* Program */}
      <Section id="program" title={copy.program.title} subtitle={copy.program.subtitle} icon={<BookOpen className="text-[#936732]" />}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {copy.program.items.map((it, i) => (
            <Card key={i} title={it.title} desc={it.desc} />
          ))}
        </div>
        <div className="mt-4 text-sm text-[#282828]/70">{copy.program.meta}</div>
        <div className="mt-6">
          <a href="#kontak" className="inline-flex px-4 py-2 rounded-lg bg-[#282828] text-white text-sm font-medium hover:opacity-90">{copy.program.cta}</a>
        </div>
      </Section>

      {/* Media */}
      <Section id="media" title={copy.media.title} subtitle={copy.media.subtitle} icon={<PlayCircle className="text-[#936732]" />}>
        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard title={lang === 'id' ? 'Konten' : 'Content'}>
            <ul className="space-y-1 list-disc pl-5 text-[#282828]/80">
              {copy.media.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </InfoCard>
          <InfoCard title={copy.media.socials.title}>
            <div className="flex flex-wrap gap-3">
              <SocialButton icon={<Instagram size={16} />} label={copy.media.socials.ig} href="#" />
              <SocialButton icon={<Youtube size={16} />} label={copy.media.socials.yt} href="#" />
              <SocialButton icon={<Music2 size={16} />} label={copy.media.socials.tk} href="#" />
            </div>
          </InfoCard>
          <div className="grid grid-cols-3 gap-3">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="aspect-video rounded-xl bg-gradient-to-br from-[#F6D29E]/50 to-[#C4AA80]/30 ring-1 ring-[#C4AA80]" />
            ))}
          </div>
        </div>
      </Section>

      {/* Komunitas */}
      <Section id="komunitas" title={copy.komunitas.title} subtitle={copy.komunitas.subtitle} icon={<Users2 className="text-[#936732]" />}>
        <div className="rounded-2xl p-6 bg-white ring-1 ring-[#C4AA80]">
          <p className="text-[#282828]/80">{copy.komunitas.body}</p>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[1,2,3].map((i) => (
              <div key={i} className="h-28 rounded-xl bg-gradient-to-br from-[#F6D29E]/40 to-white ring-1 ring-[#C4AA80]" />
            ))}
          </div>
          <p className="mt-3 text-sm text-[#282828]/70">{copy.komunitas.gallery}</p>
        </div>
      </Section>

      {/* Store */}
      <Section id="store" title={copy.store.title} subtitle={copy.store.subtitle} icon={<ShoppingBag className="text-[#936732]" />}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {copy.store.items.map((it, i) => (
            <Card key={i} title={it.title} desc={it.desc} />
          ))}
        </div>
        <p className="mt-4 text-sm text-[#282828]/70">{copy.store.features}</p>
      </Section>

      {/* Testimoni & Prestasi */}
      <Section id="testimoni" title={copy.testi.title} icon={<Star className="text-[#936732]" />}>
        <div className="grid md:grid-cols-2 gap-6">
          {copy.testi.items.map((t, i) => (
            <TestiCard key={i} name={t.name} role={t.role} text={t.text} />
          ))}
        </div>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <InfoCard title={lang === 'id' ? 'Partner & Kolaborator' : 'Partners & Collaborators'}>
            <ul className="list-disc pl-5 text-[#282828]/80">
              {copy.testi.partners.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </InfoCard>
          <InfoCard title={lang === 'id' ? 'Capaian Digital' : 'Digital Achievements'}>
            <p className="text-[#282828]/80">{copy.testi.achievements}</p>
          </InfoCard>
        </div>
      </Section>

      {/* Kolaborasi */}
      <Section id="kolaborasi" title={copy.kolab.title} icon={<Share2 className="text-[#936732]" />}>
        <div className="rounded-2xl p-6 bg-white ring-1 ring-[#C4AA80]">
          <p className="text-[#282828]/80">{copy.kolab.body}</p>
          <div className="mt-4">
            <a href="#kontak" className="inline-flex px-4 py-2 rounded-lg bg-[#282828] text-white text-sm font-medium hover:opacity-90">{copy.kolab.cta}</a>
          </div>
        </div>
      </Section>

      {/* Kontak */}
      <Section id="kontak" title={copy.kontak.title} subtitle={copy.kontak.subtitle} icon={<Phone className="text-[#936732]" />}>
        <form onSubmit={(e)=> e.preventDefault()} className="grid sm:grid-cols-2 gap-4">
          <input className="px-4 py-3 rounded-xl ring-1 ring-[#C4AA80] focus:ring-2 focus:ring-[#936732] outline-none bg-white" placeholder={copy.kontak.name} />
          <input className="px-4 py-3 rounded-xl ring-1 ring-[#C4AA80] focus:ring-2 focus:ring-[#936732] outline-none bg-white" placeholder={copy.kontak.email} />
          <textarea rows="4" className="sm:col-span-2 px-4 py-3 rounded-xl ring-1 ring-[#C4AA80] focus:ring-2 focus:ring-[#936732] outline-none bg-white" placeholder={copy.kontak.message} />
          <div className="sm:col-span-2 flex flex-wrap gap-3">
            <button className="px-5 py-3 rounded-xl bg-[#282828] text-white font-medium hover:opacity-90 transition">{copy.kontak.cta}</button>
            <a href="#" className="px-5 py-3 rounded-xl bg-white text-[#282828] font-medium ring-1 ring-[#C4AA80] hover:bg-[#F6D29E]/30 transition">{copy.kontak.wa}</a>
            <a href="mailto:hello@example.com" className="px-5 py-3 rounded-xl bg-white text-[#282828] font-medium ring-1 ring-[#C4AA80] hover:bg-[#F6D29E]/30 transition">{copy.kontak.emailBtn}</a>
          </div>
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
          {subtitle && <p className="mt-2 text-[#282828]/70">{subtitle}</p>}
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
      <div className="h-32 rounded-xl bg-gradient-to-br from-[#F6D29E]/50 to-white ring-1 ring-[#C4AA80]" />
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

function InfoCard({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-5 rounded-2xl bg-white ring-1 ring-[#C4AA80]"
    >
      <div className="font-semibold text-[#282828]">{title}</div>
      <div className="mt-2">{children}</div>
    </motion.div>
  )
}

function TestiCard({ name, role, text }) {
  return (
    <div className="p-5 rounded-2xl bg-white ring-1 ring-[#C4AA80]">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-[#936732] text-white grid place-items-center text-sm font-semibold">{name[0]}</div>
        <div>
          <div className="font-semibold text-[#282828]">{name}</div>
          <div className="text-xs text-[#282828]/70">{role}</div>
        </div>
      </div>
      <p className="mt-3 text-[#282828]/80">“{text}”</p>
    </div>
  )
}

function SocialButton({ icon, label, href }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-[#282828] ring-1 ring-[#C4AA80] hover:bg-[#F6D29E]/30"
    >
      <span className="opacity-80">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </a>
  )
}
