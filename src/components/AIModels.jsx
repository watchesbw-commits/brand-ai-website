import PhoneMockup from './PhoneMockup'

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
    <section id="modelos-ia" style={{ background: '#FFFFFF' }}>
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

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 48,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {/* Left: phone mockup */}
          <div style={{ flexShrink: 0 }}>
            <PhoneMockup
              src={DRIVE_SRC}
              title="Modelo IA — Brand AI"
              allowAttr="autoplay; encrypted-media"
            />
          </div>

          {/* Right: features */}
          <div style={{ flex: '1 1 320px', maxWidth: 480 }}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 20 }}>
              {features.map((f, i) => (
                <li key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 16,
                  padding: '20px 24px',
                  background: '#F0F4FF',
                  border: '1px solid #E0EAFF',
                  borderRadius: 14,
                  boxShadow: '0 4px 16px rgba(0,102,255,0.06)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(6px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,102,255,0.12)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,102,255,0.06)' }}
                >
                  <span style={{
                    fontSize: 22, flexShrink: 0,
                    width: 44, height: 44, borderRadius: 12,
                    background: 'linear-gradient(135deg, #0066FF, #00D4FF)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0,102,255,0.3)',
                  }}>{f.icon}</span>
                  <span style={{ fontSize: 15, color: '#0A0A1A', fontWeight: 500, lineHeight: 1.55 }}>{f.text}</span>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: 32, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="#contacto" className="btn-primary" style={{ padding: '14px 32px' }}>
                🎬 Quiero mi modelo IA
              </a>
              <a href="#contacto" className="btn-ghost" style={{ padding: '13px 28px' }}>
                Ver más ejemplos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
