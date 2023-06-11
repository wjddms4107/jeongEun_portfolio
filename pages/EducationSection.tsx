import { motion } from "framer-motion";
import { variants } from "@/libs/client/utils";
import EducationBox from "@/components/EducationBox";

export default function EducationSection() {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2 }}   
    >
      <motion.h2 variants={variants} id="education" className="text-5xl font-extrabold my-12">Education</motion.h2>

      <div className="flex flex-col w-full">
        <EducationBox period="2022.06 ~ 2022.09" title="위코드 프론트엔드과정 수료" dscr={
          `웹 개발에 필요한 기본적인 CS지식(Database, Modeling, Linux, HTTP 등) 과 Javascript, React 는 물론, \n` +
          `코드 버전 관리를 위한 Git과 개발 협업을 위한 Github 사용법을 학습하였습니다. \n` +
          `또한 두 번의 클론 프로젝트와 한 번의 기업협업을 거치며 Web 서비스에 확실한 이해를 가지게 됐고 \n` +
          `다양한 협업 툴(Slack, Trello, Notion)을 활용하며 올바른 협업 및 소통 방식을 습득할 수 있었습니다.`} 
        />
        <EducationBox isMargin period="2016.03 ~ 2021.08" title="명지대학교 아랍지역학과 졸업" dscr={
          `학점 3.87 \n` +
          `2016 ~ 2017 : 아랍지역학과 응원단 ‘지하드’ \n` +
          `2017 ~ 2018 : 아랍지역학과 학생회 \n` +
          `2018 ~ 2019 : 한국소비자포럼 대외활동 팀화이트, 대웅제약 이지듀 서포터즈 \n` +
          `2019 ~ 2020 : 명지대학교 도서관 자치 위원회, 글로벌버디 \n` + 
          `2020.01 ~ 2020.08 : 이집트 어학연수`
          } 
        />        
      </div>
    </motion.div>
  )
  
}