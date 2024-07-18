import React from 'react'
import Image from "next/image"

const HeaderIcon = ({icon}:{icon:any}) => {
  return (
    <div key={icon.name} className="size-12">
        <a href={icon.link} className="w-full h-full flex justify-center items-center bg-[rgba(0,0,0,.3)] rounded-full hover:bg-red  transition duration-500">
        <Image width={21} height={21} src={icon.img} alt={icon.name}/>
        </a>
    </div>
  )
}

export default HeaderIcon