"use client"
import React, { MouseEvent, useState } from "react"
import styles from "./glowingConteiner.module.css"
interface Props {
  children: React.ReactNode
}

const GlowingContainer: React.FC<Props> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [renderElementCopy, setRenderElementCopy] = useState(false)
  const [mouseNearCenter, setMouseNearCenter] = useState(0)

  const handleMouseMove = (event: MouseEvent) => {
    let centerY, centerX
    if (event.nativeEvent.layerY < event.currentTarget.clientHeight / 2) {
      centerY =
        (event.nativeEvent.layerY / event.currentTarget.clientHeight) * 100
    } else {
      centerY =
        ((event.nativeEvent.layerY - event.currentTarget.clientHeight) /
          event.currentTarget.clientHeight) *
        100
      centerY *= -1
    }
    if (event.nativeEvent.layerX < event.currentTarget.clientWidth / 2) {
      centerX =
        (event.nativeEvent.layerX / event.currentTarget.clientWidth) * 100
    } else {
      centerX =
        ((event.nativeEvent.layerX - event.currentTarget.clientWidth) /
          event.currentTarget.clientWidth) *
        100

      centerX *= -1
    }

    setMouseNearCenter(
      Math.min(Math.max(Math.round((centerX + centerY) / 2), 20), 50)
    )

    setRenderElementCopy(true)
    setMousePosition({
      x: event.nativeEvent.layerX,
      y: event.nativeEvent.layerY
    })
  }

  const handleMouseLeave = () => {
    setRenderElementCopy(false)
  }

  return (
    <div
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`group transition-all bg-zinc-900/60 border-2 border-white/5 rounded-md p-4 shadow-lg shadow-black/80`}
      >
        {children}
      </div>
      {renderElementCopy && (
        <div
          className={`${styles["glow-overlay"]}`}
          style={{
            mask: `radial-gradient(15rem circle at ${mousePosition.x}px ${mousePosition.y}px, rgb(245 158 11) 1%, transparent ${mouseNearCenter}%)`
          }}
        >
          <div
            className={`transition-all bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-2 border-amber-500 rounded-md p-4 shadow-inner shadow-amber-500 text-white`}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

export default GlowingContainer
