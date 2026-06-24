import Carousel from './Carousel'

const cases = [
  { name: '"La Hacienda"',         category: 'Restaurante', pkg: 'Crece y Vende',          color: '#e07b39', emoji: '🍽️', metric: '+340% alcance en redes'      },
  { name: '"Clínica Estética Glow"',category: 'Estética',  pkg: 'Transformación Digital',  color: '#7C3AED', emoji: '✨', metric: '2.8x más reservas por mes'    },
  { name: '"GymPro Fitness"',       category: 'Fitness',   pkg: 'Domina tu Zona',          color: '#3b82f6', emoji: '💪', metric: '+180 nuevos socios en 60 días' },
]

function VideoMockup({ color, emoji }) {
  return (
    <div style={{
      borderRadius: 12, overflow: 'hidden', aspectRatio: '9/16', maxHeight: 260,
      background: `linear-gradient(160deg, ${color}18, ${color}06)`,
      border: `1px solid ${color}25`,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      position: 'relative',
    }}>
      <div style={{ fontSize: 48 }}>{emoji}</div>
      <div style={{
        position: 'absolute', bottom: 12, left: 12, right: 12,
        background: 'rgba(255,255,255,0.9)', borderRadius: 8, padding: '8px 12px',
        display: 'flex', alignItems: 'center', gap: 8,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}>
        <div style={{
          width: 26, height: 26, borderRadius: '50%',
          background: `linear-gradient(135deg, #7C3AED, #5B21B6)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 10, color: '#fff', fontWeight: 700,
        }}>AI</div>
        <div style={{ fontSize: 11, color: '#1A1A2E', fontWeight: 500 }}>Video IA · Brand AI</div>
        <div style={{ marginLeft: 'auto', fontSize: 16, color: '#7C3AED' }}>▶</div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section id="portafolio" style={{ background: '#F8F8F8' }}>
      <div className="container">
        <p className="section-label">Portafolio</p>
        <h2 className="section-title">Resultados reales</h2>
        <p className="section-sub">Clientes que ya impulsan su negocio con Brand AI</p>

        <Carousel minWidth={280}>
          {cases.map((c, i) => (
            <div key={i} className="card" style={{ overflow: 'hidden', height: '100%' }}>
              <VideoMockup color={c.color} emoji={c.emoji} />
              <div style={{ marginTop: 20 }}>
                <div style={{ fontWeight: 700, fontSize: 16, color: '#1A1A2E', marginBottom: 4 }}>{c.name}</div>
                <div style={{ fontSize: 12, color: 'rgba(26,26,46,0.45)', marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {c.category} · Paquete {c.pkg}
                </div>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.18)',
                  borderRadius: 8, padding: '6px 12px', fontSize: 13, color: '#7C3AED', fontWeight: 700,
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
