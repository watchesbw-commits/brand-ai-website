import Carousel from './Carousel'

const cases = [
  { name: '"La Hacienda"',          category: 'Restaurante', pkg: 'Crece y Vende',         color: '#F97316', emoji: '🍽️', metric: '+340% alcance en redes'       },
  { name: '"Clínica Estética Glow"',category: 'Estética',   pkg: 'Transformación Digital', color: '#0066FF', emoji: '✨', metric: '2.8x más reservas por mes'     },
  { name: '"GymPro Fitness"',        category: 'Fitness',   pkg: 'Domina tu Zona',         color: '#00D4FF', emoji: '💪', metric: '+180 nuevos socios en 60 días' },
]

function VideoMockup({ color, emoji }) {
  return (
    <div style={{
      borderRadius: 12, overflow: 'hidden', aspectRatio: '9/16', maxHeight: 260,
      background: `linear-gradient(160deg, rgba(${hexToRgb(color)},0.15), rgba(${hexToRgb(color)},0.05))`,
      border: `1px solid rgba(${hexToRgb(color)},0.3)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative',
    }}>
      <div style={{ fontSize: 52 }}>{emoji}</div>
      <div style={{
        position: 'absolute', bottom: 12, left: 12, right: 12,
        background: 'rgba(13,13,31,0.9)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(0,102,255,0.3)',
        borderRadius: 8, padding: '8px 12px',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <div style={{
          width: 26, height: 26, borderRadius: '50%',
          background: 'linear-gradient(135deg, #0066FF, #00D4FF)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 10, color: '#fff', fontWeight: 700,
        }}>AI</div>
        <div style={{ fontSize: 11, color: '#FFFFFF', fontWeight: 600 }}>Video IA · Brand AI</div>
        <div style={{ marginLeft: 'auto', fontSize: 16, color: '#00D4FF' }}>▶</div>
      </div>
    </div>
  )
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1,3),16)
  const g = parseInt(hex.slice(3,5),16)
  const b = parseInt(hex.slice(5,7),16)
  return `${r},${g},${b}`
}

export default function Portfolio() {
  return (
    <section id="portafolio" style={{ background: '#050510' }}>
      <div className="container">
        <div className="section-label-wrap">
          <span className="section-label">Portafolio</span>
        </div>
        <h2 className="section-title gradient-text">Resultados reales</h2>
        <p className="section-sub">Clientes que ya impulsan su negocio con Brand AI</p>

        <Carousel minWidth={280}>
          {cases.map((c, i) => (
            <div key={i} className="card" style={{ overflow: 'hidden', height: '100%' }}>
              <VideoMockup color={c.color} emoji={c.emoji} />
              <div style={{ marginTop: 20 }}>
                <div style={{ fontWeight: 800, fontSize: 16, color: '#FFFFFF', marginBottom: 4 }}>{c.name}</div>
                <div style={{ fontSize: 12, color: '#8892B0', marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {c.category} · Paquete {c.pkg}
                </div>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: 'rgba(0,102,255,0.15)',
                  border: '1px solid rgba(0,102,255,0.4)',
                  borderRadius: 8, padding: '6px 12px', fontSize: 13, color: '#00D4FF', fontWeight: 700,
                }}>
                  📈 {c.metric}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
