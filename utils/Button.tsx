import React from 'react'

const Button = ({label, bg, border, subscribe}:{label:any, bg:boolean, border:boolean, subscribe:boolean}) => {
  return (
    <button className={`px-7 py-3.5 ${bg ? 'bg-red':'transparent'} ${border ? 'border-btn':'border-none'} ${subscribe ? "ml-[-80px]": null} font-Josefin text-sm font-bold text-gray-100 rounded-3xl`}>
        {label} 
    </button>
  )
}

export default Button