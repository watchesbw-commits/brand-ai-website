import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VideoCarousel from './components/VideoCarousel'
import Services from './components/Services'
import AIModels from './components/AIModels'
import Packages from './components/Packages'
import DreamGenerator from './components/DreamGenerator'
import WhyBrandAI from './components/WhyBrandAI'
import AirbnbTours from './components/AirbnbTours'
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
      <VideoCarousel />
      <Divider />
      <Services />
      <Divider />
      <AIModels />
      <Divider />
      <Packages />
      <Divider />
      <DreamGenerator />
      <Divider />
      <WhyBrandAI />
      <Divider />
      <AirbnbTours />
      <Divider />
      <Portfolio />
      <Divider />
      <Contact />
      <Footer />
    </>
  )
}
