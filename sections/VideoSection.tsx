import { Play } from '@/images/icons'
import { VideoImg } from '@/images/imgs'
import Image from 'next/image'

const VideoSection = () => {
  return (
    <section className='relative w-full h-[750px] mt-40'>
        <Image src={VideoImg} alt='video-img' className='size-full absolute z-0 object-cover'/>
        <div className='size-full bg-[rgba(22,22,22,0.6)] absolute z-1'>
            <div className='size-40 rounded-full border border-slate-400 flex justify-center items-center center cursor-pointer'>
                <Image width={20} height={20} src={Play} alt='play'/>
            </div>
        </div>
    </section>
  )
}

export default VideoSection