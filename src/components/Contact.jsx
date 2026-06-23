import { useState } from 'react'

const services = [
  'Video con IA',
  'Pack de videos',
  'Influencer exclusiva',
  'Chatbot WhatsApp',
  'Voice Agent',
  'Landing page',
  'App a medida',
  'Contenido redes',
  'Paquete Arranca Digital',
  'Paquete Crece y Vende',
  'Paquete Domina tu Zona',
  'Paquete Negocio Inteligente',
  'Paquete Transformación Digital',
  'Paquete Empresa Completa',
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
    background: 'rgba(0,200,255,0.03)',
    border: '1px solid rgba(0,200,255,0.15)',
    borderRadius: 6,
    padding: '13px 16px',
    color: '#fff',
    fontSize: 14,
    outline: 'none',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
  }

  const labelStyle = {
    display: 'block', fontSize: 11, fontWeight: 700,
    color: 'rgba(255,255,255,0.5)', marginBottom: 8,
    letterSpacing: '0.1em', textTransform: 'uppercase',
  }

  return (
    <section id="contacto">
      <div className="container">
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <p style={{ textAlign: 'center', color: '#00c8ff', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 12 }}>Contacto</p>
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
                  onFocus={e => { e.target.style.borderColor = 'rgba(0,200,255,0.5)'; e.target.style.boxShadow = '0 0 12px rgba(0,200,255,0.15)' }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(0,200,255,0.15)'; e.target.style.boxShadow = 'none' }} />
              </div>
              <div>
                <label style={labelStyle}>Negocio</label>
                <input required name="negocio" value={form.negocio} onChange={handleChange}
                  placeholder="Nombre de tu negocio" style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = 'rgba(0,200,255,0.5)'; e.target.style.boxShadow = '0 0 12px rgba(0,200,255,0.15)' }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(0,200,255,0.15)'; e.target.style.boxShadow = 'none' }} />
              </div>
            </div>

            <div>
              <label style={labelStyle}>WhatsApp</label>
              <input required name="whatsapp" value={form.whatsapp} onChange={handleChange}
                placeholder="+52 55 1234 5678" type="tel" style={inputStyle}
                onFocus={e => { e.target.style.borderColor = 'rgba(0,200,255,0.5)'; e.target.style.boxShadow = '0 0 12px rgba(0,200,255,0.15)' }}
                onBlur={e => { e.target.style.borderColor = 'rgba(0,200,255,0.15)'; e.target.style.boxShadow = 'none' }} />
            </div>

            <div>
              <label style={labelStyle}>Servicio de interés</label>
              <select required name="servicio" value={form.servicio} onChange={handleChange}
                style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}>
                <option value="" disabled style={{ background: '#000' }}>Selecciona un servicio</option>
                {services.map(s => (
                  <option key={s} value={s} style={{ background: '#000' }}>{s}</option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '15px', marginTop: 4 }}>
              {sent ? '✓ ¡Mensaje enviado!' : '🎁 Quiero mi video gratis'}
            </button>
          </form>

          <div style={{
            marginTop: 36, textAlign: 'center', padding: '24px',
            background: 'rgba(0,200,255,0.03)',
            border: '1px solid rgba(0,200,255,0.15)',
            borderRadius: 8,
            backdropFilter: 'blur(10px)',
          }}>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, marginBottom: 12, letterSpacing: '0.08em', textTransform: 'uppercase' }}>O escríbenos directo por WhatsApp</p>
            <a href="https://wa.me/526271424345" target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                color: '#00c8ff', fontWeight: 700, fontSize: 16,
                textShadow: '0 0 12px rgba(0,200,255,0.4)',
              }}>
              <span style={{ fontSize: 22 }}>📱</span>
              +52 627 142 4345
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
