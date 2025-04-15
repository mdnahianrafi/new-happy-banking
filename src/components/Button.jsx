import React from 'react'

const Button = ({className,children}) => {
  return (
   <button className={`my-2  py-2 rounded-lg bg-[#F7961D] text-base leading-6 font-semibold text-white ${className}`}>{children}</button>
  )
}

export default Button