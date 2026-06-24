import { useRef, useState, useCallback, Children } from 'react'

export default function Carousel({ children, minWidth = 280 }) {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)
  const items = Children.toArray(children)
  const count = items.length

  const updateActive = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const slides = el.querySelectorAll('.carousel-slide')
    if (!slides.length) return
    const containerLeft = el.getBoundingClientRect().left
    let minDist = Infinity
    let closest = 0
    slides.forEach((slide, i) => {
      const dist = Math.abs(slide.getBoundingClientRect().left - containerLeft)
      if (dist < minDist) { minDist = dist; closest = i }
    })
    setActive(closest)
  }, [])

  const scrollTo = useCallback((idx) => {
    const el = trackRef.current
    if (!el) return
    const slides = el.querySelectorAll('.carousel-slide')
    if (slides[idx]) {
      slides[idx].scrollIntoView({ inline: 'start', behavior: 'smooth', block: 'nearest' })
      setActive(idx)
    }
  }, [])

  return (
    <div className="carousel-outer">
      <div
        ref={trackRef}
        className="carousel-track"
        style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${minWidth}px, 1fr))` }}
        onScroll={updateActive}
      >
        {items.map((child, i) => (
          <div key={i} className="carousel-slide">
            {child}
          </div>
        ))}
      </div>

      <div className="carousel-dots">
        <button
          className="carousel-arrow"
          onClick={() => scrollTo(Math.max(0, active - 1))}
          disabled={active === 0}
          aria-label="Anterior"
        >‹</button>

        {items.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === active ? ' active' : ''}`}
            onClick={() => scrollTo(i)}
            aria-label={`Ir a tarjeta ${i + 1}`}
          />
        ))}

        <button
          className="carousel-arrow"
          onClick={() => scrollTo(Math.min(count - 1, active + 1))}
          disabled={active === count - 1}
          aria-label="Siguiente"
        >›</button>
      </div>
    </div>
  )
}
