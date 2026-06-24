import Carousel from './Carousel'

const cases = [
  { name: '"La Hacienda"',          category: 'Restaurante', pkg: 'Crece y Vende',         color: '#F97316', emoji: '🍽️', metric: '+340% alcance en redes'       },
  { name: '"Clínica Estética Glow"',category: 'Estética',   pkg: 'Transformación Digital', color: '#2563EB', emoji: '✨', metric: '2.8x más reservas por mes'     },
  { name: '"GymPro Fitness"',        category: 'Fitness',   pkg: 'Domina tu Zona',         color: '#0EA5E9', emoji: '💪', metric: '+180 nuevos socios en 60 días' },
]

function VideoMockup({ color, emoji }) {
  return (
    <div style={{
      borderRadius: 12, overflow: 'hidden', aspectRatio: '9/16', maxHeight: 240,
      background: `${color}0D`,
      border: `1px solid ${color}30`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative',
    }}>
      <div style={{ fontSize: 46 }}>{emoji}</div>
      <div style={{
        position: 'absolute', bottom: 10, left: 10, right: 10,
        background: 'rgba(255,255,255,0.95)',
        border: '1px solid #E5E7EB',
        borderRadius: 8, padding: '7px 10px',
        display: 'flex', alignItems: 'center', gap: 7,
        boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
      }}>
        <div style={{
          width: 24, height: 24, borderRadius: '50%',
          background: '#2563EB',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 9, color: '#fff', fontWeight: 700, flexShrink: 0,
        }}>AI</div>
        <div style={{ fontSize: 11, color: '#111827', fontWeight: 600 }}>Video IA · Brand AI</div>
        <div style={{ marginLeft: 'auto', fontSize: 14, color: '#2563EB' }}>▶</div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section id="portafolio" style={{ background: '#F9FAFB' }}>
      <div className="container">
        <div className="section-label-wrap">
          <span className="section-label">Portafolio</span>
        </div>
        <h2 className="section-title">Resultados <span className="gradient-text">reales</span></h2>
        <p className="section-sub">Clientes que ya impulsan su negocio con Brand AI</p>

        <Carousel minWidth={270}>
          {cases.map((c, i) => (
            <div key={i} className="card" style={{ overflow: 'hidden', height: '100%' }}>
              <VideoMockup color={c.color} emoji={c.emoji} />
              <div style={{ marginTop: 18 }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#111827', marginBottom: 3 }}>{c.name}</div>
                <div style={{ fontSize: 12, color: '#9CA3AF', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {c.category} · Paquete {c.pkg}
                </div>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  background: '#EFF6FF', border: '1px solid #BFDBFE',
                  borderRadius: 8, padding: '5px 10px', fontSize: 13, color: '#2563EB', fontWeight: 600,
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
