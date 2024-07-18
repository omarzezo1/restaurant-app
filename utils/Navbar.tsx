"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Logo } from '@/images/imgs'
import { Close, Menu, MenuMobile } from '@/images/icons'
import {navLinks} from '@/constants/index'
import Button from './Button'
import { useState } from 'react'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className='w-full absolute z-10 xl:top-10 lg:left-0 max-xl:bg-black'>
      <div className='lg:container w-full lg:px-6 px-3 py-3 flex items-center'>
        <div className='lg:w-1/4'>
          <Image width={150} height={60} src={Logo} alt="logo" className='object-fill'/>
        </div>
        <div className='xl:flex flex-1 hidden'>
          <ul className='flex items-center gap-20 w-1/2'>
            {
              navLinks.map((link, index)=>(
                <li key={index} className='relative'>
                  <Link href={link.path} className='text-slate-200 font-Josefin text-lg hover:text-red font-semibold transation duration-500'>{link.name}</Link>
                </li>
              ))
            }
          </ul>
          <div className='flex w-1/3 ml-auto justify-between items-center'>
            <div className='flex items-center cursor-pointer'>
              <h4 className='relative mr-3 font-Josefin text-lg text-slate-200'>Menu</h4>
              <Image width={40} height={30} src={Menu} alt='menu'/>
            </div>
            <Button label={"Book A Table +"} bg={true} border={false} subscribe={false}/>
          </div>
        </div>
        <div className='w-fit ml-auto xl:hidden'>
          <Image width={50} height={50} src={MenuMobile} alt='menu' onClick={()=> setShowMenu(true)}/>
        </div>
      </div>
      <div className={`fixed right-0 top-0 z-50 w-full h-screen bg-black flex flex-col gap-5 items-center justify-start pt-10 ${showMenu ? "mr-0" : "mr-[-100%]"} duration-300`}>
        <Image width={20} height={20} src={Close} alt='close' onClick={()=> setShowMenu(false)}/>
        <Image width={150} height={50} src={Logo} alt='logo' className='w-[150px] h-[80px] mt-10'/>
        <ul className='flex flex-col items-center gap-5'>
          {
            navLinks.map(link=>(
              <li className='text-slate-100 text-xl pb-2 border-b border-borderColor font-Josefin'>
              <Link href={link.path}>{link.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar