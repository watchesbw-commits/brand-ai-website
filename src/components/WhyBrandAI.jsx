import Carousel from './Carousel'

const reasons = [
  { icon: '⚡', title: 'Entrega en 48 horas',       desc: 'Producimos y entregamos tu contenido en menos de dos días. Sin esperas, sin burocracia.' },
  { icon: '🎁', title: 'Video de muestra gratis',   desc: 'Te creamos un video de muestra sin costo para que veas la calidad antes de comprometerte.' },
  { icon: '🔓', title: 'Sin contratos anuales',     desc: 'Cancela cuando quieras. Trabajamos mes a mes porque confiamos en nuestros resultados.' },
  { icon: '🤖', title: 'IA de última generación',   desc: 'Usamos las herramientas de inteligencia artificial más avanzadas del mercado.' },
]

export default function WhyBrandAI() {
  return (
    <section id="precios" style={{ background: '#FFFFFF' }}>
      <div className="container">
        <p className="section-label">Por qué nosotros</p>
        <h2 className="section-title">¿Por qué Brand AI?</h2>
        <p className="section-sub">Lo que nos hace diferentes</p>

        <Carousel minWidth={240}>
          {reasons.map((r, i) => (
            <div key={i} className="card" style={{ textAlign: 'center', padding: '36px 24px', height: '100%' }}>
              <div style={{
                width: 64, height: 64, borderRadius: 18, margin: '0 auto 20px',
                background: 'linear-gradient(135deg, #7C3AED, #5B21B6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                boxShadow: '0 6px 20px rgba(124,58,237,0.3)',
              }}>{r.icon}</div>
              <h3 style={{ fontWeight: 800, fontSize: 17, marginBottom: 10, color: '#1A1A2E' }}>{r.title}</h3>
              <p style={{ color: 'rgba(26,26,46,0.55)', fontSize: 14, lineHeight: 1.75 }}>{r.desc}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
