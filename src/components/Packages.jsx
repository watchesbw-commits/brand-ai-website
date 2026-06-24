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
      background: featured ? 'linear-gradient(145deg, #0066FF, #00D4FF)' : '#fff',
      border: featured ? 'none' : '1px solid #E0EAFF',
      borderRadius: 20, padding: '32px 28px',
      display: 'flex', flexDirection: 'column', gap: 20,
      position: 'relative',
      boxShadow: featured
        ? '0 20px 60px rgba(0,102,255,0.45), 0 6px 0 #0044CC'
        : '0 10px 40px rgba(0,102,255,0.1)',
      transition: 'all 0.3s ease',
      height: '100%',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-6px)'
      e.currentTarget.style.boxShadow = featured
        ? '0 28px 70px rgba(0,102,255,0.55), 0 6px 0 #0044CC'
        : '0 20px 60px rgba(0,102,255,0.18)'
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.boxShadow = featured
        ? '0 20px 60px rgba(0,102,255,0.45), 0 6px 0 #0044CC'
        : '0 10px 40px rgba(0,102,255,0.1)'
    }}
    >
      {featured && (
        <div style={{
          position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
          background: '#0A0A1A', color: '#fff',
          fontSize: 10, fontWeight: 700,
          padding: '5px 20px', borderRadius: 100,
          letterSpacing: '0.15em', whiteSpace: 'nowrap', textTransform: 'uppercase',
        }}>Más popular</div>
      )}

      <div>
        <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 10, color: featured ? '#fff' : '#0A0A1A' }}>{name}</h3>
        <div style={{ fontSize: 30, fontWeight: 900, lineHeight: 1, color: featured ? '#fff' : '#0066FF' }}>{price}</div>
        {note && <div style={{ fontSize: 13, marginTop: 6, color: featured ? 'rgba(255,255,255,0.7)' : '#4A5568' }}>{note}</div>}
      </div>

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        {features.map((f, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: featured ? 'rgba(255,255,255,0.92)' : '#4A5568' }}>
            <span style={{ color: featured ? '#fff' : '#0066FF', fontWeight: 800, flexShrink: 0, marginTop: 1 }}>✓</span>
            {f}
          </li>
        ))}
      </ul>

      <div style={{
        fontSize: 13, color: featured ? 'rgba(255,255,255,0.6)' : '#4A5568',
        borderTop: `1px solid ${featured ? 'rgba(255,255,255,0.2)' : '#E0EAFF'}`,
        paddingTop: 14,
      }}>
        Ideal para: <span style={{ color: featured ? 'rgba(255,255,255,0.85)' : '#0A0A1A', fontWeight: 500 }}>{ideal}</span>
      </div>

      <a href="#contacto" style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        padding: '13px', borderRadius: 12, fontWeight: 700, fontSize: 14,
        background: featured ? '#fff' : 'linear-gradient(135deg, #0066FF, #00D4FF)',
        color: featured ? '#0066FF' : '#fff',
        border: 'none',
        boxShadow: featured ? '0 4px 16px rgba(0,0,0,0.15)' : '0 6px 18px rgba(0,102,255,0.35), 0 3px 0 #0044CC',
        transition: 'all 0.22s',
        textDecoration: 'none',
      }}>
        Empezar ahora
      </a>
    </div>
  )
}

export default function Packages() {
  return (
    <section id="paquetes" style={{ background: '#FFFFFF' }}>
      <div className="container">
        <div className="section-label-wrap">
          <span className="section-label">Paquetes</span>
        </div>
        <h2 className="section-title gradient-text">Paquetes todo incluido</h2>
        <p className="section-sub">Ahorra hasta 40% vs contratar por separado</p>

        <h3 style={{ fontSize: 12, fontWeight: 700, marginBottom: 24, color: '#0066FF', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Pequeños negocios
        </h3>
        <div style={{ marginBottom: 64 }}>
          <Carousel minWidth={300}>
            {smallPkgs.map((p, i) => <PkgCard key={i} {...p} />)}
          </Carousel>
        </div>

        <h3 style={{ fontSize: 12, fontWeight: 700, marginBottom: 24, color: '#0066FF', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Empresas medianas
        </h3>
        <Carousel minWidth={300}>
          {mediumPkgs.map((p, i) => <PkgCard key={i} {...p} />)}
        </Carousel>
      </div>
    </section>
  )
}
