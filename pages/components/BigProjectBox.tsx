import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@prisma/client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectDscr from "@/components/ProjectDscr";


interface IBigProjectBox{
  currentId : number;
  infos : Project;
}

const images = [
  "https://placekitten.com/600/300",
  "https://placekitten.com/500/300",
  "https://placekitten.com/400/300",
  "https://placekitten.com/300/300",
  "https://placekitten.com/200/300",
];

export default function BigProjectBox({currentId, infos}:IBigProjectBox) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const purpleLine = "relative right-[17px] min-w-[130px] h-fit font-semibold border-purple border-l-[2px] pl-4 mr-4"

  console.log('infos:',infos);

  return (
    <motion.div className="relative h-[90%] w-[60%] p-8 rounded-2xl bg-white overflow-y-scroll" layoutId={currentId+""} onClick={(e) => e.stopPropagation()}>
      <div className="max-w-screen-sm m-auto mb-10">
        <Slider {...settings}>
          {images.map((image) => (
            <div key={image} className="ml-[10px] h-[300px]">
              <Image src={image} alt="kitten" width={600} height={350}  />
            </div>
          ))}
        </Slider>
      </div>

      <div>
        <div className="text-center text-[26px] font-medium mb-6">{infos.title}</div>

        <div className="border-l-[1px] border-LightGray border-dashed pl-4 space-y-5">
          <ProjectDscr title="기간" dscr={`${infos.period} (${infos.sort})`} />

          <ProjectDscr title="사용기술" dscr={`${infos.skill} ${infos.library ? `(라이브러리: ${infos.library})` : null}`} />

          <ProjectDscr title="github" dscr={infos.github} />

          <ProjectDscr title="url" dscr={infos.url} />

          {infos.team && <ProjectDscr title="팀구성" dscr={infos.team} />}

          <ProjectDscr title="프로젝트 소개" dscr={infos.projectDscr} />
          
          {infos.myRole && <ProjectDscr title="나의 기여" dscr={infos.myRole} />}

          <ProjectDscr title="구현기능 소개" dscr={infos.featureDscr} />

          {infos.notes && <ProjectDscr title="참고사항" dscr={infos.notes} />}         
        </div>
      </div>

    </motion.div>
  ) 
  
}