import Link from 'next/link';
import { StaticImageData } from "next/image"
import ImgSlide from '@/components/ImgSlide';

interface troubleDscrArray {
  title : string;
  dscr: string;
}

interface IMyRoleDscrProps {
  Roletitle: string;
  RoleUrl : string;
  RoleUrlDscr: string;
  imgArray: StaticImageData[];
  troubleTitle: string;
  troubleDscrArray: troubleDscrArray[];
}

export default function MyRoleDscr({Roletitle, RoleUrl, RoleUrlDscr, imgArray, troubleTitle, troubleDscrArray} : IMyRoleDscrProps){

  const settings = {
    arrows: false,
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
    
      <div className="my-3 lg:w-[1000px]">
        <ImgSlide settings={settings} imgArray={imgArray} alt="mainImg" width={600} height={350} className="m-auto"/> 
      </div>

      <details>
        <summary className='text-[1.2rem] mb-2'>{troubleTitle}</summary>
        <div className='space-y-4'>
          {troubleDscrArray.map(({title, dscr}) => (
            <div className='text-lg'>
              <div className='font-bold mb-1'>📌 {title}</div>
              <div className='text-middleGray300 dark:text-darkMiddleGray200 break-all whitespace-pre-line' >
                {dscr}
                <div className='mt-2'>
                  <code>console.log()</code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </details>
  </div>

  )
}