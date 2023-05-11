import { useState, useEffect } from "react";
import { useTypingAnimation } from "@/libs/client/useTypingAnimation";
import { useCursorBlink } from "@/libs/client/useCursorBlink";
import Link from "next/link";
import AboutMe from "@/components/AboutMe";



export default function HomeSection(){
  const texts = ['이쁘게 개발하는 것을 좋아하는', '적응력이 최고여서 협업에 자신있는', '성취 중독인'];
  const speed = 140;
  const currentText = useTypingAnimation(texts, speed);
  const isCursorVisible = useCursorBlink(300);

  return (
    <>
      <div id="home" className="flex align-middle justify-between">
        <h1 className="w-3/5 items-center text-[50px] leading-[1.3] font-semibold text-deepGray m-auto">
        {currentText}
        <span className={`mx-1 text-purple ${isCursorVisible ? 'opacity-100' : 'opacity-0'}`}>|</span>
          <br />
          프론트엔드 개발자 노정은입니다.
        </h1>
        <div className="w-2/5 bg-white h-[500px] rounded-2xl shadow-lg">
          이미지 둥글게
        </div>
      </div>

      <div className="flex flex-col items-center mt-24 mb-14">
        <h2 className="flex items-center justify-center text-5xl font-extrabold mb-6 text-center">
          <span>About me</span>
          <span className="text-base text-white p-2 ml-4 bg-pink rounded-[4px] cursor-pointer hover:bg-deepPink">
            이력서 다운로드
          </span>
        </h2>

        <div className="flex flex-wrap gap-y-6 justify-center space-x-8 w-[1150px] text-deepGray">
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