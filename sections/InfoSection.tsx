import { Ab1, Ab2, BgShap } from '@/images/imgs'
import Button from '@/utils/Button'
import Image from 'next/image'



const InfoSection = () => {
  return (
    <section className='pb-28'>
      <div className='xl:container'>
        <div className='relative w-full'>
          <Image className='absolute top-14 z-0' src={BgShap} alt="bg-shap"/>
          <h2 className='xl:text-7xl text-4xl text-slate-100 leading-tight font-Josefin font-semibold xl:pl-52 max-xl:text-center pt-28'>
          <span className='xl:block mb-3'>Certified</span> <span className='xl:block mb-3'>Restfolio</span> <span className='xl:block mb-3'>Restaurant Brand</span> Since 1997
          </h2>
          <div className='xl:px-16 px-4 mt-20 flex max-xl:flex-col justify-between'>
          <Image width={365} height={500} className='w-[356px] h-[500px] object-cover max-xl:w-full relative z-10' src={Ab1} alt='ab-1'/>
          <div className='xl:w-[670px] relative'>
          <div className='flex'>
           <div className='font-Josefin lg:text-md text-base text-gray-300 font-normal lg:font-semibold leading-8 xl:w-[400px] max-xl:mt-14 max-sm:max-w-sm text-wrap flex flex-col gap-7'>
           <p>
            Donec maximus ligula dapibus sem sagittis, eu efficitur tellus malesuada. In hac habitasse platea dictumst. esent consequat mauris nec pulvinar tristique. Fusce laoreet orci euismod tincidunt tincidunt. Nam sit amet consequat massa. Cras condimentum, urna vel commodo volutpat, orci libero placerat dolor, non tincidunt.
            </p>
            <p>
            Donec maximus ligula dapibus sem sagittis, eu efficitur tellus malesuada. In hac habitasse platea. Praesent consequat mauris nec pulvinar.
            </p>
           </div>
            <Image width={260} height={400} src={Ab2} alt='ab-2' className='w-[260px] h-[400px] object-cover absolute right-0 top-[-200px] max-xl:hidden'/>
          </div>
          <div className='mt-14'>
            <Button label={"More About +"} bg={true} border={false}/>
          </div> 
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default InfoSection