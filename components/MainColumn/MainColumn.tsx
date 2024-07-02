import React from "react"
import CreatePost from "./CreatePost"
import GlowingContainer from "../GlowingContainer"

const MainColumn = () => {
  return (
    <div className={`w-[720px] mx-8`}>
      <GlowingContainer>
        <div className="flex justify-around border border-transparent border-b-amber-400/50">
          <button className="p-2 w-40 font-bold border border-transparent border-b-2 border-b-amber-500">
            Aba 1
          </button>
          <button className="p-2 w-40 font-bold">Aba 2</button>
        </div>
        <div className="px-4 border border-transparent border-b-amber-400/50">
          <div className={`mb-4`}>
            <CreatePost />
          </div>
        </div>
        <div className={``}>Feed</div>
      </GlowingContainer>
    </div>
  )
}

export default MainColumn
