import Image from 'next/image'
import Link from 'next/link'
import { Logo } from '@/images/imgs'
import { Menu, MenuMobile } from '@/images/icons'
import {navLinks} from '@/constants/index'
import Button from './Button'

const Navbar = () => {
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
                  <Link href={link.path} className='text-slate-200 font-Josefin text-lg hover:text-red font-semibold transation duration-500 after:nav-arrow pr-6'>{link.name}</Link>
                </li>
              ))
            }
          </ul>
          <div className='flex w-1/3 ml-auto justify-between items-center'>
            <div className='flex items-center cursor-pointer'>
              <h4 className='relative mr-3 font-Josefin text-lg text-slate-200'>Menu</h4>
              <Image width={40} height={30} src={Menu} alt='menu'/>
            </div>
            <Button label={"Book A Table +"} bg={true} border={false}/>
          </div>
        </div>
        <div className='w-fit ml-auto xl:hidden'>
          <Image width={50} height={50} src={MenuMobile} alt='menu'/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar