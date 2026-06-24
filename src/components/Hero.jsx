export default function Hero() {
  return (
    <section id="hero" style={{ paddingTop: 140, paddingBottom: 80, textAlign: 'center', background: '#F9FAFB' }}>
      <div className="container">

        {/* Badge */}
        <div className="section-label-wrap" style={{ marginBottom: 24 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#EFF6FF', border: '1px solid #BFDBFE',
            borderRadius: 100, padding: '6px 18px',
            fontSize: 12, fontWeight: 600, color: '#2563EB',
            letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>
            <span className="pulse-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: '#2563EB', display: 'inline-block', flexShrink: 0 }}/>
            Agencia de Inteligencia Artificial · México
          </span>
        </div>

        <h1 style={{
          fontSize: 'clamp(32px, 6vw, 64px)',
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: '-1.5px',
          maxWidth: 800,
          margin: '0 auto 20px',
          color: '#111827',
        }}>
          Tu negocio en el{' '}
          <span className="gradient-text">siguiente nivel</span>
          {' '}con IA
        </h1>

        <p style={{
          color: '#6B7280',
          fontSize: 'clamp(16px, 2vw, 18px)',
          maxWidth: 540,
          margin: '0 auto 40px',
          lineHeight: 1.7,
        }}>
          Videos con influencers de IA, chatbots, apps y automatización.<br/>
          <strong style={{ color: '#111827', fontWeight: 600 }}>Entrega en 48 horas.</strong>
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 64 }}>
          <a href="#contacto" className="btn-primary" style={{ fontSize: 15, padding: '13px 32px' }}>
            ▶ Video gratis de muestra
          </a>
          <a href="#portafolio" className="btn-ghost" style={{ fontSize: 15, padding: '12px 28px' }}>
            Ver portafolio
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: 0, justifyContent: 'center',
          background: '#FFFFFF',
          border: '1px solid #E5E7EB',
          borderRadius: 16, overflow: 'hidden',
          maxWidth: 520, margin: '0 auto',
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        }}>
          {[
            { value: '48h',  label: 'Entrega' },
            { value: '31+',  label: 'Servicios' },
            { value: '94%',  label: 'Ahorro vs agencia' },
          ].map((s, i) => (
            <div key={i} style={{
              flex: 1, padding: '22px 12px',
              borderRight: i < 2 ? '1px solid #E5E7EB' : 'none',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: '#2563EB', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: '#6B7280', marginTop: 5, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
