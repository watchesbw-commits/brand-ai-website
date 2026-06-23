const smallPkgs = [
  {
    name: 'Arranca Digital',
    price: '$1,299/mes',
    note: 'sin contrato',
    featured: false,
    features: ['4 videos con influencer IA', '8 posts para redes', 'Captions escritos con IA'],
    ideal: 'taquería, salón, tienda',
  },
  {
    name: 'Crece y Vende',
    price: '$2,499/mes',
    note: null,
    featured: true,
    features: ['8 videos con influencer IA', 'Chatbot WhatsApp activo', '12 posts para redes', 'Respuestas Google automáticas'],
    ideal: 'restaurante, gym, spa',
  },
  {
    name: 'Domina tu Zona',
    price: '$3,999/mes',
    note: '$2,500 setup',
    featured: false,
    features: ['10 videos / mes', 'Voice Agent llamadas', 'Chatbot WhatsApp', 'Landing page incluida'],
    ideal: 'franquicias, clínicas pequeñas',
  },
]

const mediumPkgs = [
  {
    name: 'Negocio Inteligente',
    price: '$7,999/mes',
    note: '$5,000 setup',
    featured: false,
    features: ['8 videos / mes con IA', 'Chatbot WhatsApp', 'Email marketing', 'Reporte mensual'],
    ideal: 'restaurantes, clínicas',
  },
  {
    name: 'Transformación Digital',
    price: '$12,999/mes',
    note: '$15,000 setup',
    featured: true,
    features: ['Influencer exclusiva', '10 videos / mes', 'Voice Agent + Chatbot', 'Landing page incluida', 'Email + reportes'],
    ideal: 'cadenas, inmobiliarias',
  },
  {
    name: 'Empresa Completa',
    price: '$18,999/mes',
    note: '$35,000 setup',
    featured: false,
    features: ['App personalizada con IA', 'Influencer exclusiva', '12 videos / mes', 'Voice Agent + Chatbot', 'Estrategia digital completa'],
    ideal: 'empresas con sucursales',
  },
]

function PkgCard({ name, price, note, featured, features, ideal }) {
  return (
    <div style={{
      background: featured ? 'rgba(0,200,255,0.05)' : 'rgba(0,200,255,0.03)',
      border: `1px solid ${featured ? 'rgba(0,200,255,0.5)' : 'rgba(0,200,255,0.15)'}`,
      borderRadius: 12, padding: '32px 28px',
      display: 'flex', flexDirection: 'column', gap: 20,
      position: 'relative',
      backdropFilter: 'blur(10px)',
      boxShadow: featured ? '0 0 30px rgba(0,200,255,0.08)' : 'none',
      transition: 'all 0.3s ease',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-4px)'
      e.currentTarget.style.borderColor = 'rgba(0,200,255,0.6)'
      e.currentTarget.style.boxShadow = '0 0 30px rgba(0,200,255,0.15)'
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.borderColor = featured ? 'rgba(0,200,255,0.5)' : 'rgba(0,200,255,0.15)'
      e.currentTarget.style.boxShadow = featured ? '0 0 30px rgba(0,200,255,0.08)' : 'none'
    }}
    >
      {featured && (
        <div style={{
          position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)',
          background: 'transparent',
          border: '1px solid #00c8ff',
          color: '#00c8ff',
          fontSize: 10, fontWeight: 700,
          padding: '4px 16px', borderRadius: 4,
          letterSpacing: '0.15em', whiteSpace: 'nowrap',
          boxShadow: '0 0 12px rgba(0,200,255,0.4)',
          textTransform: 'uppercase',
        }}>Más popular</div>
      )}

      <div>
        <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 10, textShadow: '0 0 20px rgba(0,200,255,0.1)' }}>{name}</h3>
        <div style={{
          fontSize: 28, fontWeight: 900, color: '#00c8ff', lineHeight: 1,
          textShadow: '0 0 15px rgba(0,200,255,0.4)',
        }}>{price}</div>
        {note && <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 6 }}>{note}</div>}
      </div>

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {features.map((f, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.75)' }}>
            <span style={{ color: '#00c8ff', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
            {f}
          </li>
        ))}
      </ul>

      <div style={{
        fontSize: 13, color: 'rgba(255,255,255,0.35)',
        borderTop: '1px solid rgba(0,200,255,0.1)',
        paddingTop: 14, marginTop: 'auto',
      }}>
        Ideal para: <span style={{ color: 'rgba(255,255,255,0.6)' }}>{ideal}</span>
      </div>

      <a href="#contacto" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center' }}>
        Empezar ahora
      </a>
    </div>
  )
}

function PkgGrid({ pkgs }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 72 }}>
      {pkgs.map((p, i) => <PkgCard key={i} {...p} />)}
    </div>
  )
}

export default function Packages() {
  return (
    <section id="paquetes">
      <div className="container">
        <p style={{ textAlign: 'center', color: '#00c8ff', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 12 }}>Paquetes</p>
        <h2 className="section-title">Paquetes todo incluido</h2>
        <p className="section-sub">Ahorra hasta 40% vs contratar por separado</p>

        <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 28, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          Pequeños negocios
        </h3>
        <PkgGrid pkgs={smallPkgs} />

        <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 28, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          Empresas medianas
        </h3>
        <PkgGrid pkgs={mediumPkgs} />
      </div>
    </section>
  )
}
