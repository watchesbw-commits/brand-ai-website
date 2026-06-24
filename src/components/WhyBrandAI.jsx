import Carousel from './Carousel'

const reasons = [
  { icon: '⚡', title: 'Entrega en 48 horas',     desc: 'Producimos y entregamos tu contenido en menos de dos días. Sin esperas, sin burocracia.' },
  { icon: '🎁', title: 'Video de muestra gratis', desc: 'Te creamos un video de muestra sin costo para que veas la calidad antes de comprometerte.' },
  { icon: '🔓', title: 'Sin contratos anuales',   desc: 'Cancela cuando quieras. Trabajamos mes a mes porque confiamos en nuestros resultados.' },
  { icon: '🤖', title: 'IA de última generación', desc: 'Usamos las herramientas de inteligencia artificial más avanzadas del mercado.' },
]

export default function WhyBrandAI() {
  return (
    <section id="precios" style={{ background: '#FFFFFF' }}>
      <div className="container">
        <div className="section-label-wrap">
          <span className="section-label">Por qué nosotros</span>
        </div>
        <h2 className="section-title">¿Por qué <span className="gradient-text">Brand AI</span>?</h2>
        <p className="section-sub">Lo que nos hace diferentes</p>

        <Carousel minWidth={240}>
          {reasons.map((r, i) => (
            <div key={i} className="card" style={{ textAlign: 'center', padding: '36px 24px', height: '100%' }}>
              <div style={{
                width: 60, height: 60, borderRadius: 16, margin: '0 auto 20px',
                background: '#EFF6FF',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26,
              }}>{r.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 10, color: '#111827' }}>{r.title}</h3>
              <p style={{ color: '#6B7280', fontSize: 14, lineHeight: 1.7 }}>{r.desc}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
