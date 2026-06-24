import { useRef, useState } from 'react'
import VideoPlayer from './VideoPlayer'

const YT_SRC = 'https://www.youtube.com/embed/xqlnDoOkubo?autoplay=1&mute=1&loop=1&playlist=xqlnDoOkubo&controls=0&playsinline=1&rel=0&modestbranding=1'

const slides = [
  {
    id: 'ai-model',
    title: 'Influencers de IA para tu marca',
    desc: 'Tu propia modelo virtual generando videos profesionales 24/7, sin locación ni equipo.',
    videoProps: { placeholder: true, vertical: true, title: 'Modelo IA — Brand AI', mb: 24 },
  },
  {
    id: 'airbnb-tours',
    title: 'Tours Cinematográficos para Airbnb',
    desc: 'Convertimos las fotos de tu propiedad en un video inmersivo para aumentar tus reservas.',
    videoProps: { src: YT_SRC, vertical: false, title: 'Tour Airbnb — Brand AI', mb: 24 },
  },
]

const arrowStyle = {
  position: 'absolute', top: '42%', transform: 'translateY(-50%)',
  background: 'rgba(13,13,31,0.85)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  border: '1px solid rgba(0,212,255,0.4)',
  borderRadius: '50%',
  width: 48, height: 48,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  color: '#00D4FF', fontSize: 24, cursor: 'pointer', zIndex: 10,
  boxShadow: '0 0 20px rgba(0,102,255,0.35)',
  transition: 'all 0.2s',
}

export default function VideoCarousel() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)

  const scrollTo = (index) => {
    const track = trackRef.current
    if (!track) return
    track.scrollTo({ left: track.offsetWidth * index, behavior: 'smooth' })
    setActive(index)
  }

  const handleScroll = () => {
    const track = trackRef.current
    if (!track) return
    const index = Math.round(track.scrollLeft / track.offsetWidth)
    if (index !== active) setActive(index)
  }

  return (
    <section id="videos" style={{ background: '#050510', overflow: 'hidden' }}>
      <style>{`.vc-track::-webkit-scrollbar { display: none; }`}</style>

      <div className="container">
        <div className="section-label-wrap">
          <span className="section-label">Videos</span>
        </div>
        <h2 className="section-title gradient-text">Mira lo que hacemos</h2>
        <p className="section-sub">Resultados reales con inteligencia artificial</p>
      </div>

      <div style={{ position: 'relative' }}>
        {/* Carousel track */}
        <div
          ref={trackRef}
          className="vc-track"
          onScroll={handleScroll}
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              style={{ flex: '0 0 100%', scrollSnapAlign: 'start', padding: '0 0 8px' }}
            >
              <VideoPlayer {...slide.videoProps} />
              <div style={{ textAlign: 'center', padding: '0 24px 16px', maxWidth: 700, margin: '0 auto' }}>
                <h3 style={{
                  color: '#FFFFFF',
                  fontSize: 'clamp(18px, 3vw, 24px)',
                  fontWeight: 800, marginBottom: 10,
                }}>
                  {slide.title}
                </h3>
                <p style={{ color: '#8892B0', fontSize: 15, lineHeight: 1.65 }}>{slide.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Left arrow */}
        {active > 0 && (
          <button
            onClick={() => scrollTo(active - 1)}
            style={{ ...arrowStyle, left: 16 }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(0,212,255,0.5)'
              e.currentTarget.style.borderColor = '#00D4FF'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0,102,255,0.35)'
              e.currentTarget.style.borderColor = 'rgba(0,212,255,0.4)'
            }}
          >‹</button>
        )}

        {/* Right arrow */}
        {active < slides.length - 1 && (
          <button
            onClick={() => scrollTo(active + 1)}
            style={{ ...arrowStyle, right: 16 }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(0,212,255,0.5)'
              e.currentTarget.style.borderColor = '#00D4FF'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0,102,255,0.35)'
              e.currentTarget.style.borderColor = 'rgba(0,212,255,0.4)'
            }}
          >›</button>
        )}
      </div>

      {/* Dot indicators */}
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        gap: 8, marginTop: 28, paddingBottom: 8,
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            style={{
              width: i === active ? 22 : 8,
              height: 8,
              borderRadius: i === active ? 4 : '50%',
              background: i === active
                ? 'linear-gradient(135deg, #0066FF, #00D4FF)'
                : 'rgba(0,102,255,0.25)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.22s',
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  )
}
