import { footer } from '@/constants'
import Link from 'next/link'
import React from 'react'

const FooterSection = () => {
  return (
    <footer>
    <div className="pt-32 px-3 flex flex-col gap-10">
      <div className="xl:w-11/12 w-full flex justify-between flex-wrap gap-8 mx-auto p-2 lg:pb-14 border-b border-dashed border-borderColor">
      {
        footer.map(foo=>(
            <div className='w-[260px] flex flex-col gap-5'>
                <h4 className='font-Josefin font-bold text-lg text-slate-100'>{foo.title}</h4>
                <ul className='flex flex-col gap-3'>
                    {
                        foo.links.map(link=>(
                            <li className='font-pacifico text-gray-400 text-base hover:text-red duration-300'>
                                <Link href={link.path}>{link.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        ))
      }
      </div>
      <div className='pb-8 flex justify-center items-center'>
        <p className='text-slate-100 font-Josefin'>Developed by <a href='' className='text-gray-300 hover:text-gray-400 duration-300'>Omar Abd Elaziz</a> &#169; 2024</p>
      </div>
    </div>
  </footer>
  )
}

export default FooterSection