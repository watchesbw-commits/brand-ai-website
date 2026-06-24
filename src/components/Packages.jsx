import Carousel from './Carousel'

const smallPkgs = [
  {
    name: 'Arranca Digital', price: '$1,299/mes', note: 'sin contrato', featured: false,
    features: ['4 videos con influencer IA', '8 posts para redes', 'Captions escritos con IA'],
    ideal: 'taquería, salón, tienda',
  },
  {
    name: 'Crece y Vende', price: '$2,499/mes', note: null, featured: true,
    features: ['8 videos con influencer IA', 'Chatbot WhatsApp activo', '12 posts para redes', 'Respuestas Google automáticas'],
    ideal: 'restaurante, gym, spa',
  },
  {
    name: 'Domina tu Zona', price: '$3,999/mes', note: '$2,500 setup', featured: false,
    features: ['10 videos / mes', 'Voice Agent llamadas', 'Chatbot WhatsApp', 'Landing page incluida'],
    ideal: 'franquicias, clínicas pequeñas',
  },
]

const mediumPkgs = [
  {
    name: 'Negocio Inteligente', price: '$7,999/mes', note: '$5,000 setup', featured: false,
    features: ['8 videos / mes con IA', 'Chatbot WhatsApp', 'Email marketing', 'Reporte mensual'],
    ideal: 'restaurantes, clínicas',
  },
  {
    name: 'Transformación Digital', price: '$12,999/mes', note: '$15,000 setup', featured: true,
    features: ['Influencer exclusiva', '10 videos / mes', 'Voice Agent + Chatbot', 'Landing page incluida', 'Email + reportes'],
    ideal: 'cadenas, inmobiliarias',
  },
  {
    name: 'Empresa Completa', price: '$18,999/mes', note: '$35,000 setup', featured: false,
    features: ['App personalizada con IA', 'Influencer exclusiva', '12 videos / mes', 'Voice Agent + Chatbot', 'Estrategia digital completa'],
    ideal: 'empresas con sucursales',
  },
]

function PkgCard({ name, price, note, featured, features, ideal }) {
  return (
    <div style={{
      background: featured ? '#2563EB' : '#FFFFFF',
      border: featured ? 'none' : '1px solid #E5E7EB',
      borderRadius: 18, padding: '28px 24px',
      display: 'flex', flexDirection: 'column', gap: 18,
      position: 'relative',
      boxShadow: featured ? '0 8px 32px rgba(37,99,235,0.35)' : '0 1px 3px rgba(0,0,0,0.08)',
      transition: 'all 0.25s ease', height: '100%',
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
          fontSize: 10, fontWeight: 700,
          padding: '4px 16px', borderRadius: 100,
          letterSpacing: '0.12em', whiteSpace: 'nowrap', textTransform: 'uppercase',
        }}>Más popular</div>
      )}

      <div>
        <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, color: featured ? '#fff' : '#111827' }}>{name}</h3>
        <div style={{ fontSize: 28, fontWeight: 800, lineHeight: 1, color: featured ? '#fff' : '#2563EB' }}>{price}</div>
        {note && <div style={{ fontSize: 12, marginTop: 5, color: featured ? 'rgba(255,255,255,0.65)' : '#9CA3AF' }}>{note}</div>}
      </div>

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9, flex: 1 }}>
        {features.map((f, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 14, color: featured ? 'rgba(255,255,255,0.88)' : '#374151' }}>
            <span style={{ color: featured ? '#BFDBFE' : '#2563EB', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
            {f}
          </li>
        ))}
      </ul>

      <div style={{
        fontSize: 13, color: featured ? 'rgba(255,255,255,0.55)' : '#9CA3AF',
        borderTop: `1px solid ${featured ? 'rgba(255,255,255,0.18)' : '#E5E7EB'}`,
        paddingTop: 12,
      }}>
        Ideal para: <span style={{ color: featured ? 'rgba(255,255,255,0.85)' : '#374151', fontWeight: 500 }}>{ideal}</span>
      </div>

      <a href="#contacto" style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        padding: '12px', borderRadius: 8, fontWeight: 600, fontSize: 14,
        background: featured ? '#fff' : '#2563EB',
        color: featured ? '#2563EB' : '#fff',
        border: 'none', transition: 'all 0.18s', textDecoration: 'none',
      }}
      onMouseEnter={e => { e.currentTarget.style.opacity = '0.9' }}
      onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
      >
        Empezar ahora
      </a>
    </div>
  )
}

export default function Packages() {
  return (
    <section id="paquetes" style={{ background: '#F9FAFB' }}>
      <div className="container">
        <div className="section-label-wrap">
          <span className="section-label">Paquetes</span>
        </div>
        <h2 className="section-title">Paquetes <span className="gradient-text">todo incluido</span></h2>
        <p className="section-sub">Ahorra hasta 40% vs contratar por separado</p>

        <p style={{ fontSize: 11, fontWeight: 700, marginBottom: 20, color: '#2563EB', letterSpacing: '0.14em', textTransform: 'uppercase', textAlign: 'left' }}>
          Pequeños negocios
        </p>
        <div style={{ marginBottom: 56 }}>
          <Carousel minWidth={290}>
            {smallPkgs.map((p, i) => <PkgCard key={i} {...p} />)}
          </Carousel>
        </div>

        <p style={{ fontSize: 11, fontWeight: 700, marginBottom: 20, color: '#2563EB', letterSpacing: '0.14em', textTransform: 'uppercase', textAlign: 'left' }}>
          Empresas medianas
        </p>
        <Carousel minWidth={290}>
          {mediumPkgs.map((p, i) => <PkgCard key={i} {...p} />)}
        </Carousel>
      </div>
    </section>
  )
}
