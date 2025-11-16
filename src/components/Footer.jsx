export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} EduPro. All rights reserved.</p>
        <div className="text-sm text-gray-500">Profil · Program · Media · Komunitas · Store · Kontak</div>
      </div>
    </footer>
  )
}
