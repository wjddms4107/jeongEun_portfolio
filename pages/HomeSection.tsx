import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTypingAnimation } from "@/libs/client/useTypingAnimation";
import { useCursorBlink } from "@/libs/client/useCursorBlink";
import { variants } from "@/libs/client/utils";
import AboutMe from "@/components/AboutMe";
import PinkBtn from "@/components/PinkBtn";


export default function HomeSection(){
  const texts = ['전체적인 아름다움을 중요시하는', '성취 중독자', '적응력이 뛰어나 협업에 자신있는'];
  const speed = 120;
  const currentText = useTypingAnimation(texts, speed);
  const isCursorVisible = useCursorBlink(300);

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };


  return (
    <>
      <div className="relative flex flex-col items-center justify-between lg:flex-row lg:px-14 2xl:p-0">
        <div className="">
          <h1 className="text-[50px] leading-[1.3] font-semibold text-deepGray dark:text-darkLightGray mb-6">
            {currentText}{" "}
            <span
              className={`mx-1 text-purple dark:text-darkPurple ${
                isCursorVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              |
            </span>
            <br />
            프론트엔드 개발자 노정은입니다.
          </h1>

          <div className="text-base mt-2">
            <div className="group cursor-pointer">
              <div>소개글 전체보기</div>
              <span className="opacity-0 group-hover:opacity-100">
                '전체적인 아름다움을 중요시하는', '성취 중독자', '적응력이
                뛰어나 협업에 자신있는'
              </span>
            </div>
          </div>
        </div>
        <Image
          src="/jeongeun1.jpeg"
          alt="jeongeun"
          width={400}
          height={400}
          className="rounded-2xl shadow-lg mt-12 lg:m-0"
        />
      </div>

      <div className="flex flex-col items-center mt-32 mb-14">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
          className="flex items-center justify-center m-auto mb-6"
        >
          <motion.h2 variants={variants} className="text-5xl font-extrabold">
            About me
          </motion.h2>
          <div>
            <PinkBtn text="이력서 다운로드" />
          </div>
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