import React from "react"
import Image from "next/image"
import commonStyles from "@/styles/commonStyles.module.css"
import Link from "next/link"
import GlowingContainer from "../GlowingContainer"

const SideNav = () => {
  return (
    <GlowingContainer className="border-b-2 border-r-2 border-l-2 border-white/5">
      <nav className={`w-64 p-4`}>
        <div className="flex">
          <Image
            src={
              "https://plus.unsplash.com/premium_photo-1708110921381-5da0d7eb2e0f?q=40&w=112&h=112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="Avatar"
            width={52}
            height={52}
            className={`${commonStyles["cool-border"]} p-1 rounded-full h-fit`}
          />
          <div className="px-4 flex flex-col">
            <p className="leading-none">Nome do usuario</p>
            <small className="text-zinc-500">subtitulo</small>
            <Link
              href="#"
              className="text-amber-700 leading-none hover:text-amber-600 transition-all"
            >
              Editar perfil
            </Link>
          </div>
        </div>
      </nav>
    </GlowingContainer>
  )
}

export default SideNav
