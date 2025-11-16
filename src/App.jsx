import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sections from './components/Sections'
import Footer from './components/Footer'

function App() {
  const [lang, setLang] = useState('id') // 'id' | 'en'

  return (
    <div className="min-h-screen bg-[#F7F3F0] text-[#282828]">
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <main>
        <Sections lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  )
}

export default App
