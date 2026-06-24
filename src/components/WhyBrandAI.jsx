import Carousel from './Carousel'

const reasons = [
  { icon: '⚡', title: 'Entrega en 48 horas',     desc: 'Producimos y entregamos tu contenido en menos de dos días. Sin esperas, sin burocracia.' },
  { icon: '🎁', title: 'Video de muestra gratis', desc: 'Te creamos un video de muestra sin costo para que veas la calidad antes de comprometerte.' },
  { icon: '🔓', title: 'Sin contratos anuales',   desc: 'Cancela cuando quieras. Trabajamos mes a mes porque confiamos en nuestros resultados.' },
  { icon: '🤖', title: 'IA de última generación', desc: 'Usamos las herramientas de inteligencia artificial más avanzadas del mercado.' },
]

export default function WhyBrandAI() {
  return (
    <section id="precios" style={{ background: '#F0F4FF' }}>
      <div className="container">
        <div className="section-label-wrap">
          <span className="section-label">Por qué nosotros</span>
        </div>
        <h2 className="section-title gradient-text">¿Por qué Brand AI?</h2>
        <p className="section-sub">Lo que nos hace diferentes</p>

        <Carousel minWidth={240}>
          {reasons.map((r, i) => (
            <div key={i} className="card" style={{ textAlign: 'center', padding: '40px 28px', height: '100%' }}>
              <div style={{
                width: 70, height: 70, borderRadius: 20, margin: '0 auto 24px',
                background: 'linear-gradient(135deg, #0066FF, #00D4FF)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30,
                boxShadow: '0 8px 24px rgba(0,102,255,0.35)',
              }}>{r.icon}</div>
              <h3 style={{ fontWeight: 800, fontSize: 17, marginBottom: 12, color: '#0A0A1A' }}>{r.title}</h3>
              <p style={{ color: '#4A5568', fontSize: 14, lineHeight: 1.75 }}>{r.desc}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
