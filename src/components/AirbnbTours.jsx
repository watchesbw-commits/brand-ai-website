const plans = [
  { name: 'Básico',    images: 10, price: '$800 MXN' },
  { name: 'Estándar',  images: 20, price: '$1,500 MXN' },
  { name: 'Avanzado',  images: 30, price: '$2,200 MXN' },
  { name: 'Premium',   images: 40, price: '$2,800 MXN', featured: true },
  { name: 'Élite',     images: 50, price: '$3,500 MXN' },
  { name: 'Completo',  images: 60, price: '$4,200 MXN' },
]

const WA_MSG = encodeURIComponent(
  '¡Hola Brand AI! Me interesa el Tour Cinematográfico para Airbnb. ¿Pueden darme más información?'
)
const WA_LINK = `https://wa.me/526271424345?text=${WA_MSG}`

function PlanCard({ name, images, price, featured }) {
  return (
    <div
      style={{
        background: featured ? 'rgba(0,200,255,0.06)' : 'rgba(0,200,255,0.03)',
        border: `1px solid ${featured ? 'rgba(0,200,255,0.5)' : 'rgba(0,200,255,0.15)'}`,
        borderRadius: 12,
        padding: '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        backdropFilter: 'blur(10px)',
        boxShadow: featured ? '0 0 28px rgba(0,200,255,0.1)' : 'none',
        position: 'relative',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.borderColor = 'rgba(0,200,255,0.55)'
        e.currentTarget.style.boxShadow = '0 0 24px rgba(0,200,255,0.15)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = featured ? 'rgba(0,200,255,0.5)' : 'rgba(0,200,255,0.15)'
        e.currentTarget.style.boxShadow = featured ? '0 0 28px rgba(0,200,255,0.1)' : 'none'
      }}
    >
      {featured && (
        <div style={{
          position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)',
          background: 'transparent', border: '1px solid #00c8ff', color: '#00c8ff',
          fontSize: 10, fontWeight: 700, padding: '4px 16px', borderRadius: 4,
          letterSpacing: '0.15em', whiteSpace: 'nowrap',
          boxShadow: '0 0 12px rgba(0,200,255,0.4)', textTransform: 'uppercase',
        }}>Más popular</div>
      )}

      <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>{name}</div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 28, fontWeight: 900, color: '#00c8ff', textShadow: '0 0 14px rgba(0,200,255,0.4)' }}>
          {price}
        </span>
      </div>

      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        fontSize: 13, color: 'rgba(255,255,255,0.55)',
        borderTop: '1px solid rgba(0,200,255,0.1)', paddingTop: 12,
      }}>
        <span style={{ color: '#00c8ff', fontSize: 16 }}>🖼️</span>
        {images} imágenes incluidas
      </div>

      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
        style={{ justifyContent: 'center', textAlign: 'center', marginTop: 4 }}
      >
        Quiero mi video
      </a>
    </div>
  )
}

export default function AirbnbTours() {
  return (
    <section id="airbnb-tours">
      <div className="container">
        {/* Header */}
        <p style={{
          textAlign: 'center', color: '#00c8ff', fontSize: 12, fontWeight: 700,
          letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 12,
        }}>
          Airbnb · Inmuebles
        </p>
        <h2 className="section-title">Tours Cinematográficos para Airbnb con IA</h2>
        <p className="section-sub" style={{ maxWidth: 620, margin: '0 auto 52px' }}>
          Convertimos las fotos de tu propiedad en un video cinematográfico inmersivo con
          inteligencia artificial. Ideal para aumentar reservas en Airbnb, Instagram y TikTok.
        </p>

        {/* YouTube embed */}
        <div style={{ maxWidth: 800, margin: '0 auto 64px', padding: '0 0' }}>
          <div style={{
            position: 'relative',
            width: '100%',
            paddingTop: '56.25%', /* 16:9 */
            borderRadius: 14,
            overflow: 'hidden',
            border: '1px solid rgba(0,200,255,0.18)',
            boxShadow: '0 0 40px rgba(0,200,255,0.1), 0 20px 60px rgba(0,0,0,0.6)',
          }}>
            <iframe
              src="https://www.youtube.com/embed/xqlnDoOkubo"
              title="Tour Cinematográfico para Airbnb con IA — Brand AI"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute', top: 0, left: 0,
                width: '100%', height: '100%',
                border: 'none',
              }}
            />
          </div>
        </div>

        {/* Pricing grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: 20,
          marginBottom: 48,
        }}>
          {plans.map((p, i) => <PlanCard key={i} {...p} />)}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center' }}>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '14px 40px', fontSize: 13 }}
          >
            📱 Hablar con un asesor
          </a>
          <p style={{ marginTop: 16, fontSize: 12, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em' }}>
            Respuesta en menos de 24 h · Sin compromiso
          </p>
        </div>
      </div>
    </section>
  )
}
