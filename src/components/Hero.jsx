export default function Hero() {
  return (
    <section id="hero" style={{ paddingTop: 160, paddingBottom: 100, textAlign: 'center' }}>
      <div className="container">
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          background: 'rgba(0,200,255,0.05)', border: '1px solid rgba(0,200,255,0.2)',
          borderRadius: 100, padding: '8px 20px', marginBottom: 36,
          fontSize: 12, fontWeight: 700, color: '#00c8ff',
          letterSpacing: '0.12em', textTransform: 'uppercase',
        }}>
          <span className="pulse-dot" style={{
            width: 7, height: 7, borderRadius: '50%',
            background: '#00c8ff', display: 'inline-block', flexShrink: 0,
          }}/>
          Agencia de Inteligencia Artificial · México
        </div>

        <h1 style={{
          fontSize: 'clamp(36px, 6vw, 68px)',
          fontWeight: 900,
          lineHeight: 1.1,
          letterSpacing: '-1.5px',
          maxWidth: 780,
          margin: '0 auto 24px',
          textShadow: '0 0 30px rgba(0,200,255,0.2)',
        }}>
          Tu negocio en el{' '}
          <span style={{ color: '#00c8ff', textShadow: '0 0 20px rgba(0,200,255,0.5)' }}>siguiente nivel</span>
          {' '}con IA
        </h1>

        <p style={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: 'clamp(16px, 2vw, 18px)',
          maxWidth: 580,
          margin: '0 auto 44px',
          lineHeight: 1.75,
        }}>
          Videos con influencers de IA, chatbots, apps y automatización.<br/>
          <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Entrega en 48 horas.</strong>
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 72 }}>
          <a href="#contacto" className="btn-primary" style={{ padding: '14px 32px' }}>
            ▶ Video gratis de muestra
          </a>
          <a href="#portafolio" className="btn-ghost" style={{ padding: '14px 32px' }}>
            Ver portafolio
          </a>
        </div>

        <div style={{
          display: 'flex', gap: 0, justifyContent: 'center',
          background: 'rgba(0,200,255,0.03)',
          border: '1px solid rgba(0,200,255,0.15)',
          borderRadius: 12, overflow: 'hidden', maxWidth: 560, margin: '0 auto',
        }}>
          {[
            { value: '48h', label: 'Entrega' },
            { value: '31+', label: 'Servicios' },
            { value: '94%', label: 'Ahorro vs agencia' },
          ].map((s, i) => (
            <div key={i} style={{
              flex: 1, padding: '24px 16px',
              borderRight: i < 2 ? '1px solid rgba(0,200,255,0.1)' : 'none',
              textAlign: 'center',
            }}>
              <div style={{
                fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 800,
                color: '#00c8ff', lineHeight: 1,
                textShadow: '0 0 15px rgba(0,200,255,0.5)',
              }}>{s.value}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
