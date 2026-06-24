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
        <h2 className="section-title">Influencers de <span className="gradient-text">IA</span> para tu marca</h2>
        <p className="section-sub">
          Creamos tu propia modelo virtual con inteligencia artificial. Genera videos
          profesionales en minutos con una influencer que trabaja 24/7 para tu negocio.
        </p>

        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {features.map((f, i) => (
              <li key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: 14,
                padding: '16px 20px',
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: 12,
                boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateX(4px)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'
                e.currentTarget.style.borderColor = '#BFDBFE'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateX(0)'
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)'
                e.currentTarget.style.borderColor = '#E5E7EB'
              }}
              >
                <span style={{
                  fontSize: 18, flexShrink: 0,
                  width: 40, height: 40, borderRadius: 10,
                  background: '#EFF6FF',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>{f.icon}</span>
                <span style={{ fontSize: 14, color: '#374151', fontWeight: 500, lineHeight: 1.6 }}>{f.text}</span>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#contacto" className="btn-primary" style={{ padding: '12px 28px' }}>
              🎬 Quiero mi modelo IA
            </a>
            <a href="#contacto" className="btn-ghost" style={{ padding: '11px 24px' }}>
              Ver más ejemplos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
