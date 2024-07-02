import React from "react"
import CreatePost from "./CreatePost"
import GlowingContainer from "../GlowingContainer"
import TabButton from "../TabButton"

const MainColumn = () => {
  return (
    <div className={`w-[720px]`}>
      <GlowingContainer className="border-b-2 border-r-2 border-l-2 border-white/5 mx-4 mb-4 flex justify-around">
        <TabButton buttonText="All Quesstions" />
        <TabButton buttonText="My Studies" />
        <TabButton buttonText="Your Questions" />
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
