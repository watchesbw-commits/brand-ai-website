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

function PlanCard({ name, images, price, featured }) {
  return (
    <div style={{
      background: featured ? '#2563EB' : '#FFFFFF',
      border: featured ? 'none' : '1px solid #E5E7EB',
      borderRadius: 14, padding: '24px 20px',
      display: 'flex', flexDirection: 'column', gap: 12,
      position: 'relative', transition: 'all 0.25s ease', height: '100%',
      boxShadow: featured ? '0 8px 24px rgba(37,99,235,0.3)' : '0 1px 3px rgba(0,0,0,0.08)',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-4px)'
      if (!featured) e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(0)'
      if (!featured) e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)'
    }}
    >
      {featured && (
        <div style={{
          position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)',
          background: '#111827', color: '#fff',
          fontSize: 10, fontWeight: 700, padding: '4px 16px', borderRadius: 100,
          letterSpacing: '0.12em', whiteSpace: 'nowrap', textTransform: 'uppercase',
        }}>Más popular</div>
      )}

      <div style={{ fontSize: 15, fontWeight: 600, color: featured ? '#fff' : '#111827' }}>{name}</div>
      <div style={{ fontSize: 26, fontWeight: 800, color: featured ? '#fff' : '#2563EB', lineHeight: 1 }}>{price}</div>

      <div style={{
        display: 'flex', alignItems: 'center', gap: 6, fontSize: 13,
        color: featured ? 'rgba(255,255,255,0.75)' : '#6B7280',
        borderTop: `1px solid ${featured ? 'rgba(255,255,255,0.2)' : '#E5E7EB'}`,
        paddingTop: 10, marginTop: 'auto',
      }}>
        <span>🖼️</span> {images} imágenes incluidas
      </div>

      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        padding: '10px', borderRadius: 8, fontWeight: 600, fontSize: 13,
        background: featured ? '#fff' : '#2563EB',
        color: featured ? '#2563EB' : '#fff',
        border: 'none',
        boxShadow: 'none',
        transition: 'all 0.18s', textDecoration: 'none',
      }}
      onMouseEnter={e => { e.currentTarget.style.opacity = '0.9' }}
      onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
      >
        Quiero mi video
      </a>
    </div>
  )
}

export default function AirbnbTours() {
  return (
    <section id="airbnb-tours" style={{ background: '#F9FAFB' }}>
      <div className="container">
        <div className="section-label-wrap">
          <span className="section-label">Airbnb · Inmuebles</span>
        </div>
        <h2 className="section-title">Tours <span className="gradient-text">Cinematográficos</span> para Airbnb</h2>
        <p className="section-sub">
          Convertimos las fotos de tu propiedad en un video cinematográfico inmersivo con
          inteligencia artificial. Ideal para aumentar reservas en Airbnb, Instagram y TikTok.
        </p>

        <Carousel minWidth={200}>
          {plans.map((p, i) => <PlanCard key={i} {...p} />)}
        </Carousel>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '12px 36px' }}>
            📱 Hablar con un asesor
          </a>
          <p style={{ marginTop: 12, fontSize: 12, color: '#9CA3AF' }}>
            Respuesta en menos de 24 h · Sin compromiso
          </p>
        </div>
      </div>
    </section>
  )
}
