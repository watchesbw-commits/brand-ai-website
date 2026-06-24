import VideoPlayer from './VideoPlayer'

const DRIVE_SRC = 'https://drive.google.com/file/d/1varxjuzS--SAxsf5NcUMggeST2QMJYPU/preview'

const features = [
  { icon: '🎭', text: 'Modelo personalizada con la identidad de tu marca' },
  { icon: '🌎', text: 'Videos en cualquier idioma o acento' },
  { icon: '⚡', text: 'Producción en 48 horas sin locación ni equipo' },
  { icon: '🔄', text: 'Disponible 24/7 para todos tus canales digitales' },
  { icon: '🎯', text: 'Sincronización perfecta de labios y expresiones' },
]

export default function AIModels() {
  return (
    <section id="modelos-ia" style={{ background: '#050510' }}>
      <div className="container">
        <div className="section-label-wrap">
          <span className="section-label">Modelos IA</span>
        </div>
        <h2 className="section-title gradient-text">
          Influencers de IA para tu marca
        </h2>
        <p className="section-sub">
          Creamos tu propia modelo virtual con inteligencia artificial. Genera videos
          profesionales en minutos con una influencer que trabaja 24/7 para tu negocio.
        </p>

        <VideoPlayer
          src={DRIVE_SRC}
          title="Modelo IA — Brand AI"
          vertical={true}
          allow="autoplay; encrypted-media"
        />

        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {features.map((f, i) => (
              <li key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: 16,
                padding: '18px 22px',
                background: 'rgba(13,13,31,0.8)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(0,102,255,0.3)',
                borderRadius: 12,
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateX(6px)'
                e.currentTarget.style.borderColor = 'rgba(0,212,255,0.5)'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0,102,255,0.2)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateX(0)'
                e.currentTarget.style.borderColor = 'rgba(0,102,255,0.3)'
                e.currentTarget.style.boxShadow = 'none'
              }}
              >
                <span style={{
                  fontSize: 20, flexShrink: 0,
                  width: 42, height: 42, borderRadius: 10,
                  background: 'linear-gradient(135deg, #0066FF, #00D4FF)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 0 16px rgba(0,102,255,0.4)',
                }}>{f.icon}</span>
                <span style={{ fontSize: 15, color: '#8892B0', fontWeight: 500, lineHeight: 1.55 }}>{f.text}</span>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: 32, display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#contacto" className="btn-primary" style={{ padding: '14px 32px' }}>
              🎬 Quiero mi modelo IA
            </a>
            <a href="#contacto" className="btn-ghost" style={{ padding: '13px 28px' }}>
              Ver más ejemplos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
