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
  { icon: '🎬', name: 'Video con IA',         price: '$1,499 MXN/video'          },
  { icon: '📦', name: 'Pack 8 videos',        price: '$5,999 MXN/mes'            },
  { icon: '🤖', name: 'Influencer exclusiva', price: '$7,999 MXN'                },
  { icon: '💬', name: 'Chatbot WhatsApp',     price: '$3,499 setup + $999/mes'   },
  { icon: '🎙️', name: 'Voice Agent',          price: '$4,999 setup + $1,299/mes' },
  { icon: '🌐', name: 'Landing page',         price: '$5,999 MXN'                },
  { icon: '📱', name: 'App a medida',         price: '$14,999 MXN'               },
  { icon: '📧', name: 'Email marketing IA',   price: '$1,999 MXN/mes'            },
]

function ServiceCard({ icon, name, price }) {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 16, height: '100%' }}>
      <div style={{
        width: 52, height: 52, borderRadius: 14,
        background: 'linear-gradient(135deg, #0066FF, #00D4FF)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24,
        boxShadow: '0 0 20px rgba(0,102,255,0.4)',
      }}>{icon}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: '#FFFFFF' }}>{name}</div>
        <div className="gradient-text" style={{ fontSize: 15, fontWeight: 800 }}>{price}</div>
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
    <section id="servicios" style={{ background: '#050510' }}>
      <div className="container">
        <div className="section-label-wrap">
          <span className="section-label">Servicios</span>
        </div>
        <h2 className="section-title gradient-text">Servicios individuales</h2>
        <p className="section-sub">Paga solo lo que necesitas</p>

        <div style={{
          display: 'flex', justifyContent: 'center', marginBottom: 44,
          background: 'rgba(13,13,31,0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0,102,255,0.3)',
          borderRadius: 12, padding: 5, maxWidth: 390, margin: '0 auto 44px',
        }}>
          {tabs.map((t, i) => (
            <button key={i} onClick={() => setTab(i)} style={{
              flex: 1, padding: '10px 16px', borderRadius: 8, border: 'none',
              background: tab === i ? 'linear-gradient(135deg, #0066FF, #00D4FF)' : 'transparent',
              color: tab === i ? '#fff' : '#8892B0',
              fontWeight: 700, fontSize: 14,
              boxShadow: tab === i ? '0 0 20px rgba(0,102,255,0.4)' : 'none',
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
