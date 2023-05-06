import Image from "next/image";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IProject } from '@/pages/ProjectSection'

interface IBigProjectBox{
  currentId : number;
  infos : IProject;
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
              메인페이지, 예약페이지, 예약확인 페이지로 구성되어 있고 <br/>
              1인 헤어샵이기에 각 날짜별로 한 시간당 한 손님만 예약 가능하고 예약상황은 실시간으로 반영됩니다.<br/>
              '예약하기" 탭에서 날짜와 시간을 고른 후, 예약자 정보를 입력하면 예약되고 <br/>
              '예약확인" 탭에서 핸드폰번호를 입력하면 예약을 확인할 수 있습니다. <br/><br/>

              웹 페이지는 AWS S3로 배포를 했었지만 요금 부과로 내린 상태입니다. <br/>
              이에 netlify로 다시 배포를 했고 mock data로 대체 구현해놓았습니다. <br/>
              상품상세페이지에 들어가기 위해서는 메인페이지의 LEGO, CHANEL, PATAGONIA를 클릭해주세요! <br/>
            </div>
          </div>

          <div className="flex mb-[35px] text-lg" >
            <div className={purpleLine}>구현기능 소개</div>
            <div>
              🔍  firebase에 프로젝트를 생성하고 vscode에 설치 후 firebase.ts를 세팅하여 실시간으로 데이터를 저장하고 불러오기 <br />

              🔍  Date객체를 이용하여 오늘 시간보다 지나갔으면 예약할 수 없도록 구현 <br />

              🔍  firebase에 저장되어 있는 예약정보를 모두 불러온 후, filter메서드로 선택한 날짜에 해당하는 예약 데이터만 뽑아 깊은복사를 하여 disabled 처리 <br />

              🔍  Outlet 으로 중첩라우팅 <br />

              🔍 라이브러리 타입지정, 객체의 타입만 알 때 타입지정, 배열 안의 배열 타입지정 등 다양하게 타입지정을 해보며 타입스크립트에 더 깊게 감을 잡을 수 있었습니다.
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  ) 
  
}