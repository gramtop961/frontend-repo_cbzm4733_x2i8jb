export default function Footer({ lang = 'id' }) {
  const text = lang === 'id'
    ? { nav: 'Profil · Program · Media · Komunitas · Store · Kontak', rights: 'Seluruh hak cipta dilindungi.' }
    : { nav: 'Profile · Programs · Media · Community · Store · Contact', rights: 'All rights reserved.' }

  return (
    <footer className="border-t border-[#C4AA80]/50 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#282828]/60">© {new Date().getFullYear()} Bilal Qori. {text.rights}</p>
        <div className="text-sm text-[#282828]/60">{text.nav}</div>
      </div>
    </footer>
  )
}
