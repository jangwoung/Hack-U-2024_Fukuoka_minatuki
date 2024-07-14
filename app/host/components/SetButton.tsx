import React from 'react'

type ButtonProps = {
  text: string
  disabled?: boolean
}

const SetButton = ({ text, disabled = false }: ButtonProps) => {
  return (
    <button
      className="mt-8 rounded bg-white px-4 py-2 font-semibold text-[#0369a1] shadow-lg duration-300 hover:translate-y-1 hover:bg-sky-500 hover:text-white"
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default SetButton
