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
    <footer style={{ background: '#111827', padding: '56px 0 32px' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, justifyContent: 'space-between', marginBottom: 48 }}>

          <div style={{ maxWidth: 260 }}>
            <a href="#" style={{ display: 'inline-block', fontSize: 20, fontWeight: 800, marginBottom: 14, color: '#fff', letterSpacing: '-0.5px' }}>
              Brand<span style={{ color: '#60A5FA' }}>AI</span>
            </a>
            <p style={{ color: '#9CA3AF', fontSize: 14, lineHeight: 1.75 }}>
              Agencia de inteligencia artificial en México. Videos, chatbots, apps y automatización para tu negocio.
            </p>
          </div>

          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4B5563', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16 }}>Navegación</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {links.map(l => (
                <a key={l.href} href={l.href}
                  style={{ color: '#9CA3AF', fontSize: 14, transition: 'color 0.15s' }}
                  onMouseEnter={e => e.target.style.color = '#F9FAFB'}
                  onMouseLeave={e => e.target.style.color = '#9CA3AF'}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#4B5563', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16 }}>Redes sociales</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: 9, color: '#9CA3AF', fontSize: 14, transition: 'color 0.15s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#F9FAFB' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#9CA3AF' }}>
                  <span>{s.icon}</span> {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ height: 1, background: '#1F2937', marginBottom: 24 }}/>

        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#4B5563', fontSize: 13 }}>
            © 2026 Brand AI · México · Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
