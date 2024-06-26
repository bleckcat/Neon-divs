import React from "react"
import columnStyles from "@/styles/columnStyles.module.css"

const LeftColumn = () => {
  return (
    <div className={`col-span-2 ${columnStyles["first-layer-column"]}`}>
      Left
    </div>
  )
}

export default LeftColumn
