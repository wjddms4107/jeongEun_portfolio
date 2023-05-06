import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@prisma/client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const purpleLine = "w-[120px] h-fit relative right-[17px] font-semibold border-purple border-l-[2px] pl-4 mr-4"

  return (
    <motion.div className="relative h-[90%] p-8 rounded-2xl bg-white overflow-y-scroll" layoutId={currentId+""} onClick={(e) => e.stopPropagation()}>
      <div className="max-w-screen-sm m-auto mb-14">
        <Slider {...settings}>
          {images.map((image) => (
            <div key={image} className="ml-[70px] h-[250px]">
              <Image src={image} alt="kitten" width={500} height={300}  />
            </div>
          ))}
        </Slider>
      </div>

      <div className="">
        <div className="text-center text-3xl font-semibold mb-6">{infos.title}</div>

        <div className="border-l border-middleGray100 border-dashed pl-4">
          <div className="flex mb-[35px] text-lg" >
            <div className={purpleLine}>기간</div>
            <div>
              {infos.period} ({infos.sort})
            </div>
          </div>

          <div className="flex mb-[35px] text-lg" >
          <div className={purpleLine}>사용기술</div>
            <div>
              {infos.skill}
            </div>
          </div>

          <div className="flex mb-[35px] text-lg" >
            <div className={purpleLine}>프로젝트 소개</div>
            <div>
            {infos.projectDscr}
            </div>
          </div>

          <div className="flex mb-[35px] text-lg" >
            <div className={purpleLine}>구현기능 소개</div>
            <div>
            {infos.featureDscr}
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  ) 
  
}