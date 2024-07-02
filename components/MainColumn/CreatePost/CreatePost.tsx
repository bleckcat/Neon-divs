import Image from "next/image"
import React from "react"
import commonStyles from "@/styles/commonStyles.module.css"

const CreatePost = () => {
  return (
    <form action="api/submitPost" className="m-2">
      <textarea
        aria-label="Criar post"
        name="postText"
        id="postText"
        className={`w-full mt-4 mb-2 h-28`}
        placeholder="Pergunte algo para mim, ou apenas faca um comentario..."
        maxLength={255}
      />
      <div className="flex justify-between">
        <div className="flex gap-2">
          <p className="p-2 bg-zinc-800 text-zinc-400 rounded-full">#Algo</p>
          <p className="p-2 bg-zinc-800 text-zinc-400 rounded-full">#teste</p>
          <p className="p-2 bg-zinc-800 text-zinc-400 rounded-full">#mock</p>
        </div>
        <button
          type="submit"
          className="px-4 py-2 transition-all bg-amber-500 hover:bg-amber-600 rounded-full"
        >
          Enviar
        </button>
      </div>
    </form>
  )
}

export default CreatePost
