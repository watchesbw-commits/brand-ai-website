import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Paquetes', href: '#paquetes' },
    { label: 'Precios', href: '#precios' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(0,0,0,0.85)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(0,200,255,0.1)',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: 22, fontWeight: 800, letterSpacing: '-0.5px' }}>
          <span style={{ color: '#fff' }}>Brand</span>
          <span style={{ color: '#00c8ff', textShadow: '0 0 12px rgba(0,200,255,0.6)' }}>AI</span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="nav-links-desktop">
          {links.map(l => (
            <a key={l.href} href={l.href}
              style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#00c8ff'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}>
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="btn-primary" style={{ padding: '9px 20px', fontSize: 11 }}>
            Contactar
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          style={{ background: 'none', border: 'none', color: '#00c8ff', display: 'none', flexDirection: 'column', gap: 5, padding: 4 }}>
          <span style={{ display: 'block', width: 22, height: 1.5, background: '#00c8ff', transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}/>
          <span style={{ display: 'block', width: 22, height: 1.5, background: '#00c8ff', transition: 'all 0.2s', opacity: menuOpen ? 0 : 1 }}/>
          <span style={{ display: 'block', width: 22, height: 1.5, background: '#00c8ff', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}/>
        </button>
      </div>

      {menuOpen && (
        <div style={{
          background: 'rgba(0,0,0,0.97)', borderTop: '1px solid rgba(0,200,255,0.1)',
          padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 20
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href}
              style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}
              onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center' }} onClick={() => setMenuOpen(false)}>
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
