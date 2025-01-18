'use client'

import { useState, useEffect } from 'react'

export default function EnhancedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateCursorStyle = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer')
    }

    window.addEventListener('mousemove', updateCursorPosition)
    window.addEventListener('mouseover', updateCursorStyle)

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition)
      window.removeEventListener('mouseover', updateCursorStyle)
    }
  }, [])

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        <div className="w-4 h-4 bg-white rounded-full opacity-50" />
      </div>
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-300 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        <div className="w-8 h-8 border-2 border-white rounded-full" />
      </div>
    </>
  )
}

