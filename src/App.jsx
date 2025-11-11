import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuGrid from './components/MenuGrid'
import Specials from './components/Specials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50">
      <Navbar />
      <Hero />
      <Specials />
      <MenuGrid />
      <Footer />
    </div>
  )
}

export default App
