export default function Hero() {
  return (
    <section id="hero" style={{ paddingTop: 148, paddingBottom: 96, textAlign: 'center', background: '#F8F8F8' }}>
      <div className="container">

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)',
          borderRadius: 100, padding: '8px 20px', marginBottom: 32,
          fontSize: 12, fontWeight: 700, color: '#7C3AED',
          letterSpacing: '0.12em', textTransform: 'uppercase',
        }}>
          <span className="pulse-dot" style={{
            width: 7, height: 7, borderRadius: '50%',
            background: '#7C3AED', display: 'inline-block', flexShrink: 0,
          }}/>
          Agencia de Inteligencia Artificial · México
        </div>

        <h1 style={{
          fontSize: 'clamp(34px, 6vw, 66px)',
          fontWeight: 900,
          lineHeight: 1.1,
          letterSpacing: '-1.5px',
          maxWidth: 780,
          margin: '0 auto 22px',
          color: '#1A1A2E',
        }}>
          Tu negocio en el{' '}
          <span style={{ color: '#7C3AED' }}>siguiente nivel</span>
          {' '}con IA
        </h1>

        <p style={{
          color: 'rgba(26,26,46,0.6)',
          fontSize: 'clamp(16px, 2vw, 19px)',
          maxWidth: 580,
          margin: '0 auto 40px',
          lineHeight: 1.75,
        }}>
          Videos con influencers de IA, chatbots, apps y automatización.<br/>
          <strong style={{ color: '#1A1A2E' }}>Entrega en 48 horas.</strong>
        </p>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 64 }}>
          <a href="#contacto" className="btn-primary" style={{ fontSize: 16, padding: '15px 32px' }}>
            ▶ Video gratis de muestra
          </a>
          <a href="#portafolio" className="btn-ghost" style={{ fontSize: 16, padding: '14px 32px' }}>
            Ver portafolio
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: 0, justifyContent: 'center',
          background: '#fff',
          border: '1px solid rgba(26,26,46,0.08)',
          borderRadius: 16, overflow: 'hidden',
          maxWidth: 560, margin: '0 auto',
          boxShadow: '0 2px 16px rgba(26,26,46,0.06)',
        }}>
          {[
            { value: '48h',  label: 'Entrega' },
            { value: '31+',  label: 'Servicios' },
            { value: '94%',  label: 'Ahorro vs agencia' },
          ].map((s, i) => (
            <div key={i} style={{
              flex: 1, padding: '24px 12px',
              borderRight: i < 2 ? '1px solid rgba(26,26,46,0.08)' : 'none',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 900, color: '#7C3AED', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: 'rgba(26,26,46,0.45)', marginTop: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
