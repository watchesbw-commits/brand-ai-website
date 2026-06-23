export default function Footer() {
  const links = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Paquetes', href: '#paquetes' },
    { label: 'Precios', href: '#precios' },
    { label: 'Contacto', href: '#contacto' },
  ]

  const socials = [
    { label: 'Instagram', icon: '📸', href: '#' },
    { label: 'TikTok', icon: '🎵', href: '#' },
    { label: 'WhatsApp', icon: '💬', href: 'https://wa.me/521XXXXXXXXXX' },
  ]

  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '48px 0 32px',
    }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, justifyContent: 'space-between', marginBottom: 40 }}>
          <div style={{ maxWidth: 280 }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: 22, fontWeight: 800, marginBottom: 14 }}>
              <span style={{ color: '#fff' }}>Brand</span>
              <span style={{ color: '#00c8ff' }}>AI</span>
            </a>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, lineHeight: 1.7 }}>
              Agencia de inteligencia artificial en México. Videos, chatbots, apps y automatización para tu negocio.
            </p>
          </div>

          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 16 }}>Navegación</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {links.map(l => (
                <a key={l.href} href={l.href} style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 16 }}>Redes sociales</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.55)', fontSize: 14, transition: 'color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#00c8ff' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)' }}>
                  <span>{s.icon}</span> {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13 }}>
            © 2026 Brand AI · México · Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
