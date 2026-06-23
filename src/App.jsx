import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Packages from './components/Packages'
import WhyBrandAI from './components/WhyBrandAI'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Divider() {
  return <hr className="section-divider" />
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Divider />
      <Services />
      <Divider />
      <Packages />
      <Divider />
      <WhyBrandAI />
      <Divider />
      <Portfolio />
      <Divider />
      <Contact />
      <Divider />
      <Footer />
    </>
  )
}
