import React from 'react'

type ButtonProps = {
  text: string
  onClick: () => void
  disabled?: boolean
  color?: 'main-blue' | 'deep-blue' | 'light-blue' | 'dark-blue' | 'button-white'
}

const Button = ({ text, onClick, disabled = false, color = 'main-blue' }: ButtonProps) => {
  const baseClasses =
    'px-4 py-2 rounded-md text-white font-bold focus:outline-none focus:ring-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 ease-in-out'

  const colorClasses = {
    'main-blue': 'bg-main-blue hover:bg-custom_light-blue focus:ring-main-blue',
    'deep-blue': 'bg-deep-blue hover:bg-custom_dark-blue focus:ring-deep-blue',
    'light-blue': 'bg-custom_light-blue hover:bg-main-blue focus:ring-light-blue',
    'dark-blue': 'bg-custom_dark-blue hover:bg-main-blue focus:ring-dark-blue',
    'button-white': 'bg-white hover:bg-custom_light-blue focus:ring-dark-blue',
  }

  return (
    <button
      className={`${baseClasses} ${colorClasses[color]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
