import Carousel from './Carousel'

const plans = [
  { name: 'Básico',   images: 10, price: '$800 MXN'   },
  { name: 'Estándar', images: 20, price: '$1,500 MXN'  },
  { name: 'Avanzado', images: 30, price: '$2,200 MXN'  },
  { name: 'Premium',  images: 40, price: '$2,800 MXN', featured: true },
  { name: 'Élite',    images: 50, price: '$3,500 MXN'  },
  { name: 'Completo', images: 60, price: '$4,200 MXN'  },
]

const WA_MSG = encodeURIComponent(
  '¡Hola Brand AI! Me interesa el Tour Cinematográfico para Airbnb. ¿Pueden darme más información?'
)
const WA_LINK = `https://wa.me/526271424345?text=${WA_MSG}`

const VIDEO_SRC =
  'https://www.youtube.com/embed/xqlnDoOkubo?autoplay=1&mute=1&loop=1&playlist=xqlnDoOkubo&controls=0&playsinline=1&rel=0&modestbranding=1'

function PhoneMockup() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 72 }}>
      <div className="phone-mockup" style={{ position: 'relative', width: 280 }}>

        {/* Volume buttons */}
        <div style={{ position: 'absolute', left: -4, top: 80, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ width: 4, height: 32, background: '#2a2a2a', borderRadius: '3px 0 0 3px' }}/>
          <div style={{ width: 4, height: 32, background: '#2a2a2a', borderRadius: '3px 0 0 3px' }}/>
        </div>

        {/* Power button */}
        <div style={{ position: 'absolute', right: -4, top: 110 }}>
          <div style={{ width: 4, height: 52, background: '#2a2a2a', borderRadius: '0 3px 3px 0' }}/>
        </div>

        {/* Body */}
        <div style={{
          background: 'linear-gradient(160deg, #1c1c1e, #111)',
          borderRadius: 44, padding: '14px 10px 20px',
          boxShadow: [
            '0 0 0 1px rgba(255,255,255,0.1)',
            '0 0 0 2px #0a0a0a',
            '0 50px 100px rgba(0,0,0,0.5)',
            '0 0 60px rgba(124,58,237,0.15)',
          ].join(', '),
          position: 'relative',
        }}>
          {/* Dynamic Island */}
          <div style={{
            width: 100, height: 28, background: '#000',
            borderRadius: 20, margin: '0 auto 6px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#1c1c1e', border: '1px solid #333' }}/>
            <div style={{ width: 40, height: 10, borderRadius: 5, background: '#0a0a0a' }}/>
          </div>

          {/* Screen */}
          <div style={{ borderRadius: 34, overflow: 'hidden', background: '#000' }}>
            <div style={{ position: 'relative', width: '100%', paddingTop: '177.78%' }}>
              <iframe
                src={VIDEO_SRC}
                title="Tour Cinematográfico para Airbnb — Brand AI"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', display: 'block' }}
              />
            </div>
          </div>

          {/* Home indicator */}
          <div style={{ width: 90, height: 4, background: 'rgba(255,255,255,0.25)', borderRadius: 2, margin: '10px auto 0' }}/>
        </div>
      </div>

      <style>{`@media (max-width: 480px) { .phone-mockup { width: 220px !important; } }`}</style>
    </div>
  )
}

function PlanCard({ name, images, price, featured }) {
  return (
    <div style={{
      background: featured ? 'linear-gradient(135deg, #7C3AED, #5B21B6)' : '#fff',
      border: featured ? 'none' : '1px solid rgba(26,26,46,0.08)',
      borderRadius: 14, padding: '28px 22px',
      display: 'flex', flexDirection: 'column', gap: 14,
      boxShadow: featured ? '0 10px 36px rgba(124,58,237,0.35)' : '0 2px 14px rgba(26,26,46,0.06)',
      position: 'relative', transition: 'all 0.25s ease', height: '100%',
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)' }}
    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
    >
      {featured && (
        <div style={{
          position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)',
          background: '#1A1A2E', color: '#fff',
          fontSize: 10, fontWeight: 700, padding: '5px 18px', borderRadius: 100,
          letterSpacing: '0.15em', whiteSpace: 'nowrap', textTransform: 'uppercase',
        }}>Más popular</div>
      )}

      <div style={{ fontSize: 16, fontWeight: 700, color: featured ? '#fff' : '#1A1A2E' }}>{name}</div>
      <div style={{ fontSize: 26, fontWeight: 900, color: featured ? '#fff' : '#7C3AED', lineHeight: 1 }}>{price}</div>

      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        fontSize: 13, color: featured ? 'rgba(255,255,255,0.7)' : 'rgba(26,26,46,0.55)',
        borderTop: `1px solid ${featured ? 'rgba(255,255,255,0.15)' : 'rgba(26,26,46,0.07)'}`,
        paddingTop: 12, marginTop: 'auto',
      }}>
        <span>🖼️</span> {images} imágenes incluidas
      </div>

      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        padding: '11px', borderRadius: 10, fontWeight: 600, fontSize: 13,
        background: featured ? '#fff' : '#7C3AED',
        color: featured ? '#7C3AED' : '#fff',
        border: 'none',
        boxShadow: featured ? '0 4px 14px rgba(0,0,0,0.12)' : '0 2px 10px rgba(124,58,237,0.25)',
        transition: 'all 0.22s', textTransform: 'none',
      }}>
        Quiero mi video
      </a>
    </div>
  )
}

export default function AirbnbTours() {
  return (
    <section id="airbnb-tours" style={{ background: '#FFFFFF' }}>
      <div className="container">
        <p className="section-label">Airbnb · Inmuebles</p>
        <h2 className="section-title">Tours Cinematográficos para Airbnb con IA</h2>
        <p className="section-sub">
          Convertimos las fotos de tu propiedad en un video cinematográfico inmersivo con
          inteligencia artificial. Ideal para aumentar reservas en Airbnb, Instagram y TikTok.
        </p>

        <PhoneMockup />

        <Carousel minWidth={220}>
          {plans.map((p, i) => <PlanCard key={i} {...p} />)}
        </Carousel>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '14px 40px', fontSize: 14 }}>
            📱 Hablar con un asesor
          </a>
          <p style={{ marginTop: 14, fontSize: 12, color: 'rgba(26,26,46,0.35)', letterSpacing: '0.06em' }}>
            Respuesta en menos de 24 h · Sin compromiso
          </p>
        </div>
      </div>
    </section>
  )
}
