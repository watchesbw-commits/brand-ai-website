import { useRef, useState, useEffect } from 'react'

export default function VideoPlayer({
  src,
  title,
  vertical = false,
  allow = 'autoplay; encrypted-media; gyroscope; picture-in-picture',
  placeholder = false,
  mb = 56,
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

  const maxWidth = vertical ? 360 : 700
  const aspectRatio = vertical ? '9 / 16' : '16 / 9'

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: mb }}>
      <div className="float" style={{ width: '100%', maxWidth }}>
        <div ref={ref} style={{
          width: '100%',
          aspectRatio,
          position: 'relative',
          borderRadius: 16,
          overflow: 'hidden',
          border: '1px solid rgba(0,212,255,0.3)',
          boxShadow: '0 0 80px rgba(0,102,255,0.4), 0 0 160px rgba(0,212,255,0.2)',
        }}>
          {placeholder ? (
            <div style={{
              position: 'absolute', inset: 0,
              background: '#000000',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{
                color: '#FFFFFF', fontWeight: 800, fontSize: 18,
                letterSpacing: '0.12em', textTransform: 'uppercase',
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
                border: 'none', background: '#050510',
              }}
            />
          ) : (
            <div style={{
              position: 'absolute', inset: 0,
              background: 'rgba(13,13,31,0.95)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 16,
            }}>
              <div style={{
                width: 72, height: 72, borderRadius: '50%',
                background: 'linear-gradient(135deg, #0066FF, #00D4FF)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 26, color: '#fff',
                boxShadow: '0 0 40px rgba(0,102,255,0.6)',
              }}>▶</div>
              <span style={{ color: '#8892B0', fontSize: 13 }}>Cargando video...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
