import Link from 'next/link';
import { StaticImageData } from "next/image"
import ImgSlide from '@/components/ImgSlide';

interface troubleDscrArray {
  title : string;
  dscr: string;
  code?: string;
}

interface IMyRoleDscrProps {
  Roletitle: string;
  RoleUrl : string;
  RoleUrlDscr: string;
  imgArray: StaticImageData[];
  troubleTitle: string;
  troubleDscrArray: troubleDscrArray[];
  isBorder?: boolean
}

export default function MyRoleDscr({Roletitle, RoleUrl, RoleUrlDscr, imgArray, troubleTitle, troubleDscrArray, isBorder = true} : IMyRoleDscrProps){

  const settings = {
    arrows: false,
    dot: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return(
    <div className="flex flex-col mb-5 pb-5">
      <div className='flex flex-grow items-center space-x-3'>
        <h5 className='text-xl font-extrabold relative -top-[3px]'>{Roletitle}</h5>
        <Link href={RoleUrl} target="_blank" className='w-[fit-content]'>📣 {RoleUrlDscr}</Link>
      </div>
    
      <div className="my-3 overflow-y-hidden lg:w-[1000px]">
        <ImgSlide settings={settings} imgArray={imgArray} alt="mainImg" width={600} className="m-auto"/> 
      </div>

      <details className='mb-5'>
        <summary className='text-[1.2rem] mb-2 cursor-pointer'>{troubleTitle}</summary>
        <div className='space-y-4'>
          {troubleDscrArray.map(({title, dscr, code}) => (
            <div className='text-lg' key={title}>
              <div className='font-bold mb-1'>📌 {title}</div>
              <div className='text-middleGray300 dark:text-darkMiddleGray200 break-all whitespace-pre-line' >
                {dscr}
                {code && 
                  <div className='mt-2'>
                    <code>{code}</code>
                  </div>
                }
                
              </div>
            </div>
          ))}
        </div>
      </details>

      {isBorder && <div className='w-full h-[1px] border-t-[1px] border-middleGray100 border-dashed dark:border-darkMiddleGray100 relative right-[22px]'  />}
  </div>
  )
}