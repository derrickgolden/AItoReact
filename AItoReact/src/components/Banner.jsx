
import { topLeftImg, bottomRightImg, yogaLay } from '../assets'

export const Banners = () =>(
    <>
        <div className='absolute top-0 left-0 h-[86%] w-1/2 overflow-hidden'>
        <img src={topLeftImg} alt="banner" 
        className='object-contain object-left-top h-full w-full'/>
      </div>
      <div className='absolute bottom-[13%] w-[80%] left-[4%]'>
        <img src={yogaLay} alt="Lady doing yoga" 
        className='object-contain object-left-top h-full w-full'
        />
      </div>
      <div className='absolute bottom-[13%] sm:bottom-0 right-0 w-[28%]'>
        <img src={bottomRightImg} alt="banner" 
        className='object-contain object-right-bottom '/>
      </div>
    </>
)