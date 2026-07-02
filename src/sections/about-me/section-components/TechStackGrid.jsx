import { useCallback, useMemo, useRef, useState } from 'react'
import { skills } from '../../../data/skills'

const COLUMN_COUNT = 7
const MAX_PAN = 40

function getIconSrc(skill) {
  return (
    skill.iconSrc ??
    `https://cdn.simpleicons.org/${skill.slug}/${(skill.iconColor ?? skill.color).replace('#', '')}`
  )
}

function buildColumns(items, count) {
  return Array.from({ length: count }, (_, col) => {
    const column = []
    for (let r = 0; r < 4; r++) {
      for (let i = 0; i < items.length; i++) {
        column.push(items[(col + i) % items.length])
      }
    }
    return column
  })
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

function TechStackTile({ skill }) {
  return (
    <div className="tech-stack-tile">
      <img src={getIconSrc(skill)} alt="" className="tech-stack-tile__icon" draggable={false} />
      <span className="tech-stack-tile__name">{skill.name}</span>
    </div>
  )
}

export default function TechStackGrid() {
  const columns = useMemo(() => buildColumns(skills, COLUMN_COUNT), [])
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const [hovered, setHovered] = useState(false)
  const dragRef = useRef(null)

  const handlePointerDown = useCallback(
    (event) => {
      if (!hovered) return
      event.currentTarget.setPointerCapture(event.pointerId)
      dragRef.current = {
        startX: event.clientX,
        startY: event.clientY,
        panX: pan.x,
        panY: pan.y,
      }
      setDragging(true)
    },
    [hovered, pan.x, pan.y]
  )

  const handlePointerMove = useCallback((event) => {
    if (!dragRef.current) return
    const dx = event.clientX - dragRef.current.startX
    const dy = event.clientY - dragRef.current.startY
    setPan({
      x: clamp(dragRef.current.panX + dx, -MAX_PAN, MAX_PAN),
      y: clamp(dragRef.current.panY + dy, -MAX_PAN, MAX_PAN),
    })
  }, [])

  const endDrag = useCallback(() => {
    dragRef.current = null
    setDragging(false)
  }, [])

  const handlePointerLeave = useCallback(() => {
    setHovered(false)
    endDrag()
    setPan({ x: 0, y: 0 })
  }, [endDrag])

  return (
    <div
      className={`tech-stack-grid${dragging ? ' tech-stack-grid--dragging' : ''}${hovered ? ' tech-stack-grid--hovered' : ''}`}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <div className="tech-stack-grid__glow" aria-hidden="true" />
      <div className="tech-stack-grid__filter" aria-hidden="true" />

      <div className="tech-stack-grid__scene">
        <div
          className="tech-stack-grid__plane"
          style={{
            '--pan-x': `${pan.x}px`,
            '--pan-y': `${pan.y}px`,
          }}
        >
          {columns.map((col, colIdx) => (
            <div
              key={colIdx}
              className={`tech-stack-grid__column tech-stack-grid__column--${colIdx % 2 === 0 ? 'down' : 'up'}`}
              style={{
                '--col-duration': `${58 + colIdx * 4}s`,
                '--col-delay': `-${colIdx * 8}s`,
                '--col-offset': `${colIdx * 12}px`,
              }}
            >
              <div className="tech-stack-grid__track">
                {[...col, ...col].map((skill, i) => (
                  <TechStackTile key={`${colIdx}-${skill.name}-${i}`} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="tech-stack-grid__fade tech-stack-grid__fade--top" aria-hidden="true" />
      <div className="tech-stack-grid__fade tech-stack-grid__fade--bottom" aria-hidden="true" />
      <div className="tech-stack-grid__fade tech-stack-grid__fade--left" aria-hidden="true" />
      <div className="tech-stack-grid__fade tech-stack-grid__fade--right" aria-hidden="true" />
    </div>
  )
}
