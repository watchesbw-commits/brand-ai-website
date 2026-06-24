import { useRef, useState, useEffect } from 'react'

export default function VideoPlayer({
  src,
  title,
  vertical = false,
  allow = 'autoplay; encrypted-media; gyroscope; picture-in-picture',
  placeholder = false,
  mb = 0,
}) {
  const ref = useRef(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (placeholder) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setLoaded(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [placeholder])

  const aspectRatio = vertical ? '9 / 16' : '16 / 9'

  return (
    <div style={{ width: '100%', marginBottom: mb }}>
      <div ref={ref} style={{
        width: '100%',
        aspectRatio,
        position: 'relative',
        borderRadius: 16,
        overflow: 'hidden',
        border: '1px solid #E5E7EB',
        boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
        background: '#F9FAFB',
      }}>
        {placeholder ? (
          <div style={{
            position: 'absolute', inset: 0,
            background: '#111827',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{
              color: '#FFFFFF', fontWeight: 700, fontSize: 15,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              textAlign: 'center', padding: '0 24px',
            }}>VIDEO PRÓXIMAMENTE</span>
          </div>
        ) : loaded ? (
          <iframe
            src={src}
            title={title}
            allow={allow}
            allowFullScreen
            style={{
              position: 'absolute', top: 0, left: 0,
              width: '100%', height: '100%',
              border: 'none', background: '#000',
            }}
          />
        ) : (
          <div style={{
            position: 'absolute', inset: 0,
            background: '#F9FAFB',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 12,
          }}>
            <div style={{
              width: 56, height: 56, borderRadius: '50%',
              background: '#2563EB',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20, color: '#fff',
            }}>▶</div>
            <span style={{ color: '#9CA3AF', fontSize: 13 }}>Cargando...</span>
          </div>
        )}
      </div>
    </div>
  )
}
