import { useRef, useState, useEffect } from 'react'

export default function PhoneMockup({ src, title = 'Video Brand AI', allowAttr }) {
  const wrapRef = useRef(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setLoaded(true) },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const defaultAllow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 64 }}>
      <div ref={wrapRef} className="phone-mockup" style={{ position: 'relative', width: 280 }}>

        {/* Volume buttons */}
        <div style={{ position: 'absolute', left: -4, top: 88, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ width: 4, height: 30, background: '#1a1a1a', borderRadius: '3px 0 0 3px', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)' }}/>
          <div style={{ width: 4, height: 30, background: '#1a1a1a', borderRadius: '3px 0 0 3px', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)' }}/>
        </div>

        {/* Power button */}
        <div style={{ position: 'absolute', right: -4, top: 120 }}>
          <div style={{ width: 4, height: 50, background: '#1a1a1a', borderRadius: '0 3px 3px 0', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)' }}/>
        </div>

        {/* Phone body */}
        <div style={{
          background: 'linear-gradient(160deg, #1c1c1e 0%, #0d0d0d 100%)',
          borderRadius: 44,
          padding: '14px 10px 20px',
          boxShadow: [
            '0 0 0 1px rgba(255,255,255,0.12)',
            '0 0 0 2px #080808',
            '0 20px 60px rgba(0,102,255,0.3)',
            '0 50px 90px rgba(0,0,0,0.45)',
          ].join(', '),
          position: 'relative',
        }}>

          {/* Dynamic Island */}
          <div style={{
            width: 100, height: 28, background: '#000',
            borderRadius: 20, margin: '0 auto 6px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#1c1c1e', border: '1px solid #2a2a2a' }}/>
            <div style={{ width: 40, height: 10, borderRadius: 5, background: '#080808' }}/>
          </div>

          {/* Screen */}
          <div style={{ borderRadius: 34, overflow: 'hidden', background: '#000', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)' }}>
            <div style={{ position: 'relative', width: '100%', paddingTop: '177.78%' }}>
              {loaded ? (
                <iframe
                  src={src}
                  title={title}
                  allow={allowAttr || defaultAllow}
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', display: 'block' }}
                />
              ) : (
                <div style={{
                  position: 'absolute', inset: 0, background: '#0a0a0a',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(0,102,255,0.3), rgba(0,212,255,0.3))',
                    border: '1px solid rgba(0,212,255,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 20, color: 'rgba(255,255,255,0.5)',
                  }}>▶</div>
                </div>
              )}
            </div>
          </div>

          {/* Home indicator */}
          <div style={{ width: 88, height: 4, background: 'rgba(255,255,255,0.22)', borderRadius: 2, margin: '10px auto 0' }}/>
        </div>
      </div>
    </div>
  )
}
