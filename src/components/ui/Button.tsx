// 'use client';
import React from 'react';


interface ButtonProps {
  onClick: () => void
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center bg-blue-700 w-32 text-white font-weight:500
                font-semibold py-2 px-4 border border-blue-700 rounded-lg ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
