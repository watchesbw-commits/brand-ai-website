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
      background: featured ? 'linear-gradient(160deg, #7C3AED, #5B21B6)' : '#fff',
      border: featured ? 'none' : '1px solid rgba(26,26,46,0.08)',
      borderRadius: 18, padding: '32px 28px',
      display: 'flex', flexDirection: 'column', gap: 20,
      position: 'relative',
      boxShadow: featured ? '0 12px 40px rgba(124,58,237,0.35)' : '0 2px 14px rgba(26,26,46,0.06)',
      transition: 'all 0.25s ease',
      height: '100%',
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)' }}
    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
    >
      {featured && (
        <div style={{
          position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)',
          background: '#1A1A2E', color: '#fff',
          fontSize: 10, fontWeight: 700,
          padding: '5px 18px', borderRadius: 100,
          letterSpacing: '0.15em', whiteSpace: 'nowrap', textTransform: 'uppercase',
        }}>Más popular</div>
      )}

      <div>
        <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 10, color: featured ? '#fff' : '#1A1A2E' }}>{name}</h3>
        <div style={{ fontSize: 30, fontWeight: 900, lineHeight: 1, color: featured ? '#fff' : '#7C3AED' }}>{price}</div>
        {note && <div style={{ fontSize: 13, marginTop: 5, color: featured ? 'rgba(255,255,255,0.65)' : 'rgba(26,26,46,0.45)' }}>{note}</div>}
      </div>

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        {features.map((f, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: featured ? 'rgba(255,255,255,0.9)' : 'rgba(26,26,46,0.75)' }}>
            <span style={{ color: featured ? '#fff' : '#7C3AED', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
            {f}
          </li>
        ))}
      </ul>

      <div style={{
        fontSize: 13, color: featured ? 'rgba(255,255,255,0.55)' : 'rgba(26,26,46,0.4)',
        borderTop: `1px solid ${featured ? 'rgba(255,255,255,0.15)' : 'rgba(26,26,46,0.07)'}`,
        paddingTop: 14,
      }}>
        Ideal para: <span style={{ color: featured ? 'rgba(255,255,255,0.8)' : 'rgba(26,26,46,0.65)' }}>{ideal}</span>
      </div>

      <a href="#contacto" style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        padding: '13px', borderRadius: 12, fontWeight: 600, fontSize: 14,
        textAlign: 'center',
        background: featured ? '#fff' : '#7C3AED',
        color: featured ? '#7C3AED' : '#fff',
        border: 'none',
        boxShadow: featured ? '0 4px 16px rgba(0,0,0,0.15)' : '0 2px 10px rgba(124,58,237,0.25)',
        transition: 'all 0.22s',
      }}>
        Empezar ahora
      </a>
    </div>
  )
}

export default function Packages() {
  return (
    <section id="paquetes" style={{ background: '#F8F8F8' }}>
      <div className="container">
        <p className="section-label">Paquetes</p>
        <h2 className="section-title">Paquetes todo incluido</h2>
        <p className="section-sub">Ahorra hasta 40% vs contratar por separado</p>

        <h3 style={{ fontSize: 13, fontWeight: 700, marginBottom: 24, color: '#7C3AED', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          Pequeños negocios
        </h3>
        <div style={{ marginBottom: 64 }}>
          <Carousel minWidth={300}>
            {smallPkgs.map((p, i) => <PkgCard key={i} {...p} />)}
          </Carousel>
        </div>

        <h3 style={{ fontSize: 13, fontWeight: 700, marginBottom: 24, color: '#7C3AED', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          Empresas medianas
        </h3>
        <Carousel minWidth={300}>
          {mediumPkgs.map((p, i) => <PkgCard key={i} {...p} />)}
        </Carousel>
      </div>
    </section>
  )
}
