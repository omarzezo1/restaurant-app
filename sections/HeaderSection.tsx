import Image from "next/image"
import {bgHeader} from '@/images/imgs/index'
import { socialMediaIcons, HedaerRightIcons } from "@/constants"
import HeaderIcon from "@/components/HeaderIcon"

const HeaderSection = () => {
  return (
    <header className="relative h-[650px] w-full">
      <Image src={bgHeader} alt="bg-header" className="absolute z-0 w-full h-full object-cover"/>
      <div className="relative w-full h-full bg-[rgba(0,0,0,.5)]">
      <div className="max-xl:hidden relative left-0 top-1/3 px-6 flex flex-col items-start gap-5">
        {
          socialMediaIcons.map(icon=>(
            <HeaderIcon icon={icon}/>
          ))
        }
      </div>

      <div className="max-xl:hidden absolute right-0 top-1/3 px-6 flex flex-col items-start gap-5">
        {
          HedaerRightIcons.map(social=>(
            <HeaderIcon icon={social}/>
          ))
        }
      </div>
      <div className="absolute xl:left-32 left-3 bottom-2">
        <p className="md:text-3xl text-xl text-slate-200 text-wrap">
          Food & Resturant Html Theme
        </p>
        <h2 className="font-semibold font-Josefin max-sm:text-[4.5rem] xl:text-[10rem] text-[6rem] text-slate-200">
        Restfolio
        </h2>
      </div>
      </div>
    </header>
  )
}

export default HeaderSection