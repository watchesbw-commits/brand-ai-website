import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Paquetes', href: '#paquetes' },
    { label: 'Precios',   href: '#precios'   },
    { label: 'Contacto',  href: '#contacto'  },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: '#fff',
      borderBottom: scrolled ? '1px solid rgba(26,26,46,0.1)' : '1px solid rgba(26,26,46,0.06)',
      boxShadow: scrolled ? '0 2px 20px rgba(26,26,46,0.08)' : 'none',
      transition: 'box-shadow 0.3s, border-color 0.3s',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: 22, fontWeight: 800, letterSpacing: '-0.5px' }}>
          <span style={{ color: '#1A1A2E' }}>Brand</span>
          <span style={{ color: '#7C3AED' }}>AI</span>
        </a>

        <div className="nav-links-desktop" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {links.map(l => (
            <a key={l.href} href={l.href}
              style={{ color: 'rgba(26,26,46,0.65)', fontSize: 14, fontWeight: 500, transition: 'color 0.18s' }}
              onMouseEnter={e => e.target.style.color = '#7C3AED'}
              onMouseLeave={e => e.target.style.color = 'rgba(26,26,46,0.65)'}>
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="btn-primary" style={{ padding: '10px 22px', fontSize: 14 }}>
            Contactar
          </a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger"
          style={{ background: 'none', border: 'none', color: '#1A1A2E', display: 'none', flexDirection: 'column', gap: 5, padding: 4 }}>
          <span style={{ display: 'block', width: 22, height: 2, background: '#1A1A2E', borderRadius: 1, transition: 'all 0.22s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}/>
          <span style={{ display: 'block', width: 22, height: 2, background: '#1A1A2E', borderRadius: 1, transition: 'all 0.22s', opacity: menuOpen ? 0 : 1 }}/>
          <span style={{ display: 'block', width: 22, height: 2, background: '#1A1A2E', borderRadius: 1, transition: 'all 0.22s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}/>
        </button>
      </div>

      {menuOpen && (
        <div style={{
          background: '#fff', borderTop: '1px solid rgba(26,26,46,0.08)',
          padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 20,
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href}
              style={{ color: '#1A1A2E', fontSize: 16, fontWeight: 500 }}
              onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center' }}
            onClick={() => setMenuOpen(false)}>
            Contactar
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
