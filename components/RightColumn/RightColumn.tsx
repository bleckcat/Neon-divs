import React from "react"
import GlowingContainer from "../GlowingContainer"

const RightColumn = () => {
  return (
    <GlowingContainer className="border-b-2 border-r-2 border-l-2 border-white/5">
      <div className={`self-stretch w-64 p-4`}>Right</div>
    </GlowingContainer>
  )
}

export default RightColumn
