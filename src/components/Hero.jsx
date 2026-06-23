export default function Hero() {
  return (
    <section id="hero" style={{ paddingTop: 160, paddingBottom: 100, textAlign: 'center' }}>
      <div className="container">
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(0,200,255,0.08)', border: '1px solid rgba(0,200,255,0.2)',
          borderRadius: 100, padding: '7px 18px', marginBottom: 32,
          fontSize: 13, fontWeight: 600, color: '#00c8ff', letterSpacing: '0.3px'
        }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#00c8ff', display: 'inline-block' }}/>
          Agencia de Inteligencia Artificial · México
        </div>

        <h1 style={{
          fontSize: 'clamp(36px, 6vw, 68px)',
          fontWeight: 900,
          lineHeight: 1.1,
          letterSpacing: '-1.5px',
          marginBottom: 24,
          maxWidth: 780,
          margin: '0 auto 24px',
        }}>
          Tu negocio en el{' '}
          <span style={{ color: '#00c8ff' }}>siguiente nivel</span>
          {' '}con IA
        </h1>

        <p style={{
          color: 'rgba(255,255,255,0.55)',
          fontSize: 'clamp(16px, 2vw, 19px)',
          maxWidth: 600,
          margin: '0 auto 40px',
          lineHeight: 1.7,
        }}>
          Videos con influencers de IA, chatbots, apps y automatización.<br/>
          <strong style={{ color: 'rgba(255,255,255,0.8)' }}>Entrega en 48 horas.</strong>
        </p>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 64 }}>
          <a href="#contacto" className="btn-primary" style={{ fontSize: 16, padding: '15px 32px' }}>
            ▶ Video gratis de muestra
          </a>
          <a href="#portafolio" className="btn-ghost" style={{ fontSize: 16, padding: '15px 32px' }}>
            Ver portafolio
          </a>
        </div>

        <div style={{
          display: 'flex', gap: 0, justifyContent: 'center',
          background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 16, overflow: 'hidden', maxWidth: 560, margin: '0 auto',
        }}>
          {[
            { value: '48h', label: 'Entrega' },
            { value: '31+', label: 'Servicios' },
            { value: '94%', label: 'Ahorro vs agencia' },
          ].map((s, i) => (
            <div key={i} style={{
              flex: 1, padding: '24px 16px',
              borderRight: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 800, color: '#00c8ff', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
