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
    { label: 'Paquetes',  href: '#paquetes'  },
    { label: 'Precios',   href: '#precios'   },
    { label: 'Contacto',  href: '#contacto'  },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(5,5,16,0.9)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: scrolled ? '1px solid rgba(0,102,255,0.2)' : '1px solid transparent',
      boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.4)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: 22, fontWeight: 900, letterSpacing: '-0.5px' }}>
          <span style={{ color: '#FFFFFF' }}>Brand</span>
          <span className="gradient-text">AI</span>
        </a>

        <div className="nav-links-desktop" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {links.map(l => (
            <a key={l.href} href={l.href}
              style={{ color: '#8892B0', fontSize: 14, fontWeight: 500, transition: 'color 0.18s' }}
              onMouseEnter={e => e.target.style.color = '#00D4FF'}
              onMouseLeave={e => e.target.style.color = '#8892B0'}>
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="btn-primary" style={{ padding: '10px 22px', fontSize: 14 }}>
            Contactar
          </a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger"
          style={{ background: 'none', border: 'none', color: '#FFFFFF', display: 'none', flexDirection: 'column', gap: 5, padding: 4 }}>
          <span style={{ display: 'block', width: 22, height: 2, background: '#FFFFFF', borderRadius: 1, transition: 'all 0.22s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}/>
          <span style={{ display: 'block', width: 22, height: 2, background: '#FFFFFF', borderRadius: 1, transition: 'all 0.22s', opacity: menuOpen ? 0 : 1 }}/>
          <span style={{ display: 'block', width: 22, height: 2, background: '#FFFFFF', borderRadius: 1, transition: 'all 0.22s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}/>
        </button>
      </div>

      {menuOpen && (
        <div style={{
          background: 'rgba(5,5,16,0.98)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(0,102,255,0.2)',
          padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 20,
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href}
              style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 500 }}
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
