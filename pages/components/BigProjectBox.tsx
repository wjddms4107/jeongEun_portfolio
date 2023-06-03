import Image from "next/image";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Project } from "@prisma/client";
import ImgSlide from "@/components/ImgSlide";
import ProjectSkill from "@/components/ProjectSkill";
import PurpleCheckSvg from "@/components/PurpleCheckSvg";
import PinkBtn from "@/components/PinkBtn";

interface IBigProjectBox{
  currentId : number;
  infos : Project;
}

export default function BigProjectBox({currentId, infos}:IBigProjectBox) {
  const { theme } = useTheme();

  const skills = infos.skill.split(",")
  const projectDscr =  infos.projectDscr.split("+");
  const featureDscr = infos.featureDscr.split("+");
  const troubleeDscr = infos.troubleeDscr.split("+");

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <motion.div className="relative h-[90%] p-12 pt-12 rounded-2xl bg-white dark:bg-[#262626] overflow-y-scroll sm:w-[60%]" layoutId={currentId+""} onClick={(e) => e.stopPropagation()}>
      
      <div className="max-w-screen-sm m-auto mb-16 border-neutral-200 dark:border-darkMiddleGray100 border-8 rounded-2xl">
        <ImgSlide settings={settings} imgArray={infos.src as unknown as string[]} alt="projectImg" width={600} height={350} className="m-auto"/>
      </div>
      
      <div className="flex flex-col items-start">
        <div className="mb-6">
          {/* 프로젝트 제목, 기간, 기술스택 */}
          <h1 className="text-[26px] font-semibold mb-[2px]">{infos.title}</h1>
          <div className="text-middleGray100 dark:text-darkMiddleGray900 mb-3">{`${infos.period} (${infos.sort})`}</div>
          <div className="mb-6 flex flex-wrap gap-y-1">
            {skills.map(item => (
              <ProjectSkill key={item} skill={item} bgColor={theme === 'dark' ? "dark:bg-darkMiddleGray100" : "bg-lightGrayWhite"} />
            ))}
          </div>

          {/* url, github 링크 */}
          <div className="flex flex-col gap-y-1 mb-4">
            <div className="flex flex-row items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mr-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
              <span className="cursor-pointer underline underline-offset-4">{infos.url}</span>
            </div>
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="mr-2">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.75 8.14 6.63 9.55.48.09.65-.21.65-.47v-1.66c-2.69.59-3.26-1.3-3.26-1.3-.44-1.13-1.07-1.43-1.07-1.43-.88-.61.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.34-1.09.63-1.34-2.2-.25-4.52-1.1-4.52-4.9 0-1.08.39-1.97 1.03-2.67-.1-.25-.45-1.26.1-2.63 0 0 .83-.27 2.7 1.02.78-.22 1.62-.33 2.46-.33s1.68.11 2.46.33c1.87-1.29 2.7-1.02 2.7-1.02.55 1.37.2 2.38.1 2.63.64.7 1.03 1.59 1.03 2.67 0 3.81-2.32 4.65-4.54 4.9.36.31.68.91.68 1.84v2.72c0 .26.17.56.66.47C19.25 20.14 22 16.42 22 12c0-5.52-4.48-10-10-10z"/>
              </svg>
              <span className="cursor-pointer underline underline-offset-4">{infos.github}</span>
            </div>
          </div>

          {/* 라이브러리, 팀구성, 나의 기여 */}
          <div className="space-y-1">
            {infos.library && <div>사용한 라이브러리 : <span>{infos.library}</span></div>}
            {infos.team && <div>팀구성 : <span>{infos.team}</span></div>}
            {infos.myRole && <div>나의 기여 : <span>{infos.myRole}</span></div>}
          </div>
        </div>

        {/* 프로젝트 소개 */}
        <div className="mb-10">
          <h2 className="text-[22px] font-bold mb-4">프로젝트 소개</h2>
          <div className="space-y-2 text-deepGray dark:text-darkDeepGray">
            { projectDscr?.map((item: string, i: number) => (
              <div key={i}>{item}</div>
            ))}
          </div>
        </div>

        {/* 개발한 기능 */}
        <div className="mb-10">
          <h2 className="text-[22px] font-bold mb-4">개발한 기능</h2>
          <div className="space-y-1 text-deepGray dark:text-darkDeepGray">
            { featureDscr?.map((item: string, i: number) => (
              <div key={i} className="flex items-start">
                <PurpleCheckSvg />
                <span className="relative -top-[3px]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 트러블 슈팅 */}
        <div>
          <h2 className="text-[22px] font-bold mb-3">
            트러블 슈팅 <PinkBtn text="깃허브 바로가기" url={infos.github} />
          </h2>
          <div className="mb-4">모든 해결과정은 github에 정리해놓았습니다.</div>
          
          <div className="space-y-1 text-deepGray dark:text-darkDeepGray">
          { troubleeDscr?.map((item: string, i: number) => (
              <div key={i} className="flex items-start">
                <PurpleCheckSvg />
                <span className="relative -top-[3px]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </motion.div>
  ) 
  
}