import { useState } from 'react'

const smallBiz = [
  { icon: '🎬', name: 'Video con IA', price: '$699 MXN/video' },
  { icon: '📦', name: 'Pack 4 videos', price: '$1,999 MXN/mes' },
  { icon: '🌐', name: 'Landing page', price: '$2,499 MXN' },
  { icon: '💬', name: 'Chatbot WhatsApp', price: '$999 setup + $399/mes' },
  { icon: '🎙️', name: 'Voice Agent', price: '$1,499 setup + $599/mes' },
  { icon: '📱', name: 'Contenido redes', price: '$1,299 MXN/mes' },
  { icon: '📸', name: 'Fotos producto IA', price: '$349 MXN/set' },
  { icon: '🍽️', name: 'Menú digital', price: '$1,499 MXN' },
]

const mediumBiz = [
  { icon: '🎬', name: 'Video con IA', price: '$1,499 MXN/video' },
  { icon: '📦', name: 'Pack 8 videos', price: '$5,999 MXN/mes' },
  { icon: '🤖', name: 'Influencer exclusiva', price: '$7,999 MXN' },
  { icon: '💬', name: 'Chatbot WhatsApp', price: '$3,499 setup + $999/mes' },
  { icon: '🎙️', name: 'Voice Agent', price: '$4,999 setup + $1,299/mes' },
  { icon: '🌐', name: 'Landing page', price: '$5,999 MXN' },
  { icon: '📱', name: 'App a medida', price: '$14,999 MXN' },
  { icon: '📧', name: 'Email marketing IA', price: '$1,999 MXN/mes' },
]

function ServiceCard({ icon, name, price }) {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ fontSize: 28 }}>{icon}</div>
      <div>
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>{name}</div>
        <div style={{ color: '#00c8ff', fontSize: 15, fontWeight: 600 }}>{price}</div>
      </div>
      <a href="#contacto" className="btn-primary" style={{ padding: '9px 18px', fontSize: 13, marginTop: 'auto' }}>
        Contratar
      </a>
    </div>
  )
}

export default function Services() {
  const [tab, setTab] = useState(0)
  const tabs = ['Pequeños negocios', 'Empresas medianas']
  const data = [smallBiz, mediumBiz]

  return (
    <section id="servicios">
      <div className="container">
        <p style={{ textAlign: 'center', color: '#00c8ff', fontSize: 13, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 12 }}>Servicios</p>
        <h2 className="section-title">Servicios individuales</h2>
        <p className="section-sub">Paga solo lo que necesitas</p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 0, marginBottom: 44,
          background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 12, padding: 4, maxWidth: 380, margin: '0 auto 44px' }}>
          {tabs.map((t, i) => (
            <button key={i} onClick={() => setTab(i)} style={{
              flex: 1, padding: '10px 16px', borderRadius: 9, border: 'none',
              background: tab === i ? '#1a4fd8' : 'transparent',
              color: tab === i ? '#fff' : 'rgba(255,255,255,0.5)',
              fontWeight: 600, fontSize: 14, transition: 'all 0.2s',
            }}>{t}</button>
          ))}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: 20,
        }}>
          {data[tab].map((s, i) => <ServiceCard key={i} {...s} />)}
        </div>
      </div>
    </section>
  )
}
