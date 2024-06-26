import React from "react"
import columnStyles from "@/styles/columnStyles.module.css"

const MainColumn = () => {
  return (
    <div className={`col-span-8 ${columnStyles["first-layer-column"]}`}>A</div>
  )
}

export default MainColumn
