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
    { label: 'Precios', href: '#precios' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(2,8,24,0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      transition: 'all 0.3s',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: 22, fontWeight: 800, letterSpacing: '-0.5px' }}>
          <span style={{ color: '#fff' }}>Brand</span>
          <span style={{ color: '#00c8ff' }}>AI</span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="nav-links-desktop">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}>
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="btn-primary" style={{ padding: '10px 22px', fontSize: 14 }}>
            Contactar
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          style={{ background: 'none', border: 'none', color: '#fff', display: 'none', flexDirection: 'column', gap: 5, padding: 4 }}>
          <span style={{ display: 'block', width: 22, height: 2, background: '#fff', transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}/>
          <span style={{ display: 'block', width: 22, height: 2, background: '#fff', transition: 'all 0.2s', opacity: menuOpen ? 0 : 1 }}/>
          <span style={{ display: 'block', width: 22, height: 2, background: '#fff', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}/>
        </button>
      </div>

      {menuOpen && (
        <div style={{
          background: 'rgba(2,8,24,0.97)', borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 20
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ color: 'rgba(255,255,255,0.8)', fontSize: 16, fontWeight: 500 }}
              onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="btn-primary" style={{ textAlign: 'center' }} onClick={() => setMenuOpen(false)}>
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
