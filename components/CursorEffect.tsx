'use client'

import { useEffect, useState } from 'react'

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateCursorPosition)

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition)
    }
  }, [])

  return (
    <div
      className="cursor-effect"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    />
  )
}

