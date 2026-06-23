const cases = [
  {
    name: '"La Hacienda"',
    category: 'Restaurante',
    pkg: 'Crece y Vende',
    color: '#e07b39',
    emoji: '🍽️',
    metric: '+340% alcance en redes',
  },
  {
    name: '"Clínica Estética Glow"',
    category: 'Estética',
    pkg: 'Transformación Digital',
    color: '#c96dd8',
    emoji: '✨',
    metric: '2.8x más reservas por mes',
  },
  {
    name: '"GymPro Fitness"',
    category: 'Fitness',
    pkg: 'Domina tu Zona',
    color: '#3b82f6',
    emoji: '💪',
    metric: '+180 nuevos socios en 60 días',
  },
]

function VideoMockup({ color, emoji, name }) {
  return (
    <div style={{
      borderRadius: 14, overflow: 'hidden', aspectRatio: '9/16', maxHeight: 280,
      background: `linear-gradient(160deg, ${color}22, ${color}11)`,
      border: `1px solid ${color}33`,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12,
      position: 'relative',
    }}>
      <div style={{ fontSize: 48 }}>{emoji}</div>
      <div style={{
        position: 'absolute', bottom: 12, left: 12, right: 12,
        background: 'rgba(0,0,0,0.6)', borderRadius: 8, padding: '8px 12px',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <div style={{ width: 28, height: 28, borderRadius: '50%', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>AI</div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.8)' }}>Video IA · Brand AI</div>
        <div style={{ marginLeft: 'auto', fontSize: 16 }}>▶</div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section id="portafolio">
      <div className="container">
        <p style={{ textAlign: 'center', color: '#00c8ff', fontSize: 13, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 12 }}>Portafolio</p>
        <h2 className="section-title">Resultados reales</h2>
        <p className="section-sub">Clientes que ya impulsan su negocio con Brand AI</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {cases.map((c, i) => (
            <div key={i} className="card" style={{ overflow: 'hidden' }}>
              <VideoMockup color={c.color} emoji={c.emoji} name={c.name} />
              <div style={{ marginTop: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontWeight: 700, fontSize: 16 }}>{c.name}</span>
                </div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 12 }}>
                  {c.category} · Paquete {c.pkg}
                </div>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: 'rgba(0,200,255,0.07)', border: '1px solid rgba(0,200,255,0.15)',
                  borderRadius: 8, padding: '6px 12px', fontSize: 13, color: '#00c8ff', fontWeight: 600,
                }}>
                  📈 {c.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
