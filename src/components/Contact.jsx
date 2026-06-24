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
    width: '100%',
    background: '#FFFFFF',
    border: '1.5px solid #E5E7EB',
    borderRadius: 10, padding: '12px 14px',
    color: '#111827', fontSize: 15, outline: 'none',
    transition: 'border-color 0.18s ease',
    fontFamily: 'inherit',
  }

  const labelStyle = {
    display: 'block', fontSize: 12, fontWeight: 600,
    color: '#374151', marginBottom: 6,
    letterSpacing: '0.02em',
  }

  return (
    <section id="contacto" style={{ background: '#F9FAFB' }}>
      <div className="container">
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div className="section-label-wrap">
            <span className="section-label">Contacto</span>
          </div>
          <h2 className="section-title">Empieza con un <span className="gradient-text">video gratis</span></h2>
          <p className="section-sub" style={{ marginBottom: 36 }}>
            Mándanos tu negocio y creamos un video de muestra sin costo para que veas la calidad
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <div>
                <label style={labelStyle}>Nombre</label>
                <input required name="nombre" value={form.nombre} onChange={handleChange}
                  placeholder="Tu nombre" style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = '#2563EB' }}
                  onBlur={e => { e.target.style.borderColor = '#E5E7EB' }} />
              </div>
              <div>
                <label style={labelStyle}>Negocio</label>
                <input required name="negocio" value={form.negocio} onChange={handleChange}
                  placeholder="Nombre de tu negocio" style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = '#2563EB' }}
                  onBlur={e => { e.target.style.borderColor = '#E5E7EB' }} />
              </div>
            </div>

            <div>
              <label style={labelStyle}>WhatsApp</label>
              <input required name="whatsapp" value={form.whatsapp} onChange={handleChange}
                placeholder="+52 55 1234 5678" type="tel" style={inputStyle}
                onFocus={e => { e.target.style.borderColor = '#2563EB' }}
                onBlur={e => { e.target.style.borderColor = '#E5E7EB' }} />
            </div>

            <div>
              <label style={labelStyle}>Servicio de interés</label>
              <select required name="servicio" value={form.servicio} onChange={handleChange}
                style={{ ...inputStyle, appearance: 'none', cursor: 'pointer', background: '#fff' }}>
                <option value="" disabled>Selecciona un servicio</option>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: 15, marginTop: 4 }}>
              {sent ? '✓ ¡Mensaje enviado!' : '🎁 Quiero mi video gratis'}
            </button>
          </form>

          <div style={{
            marginTop: 28, textAlign: 'center', padding: '20px',
            background: '#FFFFFF', border: '1px solid #E5E7EB',
            borderRadius: 14, boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
          }}>
            <p style={{ color: '#9CA3AF', fontSize: 12, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>O escríbenos directo por WhatsApp</p>
            <a href="https://wa.me/526271424345" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 17, color: '#2563EB' }}>
              <span style={{ fontSize: 20 }}>📱</span>
              +52 627 142 4345
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
