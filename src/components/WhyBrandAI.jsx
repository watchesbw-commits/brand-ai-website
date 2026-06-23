const reasons = [
  { icon: '⚡', title: 'Entrega en 48 horas', desc: 'Producimos y entregamos tu contenido en menos de dos días. Sin esperas, sin burocracia.' },
  { icon: '🎁', title: 'Video de muestra gratis', desc: 'Te creamos un video de muestra sin costo para que veas la calidad antes de comprometerte.' },
  { icon: '🔓', title: 'Sin contratos anuales', desc: 'Cancela cuando quieras. Trabajamos mes a mes porque confiamos en nuestros resultados.' },
  { icon: '🤖', title: 'IA de última generación', desc: 'Usamos las herramientas de inteligencia artificial más avanzadas del mercado en cada proyecto.' },
]

export default function WhyBrandAI() {
  return (
    <section id="precios">
      <div className="container">
        <p style={{ textAlign: 'center', color: '#00c8ff', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 12 }}>Por qué nosotros</p>
        <h2 className="section-title">¿Por qué Brand AI?</h2>
        <p className="section-sub">Lo que nos hace diferentes</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {reasons.map((r, i) => (
            <div key={i} className="card" style={{ textAlign: 'center', padding: '36px 28px' }}>
              <div style={{
                width: 64, height: 64, borderRadius: 12, margin: '0 auto 20px',
                background: 'rgba(0,200,255,0.06)',
                border: '1px solid rgba(0,200,255,0.2)',
                boxShadow: '0 0 16px rgba(0,200,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
              }}>{r.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 10, textShadow: '0 0 20px rgba(0,200,255,0.15)' }}>{r.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14, lineHeight: 1.75 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
