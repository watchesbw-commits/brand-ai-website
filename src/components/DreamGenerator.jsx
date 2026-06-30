import { useState, useEffect, useRef } from 'react'
import { useUser, SignInButton, SignOutButton } from '@clerk/clerk-react'

const BACKEND = 'https://dreams-come-true-backend.onrender.com'

const STYLES = [
  { key: 'real',     emoji: '🎬', label: 'Real'     },
  { key: 'anime',    emoji: '🌸', label: 'Anime'    },
  { key: 'fantasy',  emoji: '🧙', label: 'Fantasy'  },
  { key: 'ghibli',   emoji: '🌿', label: 'Ghibli'   },
  { key: 'cyber',    emoji: '⚡', label: 'Cyber'    },
  { key: 'acuarela', emoji: '🎨', label: 'Acuarela' },
  { key: 'pixel',    emoji: '👾', label: 'Pixel'    },
  { key: 'terror',   emoji: '👻', label: 'Terror'   },
]

const css = `
  .dg-wrap { background:#07071a; border-radius:24px; padding:56px 24px; margin:0 auto; max-width:520px; position:relative; }
  .dg-wrap::before { content:''; position:absolute; inset:0; border-radius:24px; background: radial-gradient(ellipse 70% 50% at 15% 10%, rgba(124,58,237,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 85% 90%, rgba(59,130,246,0.1) 0%, transparent 60%); pointer-events:none; }
  .dg-card { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:16px; padding:18px; margin-bottom:12px; position:relative; }
  .dg-label { font-size:11px; font-weight:600; letter-spacing:0.07em; text-transform:uppercase; color:rgba(232,232,244,0.45); margin-bottom:14px; }
  .dg-face-row { display:flex; align-items:center; gap:14px; }
  .dg-circle { width:62px; height:62px; border-radius:50%; flex-shrink:0; background:rgba(124,58,237,0.12); border:2px dashed rgba(124,58,237,0.35); display:flex; align-items:center; justify-content:center; cursor:pointer; transition:all 0.2s; overflow:hidden; }
  .dg-circle:hover { border-color:#a78bfa; background:rgba(124,58,237,0.22); }
  .dg-circle.filled { border:2px solid #7c3aed; cursor:default; }
  .dg-circle img { width:100%; height:100%; object-fit:cover; }
  .dg-face-body { flex:1; }
  .dg-title { font-size:14px; font-weight:500; color:#e8e8f4; margin-bottom:3px; }
  .dg-sub { font-size:12px; color:rgba(232,232,244,0.45); }
  .dg-btn-upload { font-size:12px; font-weight:500; font-family:inherit; background:rgba(124,58,237,0.18); border:1px solid rgba(124,58,237,0.4); border-radius:8px; color:#a78bfa; padding:6px 12px; cursor:pointer; transition:all 0.2s; white-space:nowrap; }
  .dg-btn-upload:hover { background:rgba(124,58,237,0.3); }
  .dg-toggle-row { display:flex; align-items:center; gap:8px; margin-bottom:8px; }
  .dg-toggle { position:relative; width:42px; height:23px; flex-shrink:0; cursor:pointer; display:inline-block; }
  .dg-toggle input { opacity:0; width:0; height:0; position:absolute; }
  .dg-track { position:absolute; inset:0; border-radius:12px; background:rgba(255,255,255,0.1); transition:background 0.22s; }
  .dg-toggle input:checked + .dg-track { background:#7c3aed; }
  .dg-thumb { position:absolute; width:17px; height:17px; border-radius:50%; background:white; top:3px; left:3px; transition:transform 0.22s; pointer-events:none; }
  .dg-toggle input:checked ~ .dg-thumb { transform:translateX(19px); }
  .dg-toggle-lbl { font-size:14px; color:#e8e8f4; cursor:pointer; user-select:none; }
  .dg-change { font-size:12px; color:rgba(232,232,244,0.45); background:none; border:none; cursor:pointer; padding:0; text-decoration:underline; font-family:inherit; transition:color 0.2s; }
  .dg-change:hover { color:#e8e8f4; }
  .dg-ok { display:none; font-size:11px; color:#34d399; align-items:center; gap:4px; margin-top:5px; }
  .dg-ok.show { display:flex; }
  textarea.dg-ta { width:100%; background:transparent; border:none; color:#e8e8f4; font-family:inherit; font-size:15px; line-height:1.6; resize:none; outline:none; min-height:92px; }
  textarea.dg-ta::placeholder { color:rgba(232,232,244,0.35); }
  .dg-count { text-align:right; font-size:11px; color:rgba(232,232,244,0.35); margin-top:6px; }
  .dg-styles { display:grid; grid-template-columns:repeat(4,1fr); gap:7px; }
  .dg-style { background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:10px; padding:10px 4px 8px; text-align:center; cursor:pointer; transition:all 0.18s; color:rgba(232,232,244,0.45); font-size:11px; font-family:inherit; }
  .dg-style:hover { border-color:rgba(124,58,237,0.35); color:#e8e8f4; }
  .dg-style.active { background:rgba(124,58,237,0.18); border-color:#7c3aed; color:#e8e8f4; }
  .dg-style-emoji { font-size:18px; display:block; margin-bottom:4px; }
  .dg-btn-gen { width:100%; padding:15px; background:linear-gradient(135deg,#7c3aed 0%,#5b21b6 100%); border:none; border-radius:16px; color:white; font-size:16px; font-weight:600; font-family:inherit; cursor:pointer; transition:all 0.22s; letter-spacing:-0.2px; margin-bottom:12px; }
  .dg-btn-gen:hover:not(:disabled) { transform:translateY(-1px); box-shadow:0 8px 28px rgba(124,58,237,0.45); }
  .dg-btn-gen:disabled { opacity:0.45; cursor:not-allowed; transform:none; }
  .dg-err { display:none; background:rgba(239,68,68,0.08); border:1px solid rgba(239,68,68,0.2); border-radius:10px; padding:11px 14px; font-size:13px; color:#fca5a5; text-align:center; margin-bottom:12px; }
  .dg-err.show { display:block; }
  .dg-status { display:none; text-align:center; }
  .dg-status.show { display:block; }
  .dg-spinner { width:28px; height:28px; border:2.5px solid rgba(124,58,237,0.2); border-top-color:#7c3aed; border-radius:50%; animation:dg-spin 0.75s linear infinite; margin:0 auto 10px; }
  @keyframes dg-spin { to { transform:rotate(360deg); } }
  .dg-stxt { font-size:13px; color:rgba(232,232,244,0.45); margin-bottom:12px; }
  .dg-dots { display:flex; gap:5px; justify-content:center; }
  .dg-dot { width:6px; height:6px; border-radius:50%; background:rgba(255,255,255,0.12); transition:background 0.3s; }
  .dg-dot.on { background:#a78bfa; }
  .dg-video-card { display:none; }
  .dg-video-card.show { display:block; }
  .dg-video-card video { width:100%; border-radius:12px; display:block; background:#000; }
  .dg-prompt { display:none; margin-top:12px; padding:12px; background:rgba(0,0,0,0.25); border-radius:10px; }
  .dg-prompt.show { display:block; }
  .dg-prompt-tag { font-size:10px; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; color:rgba(167,139,250,0.6); margin-bottom:5px; }
  .dg-prompt-body { font-size:12px; color:rgba(232,232,244,0.65); line-height:1.55; }
  .dg-signin-area { text-align:center; padding:32px 0 12px; }
  .dg-signin-area p { font-size:14px; color:rgba(232,232,244,0.5); margin-bottom:16px; }
  .dg-btn-clerk { background:rgba(124,58,237,0.18); border:1px solid rgba(124,58,237,0.45); border-radius:10px; color:#a78bfa; font-size:14px; font-weight:600; font-family:inherit; padding:10px 24px; cursor:pointer; transition:all 0.2s; }
  .dg-btn-clerk:hover { background:rgba(124,58,237,0.3); }
  .dg-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:28px; }
  .dg-logo { font-size:18px; font-weight:700; color:#e8e8f4; letter-spacing:-0.3px; }
  .dg-logo span { color:#a78bfa; }
  .dg-credits { display:flex; align-items:center; gap:6px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:20px; padding:5px 12px; font-size:13px; color:rgba(232,232,244,0.45); }
  .dg-credits-num { color:#a78bfa; font-weight:600; }
  .dg-btn-out { font-size:12px; color:rgba(232,232,244,0.4); background:none; border:none; cursor:pointer; font-family:inherit; transition:color 0.2s; padding:4px; }
  .dg-btn-out:hover { color:#e8e8f4; }
`

export default function DreamGenerator() {
  const { user, isLoaded, isSignedIn } = useUser()
  const userId = user?.id

  const [photo, setPhoto]             = useState(() => localStorage.getItem('astraPhoto'))
  const [incluirCara, setIncluirCara] = useState(() => localStorage.getItem('astraIncluirCara') === 'true')
  const [elementId, setElementId]     = useState(() => localStorage.getItem('astraElementId'))
  const [uploadOk, setUploadOk]       = useState(() => !!localStorage.getItem('astraElementId'))
  const [style, setStyle]             = useState('real')
  const [text, setText]               = useState('')
  const [busy, setBusy]               = useState(false)
  const [statusMsg, setStatusMsg]     = useState('')
  const [statusStep, setStatusStep]   = useState(0)
  const [videoUrl, setVideoUrl]       = useState(null)
  const [enriched, setEnriched]       = useState('')
  const [error, setError]             = useState('')
  const [credits, setCredits]         = useState(null)
  const fileRef                       = useRef(null)
  const pollRef                       = useRef(null)

  useEffect(() => {
    if (userId) fetchCredits()
  }, [userId])

  useEffect(() => () => { clearInterval(pollRef.current) }, [])

  async function fetchCredits() {
    try {
      const r = await fetch(`${BACKEND}/credits/${userId}`)
      const d = await r.json()
      setCredits(d.credits ?? 0)
    } catch { setCredits(null) }
  }

  function handleFileChange(e) {
    const file = e.target.files[0]
    if (!file) return
    e.target.value = ''
    const reader = new FileReader()
    reader.onload = async (ev) => {
      const base64 = ev.target.result
      setPhoto(base64)
      localStorage.setItem('astraPhoto', base64)
      setElementId(null)
      localStorage.removeItem('astraElementId')
      setUploadOk(false)
      setIncluirCara(true)
      localStorage.setItem('astraIncluirCara', 'true')
      await uploadFace(base64)
    }
    reader.readAsDataURL(file)
  }

  async function uploadFace(base64Img) {
    if (!userId) return null
    try {
      const r = await fetch(`${BACKEND}/api/user/upload-face`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, imageBase64: base64Img }),
      })
      if (!r.ok) throw new Error('upload ' + r.status)
      const d = await r.json()
      setElementId(d.elementId)
      localStorage.setItem('astraElementId', d.elementId)
      setUploadOk(true)
      return d.elementId
    } catch (err) {
      console.warn('[FACE] Upload falló:', err.message)
      return null
    }
  }

  async function generate() {
    if (busy || !text.trim()) return
    setError('')
    setVideoUrl(null)
    setEnriched('')
    setBusy(true)
    setStatusStep(1)
    setStatusMsg('Enriqueciendo tu sueño con IA…')

    try {
      let eid = elementId
      if (incluirCara && photo && !eid) {
        setStatusMsg('Subiendo tu foto…')
        eid = await uploadFace(photo)
      }

      const body = { text: text.trim(), style, userId }
      if (incluirCara && eid) { body.incluirCara = true; body.elementId = eid }

      setStatusStep(2)
      setStatusMsg('Generando tu sueño…')
      const r = await fetch(`${BACKEND}/api/dreams/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      if (r.status === 402) { setError('Sin créditos. Suscríbete para seguir soñando.'); setBusy(false); return }
      if (!r.ok) { const d = await r.json(); throw new Error(d.error || 'Error al generar') }

      const data = await r.json()
      if (data.enrichedPrompt && data.enrichedPrompt !== text) setEnriched(data.enrichedPrompt)

      setStatusStep(3)
      setStatusMsg('Renderizando video…')

      let tries = 0
      pollRef.current = setInterval(async () => {
        if (++tries > 120) { clearInterval(pollRef.current); setError('Tiempo agotado. Intenta de nuevo.'); setBusy(false); return }
        try {
          const sr = await fetch(`${BACKEND}/api/dreams/status`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ operationName: data.operationName }),
          })
          const sd = await sr.json()
          if (sd.done && sd.videoUri) {
            clearInterval(pollRef.current)
            setVideoUrl(sd.videoUri)
            setStatusMsg('')
            setBusy(false)
            fetchCredits()
          }
        } catch { /* retry */ }
      }, 5000)
    } catch (err) {
      setError(err.message || 'Error inesperado.')
      setBusy(false)
    }
  }

  return (
    <>
      <style>{css}</style>
      <section id="astra" style={{ background: '#F9FAFB', paddingTop: 80, paddingBottom: 80 }}>
        <div className="container">
          <div className="section-label-wrap">
            <span className="section-label">✦ Astra — Demo interactiva</span>
          </div>
          <h2 className="section-title">Convierte tu sueño <span className="gradient-text">en video</span></h2>
          <p className="section-sub">Describe tu sueño, elige el estilo y genera un video con IA en segundos</p>

          <div className="dg-wrap">
            {/* Header */}
            <div className="dg-header">
              <div className="dg-logo"><span>✦ </span>Astra</div>
              {isSignedIn && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div className="dg-credits">
                    <span>✦</span>
                    <span className="dg-credits-num">{credits ?? '—'}</span>
                    <span>sueños</span>
                  </div>
                  <SignOutButton>
                    <button className="dg-btn-out" title="Cerrar sesión">↩</button>
                  </SignOutButton>
                </div>
              )}
            </div>

            {/* Auth gate */}
            {!isLoaded || !isSignedIn ? (
              <div className="dg-signin-area">
                <p>Inicia sesión para generar tu sueño en video</p>
                <SignInButton mode="modal">
                  <button className="dg-btn-clerk">Iniciar sesión</button>
                </SignInButton>
              </div>
            ) : (
              <>
                {/* Face section */}
                <div className="dg-card">
                  <div className="dg-label">¿Quieres aparecer en tu sueño?</div>
                  <input
                    ref={fileRef}
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                  />

                  {!photo ? (
                    <div className="dg-face-row">
                      <div className="dg-circle" onClick={() => fileRef.current?.click()}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                          stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8">
                          <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
                          <circle cx="12" cy="13" r="4"/>
                        </svg>
                      </div>
                      <div className="dg-face-body">
                        <div className="dg-title">Sube tu foto</div>
                        <div className="dg-sub">Aparecerás en tu sueño</div>
                      </div>
                      <button className="dg-btn-upload" onClick={() => fileRef.current?.click()}>Subir</button>
                    </div>
                  ) : (
                    <div className="dg-face-row">
                      <div className="dg-circle filled">
                        <img src={photo} alt="Tu foto" />
                      </div>
                      <div className="dg-face-body">
                        <div className="dg-toggle-row">
                          <label className="dg-toggle">
                            <input
                              type="checkbox"
                              checked={incluirCara}
                              onChange={e => {
                                setIncluirCara(e.target.checked)
                                localStorage.setItem('astraIncluirCara', String(e.target.checked))
                              }}
                            />
                            <div className="dg-track" />
                            <div className="dg-thumb" />
                          </label>
                          <span className="dg-toggle-lbl">Aparecer en mi sueño</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <button className="dg-change" onClick={() => fileRef.current?.click()}>Cambiar foto</button>
                          <div className={`dg-ok${uploadOk ? ' show' : ''}`}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                            Lista
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Dream text */}
                <div className="dg-card">
                  <div className="dg-label">Describe tu sueño</div>
                  <textarea
                    className="dg-ta"
                    placeholder="Estaba volando sobre una ciudad de nubes doradas cuando de repente…"
                    maxLength={500}
                    value={text}
                    onChange={e => setText(e.target.value)}
                  />
                  <div className="dg-count">{text.length}/500</div>
                </div>

                {/* Style selector */}
                <div className="dg-card">
                  <div className="dg-label">Estilo visual</div>
                  <div className="dg-styles">
                    {STYLES.map(s => (
                      <button
                        key={s.key}
                        className={`dg-style${style === s.key ? ' active' : ''}`}
                        onClick={() => setStyle(s.key)}
                      >
                        <span className="dg-style-emoji">{s.emoji}</span>
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Generate button */}
                <button className="dg-btn-gen" disabled={busy || !text.trim()} onClick={generate}>
                  {busy ? '✦ Generando…' : '✦ Convertir en video'}
                </button>

                {/* Error */}
                {error && <div className={`dg-err show`}>{error}</div>}

                {/* Status */}
                {busy && (
                  <div className="dg-card dg-status show">
                    <div className="dg-spinner" />
                    <div className="dg-stxt">{statusMsg}</div>
                    <div className="dg-dots">
                      {[1, 2, 3].map(i => (
                        <div key={i} className={`dg-dot${statusStep >= i ? ' on' : ''}`} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Video */}
                {videoUrl && (
                  <div className="dg-card dg-video-card show">
                    <video src={videoUrl} controls playsInline autoPlay muted />
                    {enriched && (
                      <div className="dg-prompt show">
                        <div className="dg-prompt-tag">✦ Visión cinematográfica</div>
                        <div className="dg-prompt-body">{enriched}</div>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
