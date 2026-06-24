import { useState } from 'react'

const services = [
  'Video con IA', 'Pack de videos', 'Influencer exclusiva', 'Chatbot WhatsApp',
  'Voice Agent', 'Landing page', 'App a medida', 'Contenido redes',
  'Paquete Arranca Digital', 'Paquete Crece y Vende', 'Paquete Domina tu Zona',
  'Paquete Negocio Inteligente', 'Paquete Transformación Digital', 'Paquete Empresa Completa',
]

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', negocio: '', whatsapp: '', servicio: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `¡Hola Brand AI! Me interesa conocer más.\n\nNombre: ${form.nombre}\nNegocio: ${form.negocio}\nServicio de interés: ${form.servicio}`
    )
    window.open(`https://wa.me/526271424345?text=${msg}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const inputStyle = {
    width: '100%', background: '#fff',
    border: '1.5px solid rgba(26,26,46,0.12)',
    borderRadius: 10, padding: '13px 16px',
    color: '#1A1A2E', fontSize: 15, outline: 'none',
    transition: 'all 0.22s ease',
    boxShadow: '0 1px 4px rgba(26,26,46,0.04)',
  }

  const labelStyle = {
    display: 'block', fontSize: 12, fontWeight: 700,
    color: '#7C3AED', marginBottom: 8,
    letterSpacing: '0.08em', textTransform: 'uppercase',
  }

  return (
    <section id="contacto" style={{ background: '#F8F8F8' }}>
      <div className="container">
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <p className="section-label">Contacto</p>
          <h2 className="section-title">Empieza con un video gratis</h2>
          <p className="section-sub" style={{ marginBottom: 40 }}>
            Mándanos tu negocio y creamos un video de muestra sin costo para que veas la calidad
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label style={labelStyle}>Nombre</label>
                <input required name="nombre" value={form.nombre} onChange={handleChange}
                  placeholder="Tu nombre" style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = '#7C3AED'; e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.1)' }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(26,26,46,0.12)'; e.target.style.boxShadow = '0 1px 4px rgba(26,26,46,0.04)' }} />
              </div>
              <div>
                <label style={labelStyle}>Negocio</label>
                <input required name="negocio" value={form.negocio} onChange={handleChange}
                  placeholder="Nombre de tu negocio" style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = '#7C3AED'; e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.1)' }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(26,26,46,0.12)'; e.target.style.boxShadow = '0 1px 4px rgba(26,26,46,0.04)' }} />
              </div>
            </div>

            <div>
              <label style={labelStyle}>WhatsApp</label>
              <input required name="whatsapp" value={form.whatsapp} onChange={handleChange}
                placeholder="+52 55 1234 5678" type="tel" style={inputStyle}
                onFocus={e => { e.target.style.borderColor = '#7C3AED'; e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.1)' }}
                onBlur={e => { e.target.style.borderColor = 'rgba(26,26,46,0.12)'; e.target.style.boxShadow = '0 1px 4px rgba(26,26,46,0.04)' }} />
            </div>

            <div>
              <label style={labelStyle}>Servicio de interés</label>
              <select required name="servicio" value={form.servicio} onChange={handleChange}
                style={{ ...inputStyle, appearance: 'none', cursor: 'pointer', color: form.servicio ? '#1A1A2E' : 'rgba(26,26,46,0.4)' }}>
                <option value="" disabled>Selecciona un servicio</option>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '15px', fontSize: 16, marginTop: 4 }}>
              {sent ? '✓ ¡Mensaje enviado!' : '🎁 Quiero mi video gratis'}
            </button>
          </form>

          <div style={{
            marginTop: 32, textAlign: 'center', padding: '24px',
            background: '#fff', border: '1px solid rgba(26,26,46,0.08)',
            borderRadius: 14, boxShadow: '0 2px 12px rgba(26,26,46,0.05)',
          }}>
            <p style={{ color: 'rgba(26,26,46,0.45)', fontSize: 13, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.08em' }}>O escríbenos directo por WhatsApp</p>
            <a href="https://wa.me/526271424345" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: '#7C3AED', fontWeight: 700, fontSize: 17 }}>
              <span style={{ fontSize: 22 }}>📱</span>
              +52 627 142 4345
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
