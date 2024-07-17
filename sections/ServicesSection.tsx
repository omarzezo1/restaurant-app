"use client"
import ServicesCard from '@/components/ServicesCard'
import { services } from '@/constants'
import { SerBg2 } from '@/images/imgs'
import Image from 'next/image'
import React, { useState } from 'react'

const ServicesSection = () => {
    const [mainBg, setMainBg] = useState(SerBg2)

    const getBg = (bg:any)=> setMainBg(bg)

  return (
    <section className='relative'>
        <Image src={mainBg} alt='main-bg' className={`absolute top-0 left-0 z-0 size-full object-cover`}/>
        <div className='relative size-full top-0 left-0 z-10 bg-overlay'>
            <div className='flex flex-1 flex-wrap h-full container px-16'>
                {
                    services.map((service, index)=>(
                        <ServicesCard key={index} service={service} getBg={getBg}/>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default ServicesSection