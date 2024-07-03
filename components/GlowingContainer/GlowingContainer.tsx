"use client"
import React, { MouseEvent, useRef, useState } from "react"
import styles from "./glowingConteiner.module.css"
interface Props {
  children: React.ReactNode
  className?: React.ComponentProps<"div">["className"]
}

const GlowingContainer: React.FC<Props> = ({ children, className }) => {
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
        className={`${className} group transition-all bg-zinc-900/60 shadow-lg shadow-black/80`}
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
            className={`[&>*.border-b-2]:!border-amber-500 [&>*.border-t-2]:!border-amber-500 [&>*.border-l-2]:!border-amber-500 [&>*.border-r-2]:!border-amber-500 [&>*.border-2]:!border-amber-500 [&>form]:!invisible !border-amber-500 ${className} transition-all bg-gradient-to-r from-amber-500/10 to-orange-500/10 shadow-inner shadow-amber-500 text-white h-full`}
          />
        </div>
      )}
    </div>
  )
}

export default GlowingContainer
