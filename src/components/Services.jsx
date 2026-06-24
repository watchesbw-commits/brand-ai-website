import { useState } from 'react'
import Carousel from './Carousel'

const smallBiz = [
  { icon: '🎬', name: 'Video con IA',       price: '$699 MXN/video'          },
  { icon: '📦', name: 'Pack 4 videos',      price: '$1,999 MXN/mes'          },
  { icon: '🌐', name: 'Landing page',       price: '$2,499 MXN'              },
  { icon: '💬', name: 'Chatbot WhatsApp',   price: '$999 setup + $399/mes'   },
  { icon: '🎙️', name: 'Voice Agent',        price: '$1,499 setup + $599/mes' },
  { icon: '📱', name: 'Contenido redes',    price: '$1,299 MXN/mes'          },
  { icon: '📸', name: 'Fotos producto IA',  price: '$349 MXN/set'            },
  { icon: '🍽️', name: 'Menú digital',       price: '$1,499 MXN'              },
]

const mediumBiz = [
  { icon: '🎬', name: 'Video con IA',        price: '$1,499 MXN/video'          },
  { icon: '📦', name: 'Pack 8 videos',       price: '$5,999 MXN/mes'            },
  { icon: '🤖', name: 'Influencer exclusiva',price: '$7,999 MXN'                },
  { icon: '💬', name: 'Chatbot WhatsApp',    price: '$3,499 setup + $999/mes'   },
  { icon: '🎙️', name: 'Voice Agent',         price: '$4,999 setup + $1,299/mes' },
  { icon: '🌐', name: 'Landing page',        price: '$5,999 MXN'                },
  { icon: '📱', name: 'App a medida',        price: '$14,999 MXN'               },
  { icon: '📧', name: 'Email marketing IA',  price: '$1,999 MXN/mes'            },
]

function ServiceCard({ icon, name, price }) {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 16, height: '100%' }}>
      <div style={{
        width: 52, height: 52, borderRadius: 14,
        background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.12)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24,
      }}>{icon}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6, color: '#1A1A2E' }}>{name}</div>
        <div style={{ color: '#7C3AED', fontSize: 15, fontWeight: 700 }}>{price}</div>
      </div>
      <a href="#contacto" className="btn-primary" style={{ padding: '10px 18px', fontSize: 13, marginTop: 'auto' }}>
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
    <section id="servicios" style={{ background: '#FFFFFF' }}>
      <div className="container">
        <p className="section-label">Servicios</p>
        <h2 className="section-title">Servicios individuales</h2>
        <p className="section-sub">Paga solo lo que necesitas</p>

        {/* Tab switcher */}
        <div style={{
          display: 'flex', justifyContent: 'center', marginBottom: 44,
          background: '#F8F8F8', border: '1px solid rgba(26,26,46,0.08)',
          borderRadius: 12, padding: 4, maxWidth: 380, margin: '0 auto 44px',
        }}>
          {tabs.map((t, i) => (
            <button key={i} onClick={() => setTab(i)} style={{
              flex: 1, padding: '10px 16px', borderRadius: 9, border: 'none',
              background: tab === i ? '#7C3AED' : 'transparent',
              color: tab === i ? '#fff' : 'rgba(26,26,46,0.5)',
              fontWeight: 600, fontSize: 14,
              boxShadow: tab === i ? '0 2px 10px rgba(124,58,237,0.3)' : 'none',
              transition: 'all 0.22s',
            }}>{t}</button>
          ))}
        </div>

        <Carousel minWidth={240}>
          {data[tab].map((s, i) => <ServiceCard key={i} {...s} />)}
        </Carousel>
      </div>
    </section>
  )
}
