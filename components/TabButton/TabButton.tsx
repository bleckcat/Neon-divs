import React from "react"

interface TabButtonProps {
  buttonText: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const TabButton = ({ buttonText, onClick }: TabButtonProps) => {
  return (
    <button
      className="transition-all p-2 w-40 grow font-bold border-b-2 border-transparent duration-500 hover:border-b-2 hover:border-amber-500/50 hover:shadow-[inset_rgba(245,158,11,0.5)_0px_-7px_9px_-8px] active:border-amber-500/80 active:shadow-[inset_rgba(245,158,11,0.8)_0px_-7px_9px_-8px]"
      onClick={onClick}
    >
      {buttonText}
    </button>
  )
}

export default TabButton
