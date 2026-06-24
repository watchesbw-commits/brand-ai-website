export default function Footer() {
  const links = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Paquetes',  href: '#paquetes'  },
    { label: 'Precios',   href: '#precios'   },
    { label: 'Contacto',  href: '#contacto'  },
  ]

  const socials = [
    { label: 'Instagram', icon: '📸', href: '#'                          },
    { label: 'TikTok',    icon: '🎵', href: '#'                          },
    { label: 'WhatsApp',  icon: '💬', href: 'https://wa.me/526271424345' },
  ]

  return (
    <footer style={{ background: '#030308', padding: '56px 0 32px' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, justifyContent: 'space-between', marginBottom: 48 }}>

          <div style={{ maxWidth: 280 }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: 22, fontWeight: 900, marginBottom: 16 }}>
              <span style={{ color: '#fff' }}>Brand</span>
              <span className="gradient-text">AI</span>
            </a>
            <p style={{ color: 'rgba(136,146,176,0.6)', fontSize: 14, lineHeight: 1.75 }}>
              Agencia de inteligencia artificial en México. Videos, chatbots, apps y automatización para tu negocio.
            </p>
          </div>

          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(136,146,176,0.4)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 18 }}>Navegación</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {links.map(l => (
                <a key={l.href} href={l.href}
                  style={{ color: 'rgba(136,146,176,0.6)', fontSize: 14, transition: 'color 0.18s' }}
                  onMouseEnter={e => e.target.style.color = '#00D4FF'}
                  onMouseLeave={e => e.target.style.color = 'rgba(136,146,176,0.6)'}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(136,146,176,0.4)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 18 }}>Redes sociales</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(136,146,176,0.6)', fontSize: 14, transition: 'color 0.18s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#00D4FF' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(136,146,176,0.6)' }}>
                  <span>{s.icon}</span> {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,102,255,0.5), rgba(0,212,255,0.4), transparent)', marginBottom: 28 }}/>

        <div style={{ textAlign: 'center' }}>
          <p style={{ color: 'rgba(136,146,176,0.25)', fontSize: 13 }}>
            © 2026 Brand AI · México · Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
