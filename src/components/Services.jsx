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
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 14, height: '100%' }}>
      <div style={{
        width: 48, height: 48, borderRadius: 12,
        background: '#EFF6FF',
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22,
      }}>{icon}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 6, color: '#111827' }}>{name}</div>
        <div style={{ fontSize: 14, fontWeight: 700, color: '#2563EB' }}>{price}</div>
      </div>
      <a href="#contacto" className="btn-primary" style={{ padding: '9px 16px', fontSize: 13, marginTop: 'auto' }}>
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
        <div className="section-label-wrap">
          <span className="section-label">Servicios</span>
        </div>
        <h2 className="section-title">Servicios <span className="gradient-text">individuales</span></h2>
        <p className="section-sub">Paga solo lo que necesitas</p>

        <div style={{
          display: 'flex', justifyContent: 'center', marginBottom: 40,
          background: '#F9FAFB', border: '1px solid #E5E7EB',
          borderRadius: 10, padding: 4, maxWidth: 380, margin: '0 auto 40px',
        }}>
          {tabs.map((t, i) => (
            <button key={i} onClick={() => setTab(i)} style={{
              flex: 1, padding: '9px 14px', borderRadius: 8, border: 'none',
              background: tab === i ? '#2563EB' : 'transparent',
              color: tab === i ? '#fff' : '#6B7280',
              fontWeight: 600, fontSize: 14,
              transition: 'all 0.18s',
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
