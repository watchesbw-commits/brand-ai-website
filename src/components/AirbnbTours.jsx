import Carousel from './Carousel'
import PhoneMockup from './PhoneMockup'

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

const YT_SRC = 'https://www.youtube.com/embed/xqlnDoOkubo?autoplay=1&mute=1&loop=1&playlist=xqlnDoOkubo&controls=0&playsinline=1&rel=0&modestbranding=1'

function PlanCard({ name, images, price, featured }) {
  return (
    <div style={{
      background: featured ? 'linear-gradient(145deg, #0066FF, #00D4FF)' : '#fff',
      border: featured ? 'none' : '1px solid #E0EAFF',
      borderRadius: 14, padding: '28px 22px',
      display: 'flex', flexDirection: 'column', gap: 14,
      boxShadow: featured
        ? '0 16px 48px rgba(0,102,255,0.4), 0 4px 0 #0044CC'
        : '0 10px 40px rgba(0,102,255,0.1)',
      position: 'relative', transition: 'all 0.3s ease', height: '100%',
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)' }}
    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
    >
      {featured && (
        <div style={{
          position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
          background: '#0A0A1A', color: '#fff',
          fontSize: 10, fontWeight: 700, padding: '5px 20px', borderRadius: 100,
          letterSpacing: '0.15em', whiteSpace: 'nowrap', textTransform: 'uppercase',
        }}>Más popular</div>
      )}

      <div style={{ fontSize: 16, fontWeight: 700, color: featured ? '#fff' : '#0A0A1A' }}>{name}</div>
      <div style={{ fontSize: 28, fontWeight: 900, color: featured ? '#fff' : '#0066FF', lineHeight: 1 }}>{price}</div>

      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, fontSize: 13,
        color: featured ? 'rgba(255,255,255,0.75)' : '#4A5568',
        borderTop: `1px solid ${featured ? 'rgba(255,255,255,0.2)' : '#E0EAFF'}`,
        paddingTop: 12, marginTop: 'auto',
      }}>
        <span>🖼️</span> {images} imágenes incluidas
      </div>

      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        padding: '11px', borderRadius: 10, fontWeight: 700, fontSize: 13,
        background: featured ? '#fff' : 'linear-gradient(135deg, #0066FF, #00D4FF)',
        color: featured ? '#0066FF' : '#fff',
        border: 'none',
        boxShadow: featured ? '0 4px 14px rgba(0,0,0,0.12)' : '0 6px 18px rgba(0,102,255,0.35), 0 3px 0 #0044CC',
        transition: 'all 0.22s', textDecoration: 'none',
      }}>
        Quiero mi video
      </a>
    </div>
  )
}

export default function AirbnbTours() {
  return (
    <section id="airbnb-tours" style={{ background: '#F0F4FF' }}>
      <div className="container">
        <div className="section-label-wrap">
          <span className="section-label">Airbnb · Inmuebles</span>
        </div>
        <h2 className="section-title gradient-text">Tours Cinematográficos para Airbnb con IA</h2>
        <p className="section-sub">
          Convertimos las fotos de tu propiedad en un video cinematográfico inmersivo con
          inteligencia artificial. Ideal para aumentar reservas en Airbnb, Instagram y TikTok.
        </p>

        <PhoneMockup src={YT_SRC} title="Tour Cinematográfico Airbnb — Brand AI" />

        <Carousel minWidth={220}>
          {plans.map((p, i) => <PlanCard key={i} {...p} />)}
        </Carousel>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '14px 40px' }}>
            📱 Hablar con un asesor
          </a>
          <p style={{ marginTop: 14, fontSize: 12, color: '#4A5568' }}>
            Respuesta en menos de 24 h · Sin compromiso
          </p>
        </div>
      </div>
    </section>
  )
}
