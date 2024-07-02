import React from "react"
import CreatePost from "./CreatePost"
import GlowingContainer from "../GlowingContainer"

const MainColumn = () => {
  return (
    <div className={`w-[720px]`}>
      <GlowingContainer className="border-b-2 border-r-2 border-l-2 border-white/5 mx-4 mb-4">
        <div className="flex justify-around">
          <button className="p-2 w-40 font-bold">Aba 1</button>
          <button className="p-2 w-40 font-bold">Aba 2</button>
        </div>
      </GlowingContainer>
      <GlowingContainer className="mx-4 border-2 border-white/5">
        <div className="px-4">
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
