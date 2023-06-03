import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTypingAnimation } from "@/libs/client/useTypingAnimation";
import { useCursorBlink } from "@/libs/client/useCursorBlink";
import { variants } from "@/libs/client/utils";
import AboutMe from "@/components/AboutMe";
import PinkBtn from "@/components/PinkBtn";
import jeongeun2 from '@/public/jeongeun.jpg';
import jeongeun1 from '@/public/jeongeun1.jpg';


export default function HomeSection(){
  const texts = ['전체적인 아름다움을 중요시하는', '성취 중독자', '적응력이 뛰어나 협업에 자신있는', '나만의 개발사전을 만든'];
  const speed = 120;
  const currentText = useTypingAnimation(texts, speed);
  const isCursorVisible = useCursorBlink(300);

  return (
    <>
      <div className="relative flex flex-col items-center justify-between lg:flex-row">
        <div className="w-[max-content] items-center text-[50px] leading-[1.3] font-semibold text-deepGray m-auto pt-10 lg:pt-0 lg:w-3/5 dark:text-darkLightGray ">
          <h1>
            {currentText} <span className={`mx-1 text-purple dark:text-darkPurple ${isCursorVisible ? 'opacity-100' : 'opacity-0'}`}>|</span>
            <br />
            프론트엔드 개발자 노정은입니다.
          </h1>

          <div className="text-base mt-2">
            <div className="group cursor-pointer">
              <div>소개글 전체보기</div>
              <span className="opacity-0 group-hover:opacity-100" >'전체적인 아름다움을 중요시하는', '성취 중독자', '적응력이 뛰어나 협업에 자신있는', '나만의 개발사전을 만든'</span>
            </div>  
          </div>

          <div className="relative text-base cursor-pointer mt-2 lg:absolute">
              <details>
                <summary>소개글 더 자세히보기</summary>
                <div className="grid grid-cols-2 gap-3 max-h-[200px] w-[800px] mt-2 space-y-2 overflow-y-scroll">
                  <div className="pl-2 border-l border-lightGray200 dark:border-[#595959] border-dashed">
                    <div className="relative right-[9px] border-l border-purple pl-2">1. '전체적인 아름다움을 중요시하는'</div>
                    <div>UI 뿐만 아니라 전체적인 개발에 대한 아름다움을 중요시하며, 변수 이름부터 모듈화, import문, 1px까지 세심한 작업을 통해 더욱 생산적이고 섬세한 개발을 지향합니다.</div>
                  </div>

                  <div className="pl-2 border-l border-lightGray200 dark:border-[#595959] border-dashed">
                    <div className="relative right-[9px] border-l border-purple pl-2">2. '성취 중독자'</div>
                    <div>도전을 즐기며 안주하지 않고 역량을 향상시키기 위해 노력합니다. 이로 이루어낸 성취감은 저를 더 큰 성장으로 이끌고 있습니다. 이러한 성격은 개발자로서의 역량을 한층 높이는 중요한 역할을 한다고 생각합니다.</div>
                  </div>

                  <div className="pl-2 border-l border-lightGray200 dark:border-[#595959] border-dashed">
                    <div className="relative right-[9px] border-l border-purple pl-2">3. '적응력이 뛰어나 협업에 자신있는'</div>
                    <div>대학 시절부터 응원단과 학생회, 이집트 유학 등 다양한 활동을 통해 다양한 상황에 적응했으며, 부트캠프에서는 세 가지 팀 프로젝트를 성공적으로 수행했고 현재는 팀원들과 소통하며 개발하는 것을 즐기며 작업하고 있습니다.</div>
                  </div>

                  <div className="pl-2 border-l border-lightGray200 dark:border-[#595959] border-dashed">
                    <div className="relative right-[9px] border-l border-purple pl-2">4. '나만의 개발사전을 만든'</div>
                    <div>일과 개인 공부에서도 노션을 이용하여 체계적으로 정리하는 습관이 있습니다. 즉, 문서화에 능숙하여 더 효율적이고 체계적으로 개발할 수 있습니다.</div>
                  </div>
                </div>           
              </details>
            </div> 
        </div>
        <Image src={jeongeun1} alt="jeongeun" width={500} className="rounded-2xl shadow-lg mt-12 lg:w-2/5 lg:ml-10 lg:mt-0" />
      </div>

      <div className="flex flex-col items-center mt-32 mb-14">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
          className="flex items-center justify-center m-auto mb-6"
        >
          <motion.h2 variants={variants} className="text-5xl font-extrabold ">About me</motion.h2>
          <div><PinkBtn text="이력서 다운로드"/></div>
          
        </motion.div>

        <div className="w-screen flex flex-wrap gap-y-6 justify-center space-x-8 text-deepGray dark:text-darkDeepGray lg:w-[1150px]">
          <AboutMe about="이름" me="노정은" />
          <AboutMe about="연락처" me="010 7704 4107" />
          <AboutMe about="나이" me="97.03.15" />
          <AboutMe about="학력" me="명지대학교 아랍지역학과" />
          <AboutMe about="이메일" me="wjddms4107@gmail.com" />
          <AboutMe about="블로그" me="https://jeongeuni.tistory.com/" />
          <AboutMe about="깃허브" me="https://github.com/wjddms4107" />
        </div>
      </div>
    </>
  );
}