export default function Hero() {
  return (
    <section id="hero" style={{
      paddingTop: 148, paddingBottom: 96, textAlign: 'center',
      backgroundColor: '#050510',
      backgroundImage: [
        'radial-gradient(rgba(0,102,255,0.12) 1px, transparent 1px)',
        'radial-gradient(ellipse at 50% 0%, rgba(13,21,69,0.9) 0%, transparent 65%)',
      ].join(', '),
      backgroundSize: '28px 28px, 100% 100%',
    }}>
      <div className="container">

        {/* Badge */}
        <div className="section-label-wrap" style={{ marginBottom: 28 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'rgba(0,102,255,0.15)',
            border: '1px solid rgba(0,102,255,0.5)',
            borderRadius: 100, padding: '8px 20px',
            fontSize: 12, fontWeight: 700, color: '#00D4FF',
            letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>
            <span className="pulse-dot" style={{
              width: 7, height: 7, borderRadius: '50%',
              background: '#00D4FF', display: 'inline-block', flexShrink: 0,
            }}/>
            Agencia de Inteligencia Artificial · México
          </span>
        </div>

        <h1 style={{
          fontSize: 'clamp(34px, 6vw, 68px)',
          fontWeight: 900,
          lineHeight: 1.08,
          letterSpacing: '-2px',
          maxWidth: 820,
          margin: '0 auto 24px',
          color: '#FFFFFF',
        }}>
          Tu negocio en el{' '}
          <span className="gradient-text">siguiente nivel</span>
          {' '}con IA
        </h1>

        <p style={{
          color: '#8892B0',
          fontSize: 'clamp(16px, 2vw, 19px)',
          maxWidth: 580,
          margin: '0 auto 44px',
          lineHeight: 1.75,
        }}>
          Videos con influencers de IA, chatbots, apps y automatización.<br/>
          <strong style={{ color: '#FFFFFF' }}>Entrega en 48 horas.</strong>
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 72 }}>
          <a href="#contacto" className="btn-primary" style={{ fontSize: 16, padding: '15px 36px' }}>
            ▶ Video gratis de muestra
          </a>
          <a href="#portafolio" className="btn-ghost" style={{ fontSize: 16, padding: '14px 32px' }}>
            Ver portafolio
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: 0, justifyContent: 'center',
          background: 'rgba(13,13,31,0.8)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(0,102,255,0.3)',
          borderRadius: 18, overflow: 'hidden',
          maxWidth: 560, margin: '0 auto',
          boxShadow: '0 0 40px rgba(0,102,255,0.15)',
        }}>
          {[
            { value: '48h',  label: 'Entrega' },
            { value: '31+',  label: 'Servicios' },
            { value: '94%',  label: 'Ahorro vs agencia' },
          ].map((s, i) => (
            <div key={i} style={{
              flex: 1, padding: '24px 12px',
              borderRight: i < 2 ? '1px solid rgba(0,102,255,0.2)' : 'none',
              textAlign: 'center',
            }}>
              <div className="gradient-text" style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 900, lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: '#8892B0', marginTop: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
