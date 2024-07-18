import { Vec2 } from '@/images/icons'
import { Logo } from '@/images/imgs'
import Button from '@/utils/Button'
import Image from 'next/image'

const SubSection = () => {
  return (
    <section>
    <div className="pt-32 flex flex-col gap-10">
      <div className="flex flex-col gap-5 items-center max-w-xl mx-auto">
        <Image width={125} height={50} src={Logo} alt="icon" />
        <p className="font-Josefin text-sm md:text-base text-center text-gray-400 px-2">
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vel metus sit amet dolor finibus convallis.
        </p>
      </div>
      <div className="xl:w-11/12 w-full flex justify-center flex-wrap gap-8 mx-auto p-5 lg:pb-14 border-b border-dashed border-borderColor">
      <form className='lg:w-3/4 w-full flex justify-center'>
        <input type='email' name="email" placeholder='Enter your email address' className='text-slate-100 px-7 py-3.5 subscribe w-3/4 font-Josefin'/>
        <Button label={"Subscribe Now +"} bg={true} border={false} subscribe={true}/>
      </form>
      </div>
    </div>
  </section>
  )
}

export default SubSection