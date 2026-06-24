import { useRef, useState } from 'react'
import VideoPlayer from './VideoPlayer'

const DRIVE_SRC = 'https://drive.google.com/file/d/1varxjuzS--SAxsf5NcUMggeST2QMJYPU/preview'
const YT_SRC = 'https://www.youtube.com/embed/xqlnDoOkubo?autoplay=1&mute=1&loop=1&playlist=xqlnDoOkubo&controls=0&playsinline=1'

const slides = [
  {
    id: 'ai-model',
    src: DRIVE_SRC,
    allow: 'autoplay; encrypted-media',
    title: 'Modelos e Influencers IA',
    desc: 'Crea tu propia modelo o influencer virtual con IA',
  },
  {
    id: 'airbnb-tours',
    src: YT_SRC,
    allow: 'autoplay; encrypted-media; gyroscope; picture-in-picture',
    title: 'Tours Cinematográficos para Airbnb',
    desc: 'Convierte las fotos de tu propiedad en un video inmersivo con IA',
  },
]

export default function VideoCarousel() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)

  const scrollTo = (index) => {
    const track = trackRef.current
    if (!track) return
    const item = track.children[index]
    if (item) item.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    setActive(index)
  }

  const handleScroll = () => {
    const track = trackRef.current
    if (!track) return
    const { scrollLeft, offsetWidth } = track
    const items = Array.from(track.children)
    let closest = 0
    let minDist = Infinity
    items.forEach((el, i) => {
      const dist = Math.abs(el.offsetLeft - scrollLeft)
      if (dist < minDist) { minDist = dist; closest = i }
    })
    if (closest !== active) setActive(closest)
  }

  return (
    <section id="videos" style={{ background: '#F9FAFB' }}>
      <style>{`
        .vc-track::-webkit-scrollbar { display: none; }
        @media (max-width: 767px) {
          .vc-track {
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            justify-content: flex-start !important;
            flex-wrap: nowrap !important;
            padding: 0 16px 8px !important;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .vc-item { flex: 0 0 88% !important; width: auto !important; scroll-snap-align: start; }
          .vc-controls { display: flex !important; }
          .vc-arrows { display: flex !important; }
        }
      `}</style>

      <div className="container">
        <div className="section-label-wrap">
          <span className="section-label">Videos</span>
        </div>
        <h2 className="section-title">Mira lo que <span className="gradient-text">hacemos</span></h2>
        <p className="section-sub">Resultados reales con inteligencia artificial</p>
      </div>

      {/* Video track — side-by-side desktop, carousel mobile */}
      <div
        ref={trackRef}
        className="vc-track"
        onScroll={handleScroll}
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 32,
          flexWrap: 'wrap',
          padding: '0 24px',
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="vc-item"
            style={{ width: 320, flexShrink: 0 }}
          >
            <VideoPlayer
              src={slide.src}
              title={slide.title}
              allow={slide.allow}
              vertical={true}
              mb={0}
            />
            <div style={{ marginTop: 16, textAlign: 'center' }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 6 }}>
                {slide.title}
              </h3>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.55 }}>{slide.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls (arrows + dots) — shown on mobile only via CSS */}
      <div
        className="vc-controls"
        style={{
          display: 'none',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          marginTop: 24,
          paddingBottom: 4,
        }}
      >
        {/* Left arrow */}
        <button
          className="vc-arrows"
          onClick={() => scrollTo(Math.max(0, active - 1))}
          disabled={active === 0}
          style={{
            display: 'none',
            background: '#FFFFFF', border: '1px solid #E5E7EB',
            borderRadius: '50%', width: 36, height: 36,
            alignItems: 'center', justifyContent: 'center',
            color: '#6B7280', fontSize: 18, cursor: 'pointer',
            boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
            opacity: active === 0 ? 0.35 : 1,
          }}
        >‹</button>

        {/* Dots */}
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            style={{
              width: i === active ? 20 : 7,
              height: 7,
              borderRadius: i === active ? 4 : '50%',
              background: i === active ? '#2563EB' : '#D1D5DB',
              border: 'none', cursor: 'pointer',
              transition: 'all 0.22s', padding: 0,
            }}
          />
        ))}

        {/* Right arrow */}
        <button
          className="vc-arrows"
          onClick={() => scrollTo(Math.min(slides.length - 1, active + 1))}
          disabled={active === slides.length - 1}
          style={{
            display: 'none',
            background: '#FFFFFF', border: '1px solid #E5E7EB',
            borderRadius: '50%', width: 36, height: 36,
            alignItems: 'center', justifyContent: 'center',
            color: '#6B7280', fontSize: 18, cursor: 'pointer',
            boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
            opacity: active === slides.length - 1 ? 0.35 : 1,
          }}
        >›</button>
      </div>
    </section>
  )
}
