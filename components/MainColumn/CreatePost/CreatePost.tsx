import React from "react"

interface UserInputAttr {
  text: FormDataEntryValue | null
  images?: FormDataEntryValue | null
  tags?: FormDataEntryValue | null
  timeStamp?: number
}

const CreatePost = () => {
  async function createInvoice(formData: FormData) {
    "use server"

    const rawFormData: UserInputAttr = {
      text: formData.get("postText"),
      images: formData.get("images"),
      tags: formData.get("tags"),
      timeStamp: Date.now()
    }

    console.log(rawFormData)
  }

  return (
    <form action={createInvoice} className="m-2">
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
          <input
            name="tags"
            type="text"
            className="p-2 bg-zinc-800 text-zinc-400 rounded-full w-fit cursor-pointer"
            readOnly
            value="#newTag"
          />
          <input
            name="tags"
            type="text"
            className="p-2 bg-zinc-800 text-zinc-400 rounded-full w-fit cursor-pointer"
            readOnly
            value="#newTag"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-zinc-950 transition-all bg-amber-500 hover:bg-amber-600 rounded-full"
        >
          Enviar
        </button>
      </div>
    </form>
  )
}

export default CreatePost
