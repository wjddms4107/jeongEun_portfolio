import { useState, useEffect } from "react"
import axios from "axios";
import { motion } from "framer-motion";
import { variants } from "@/libs/client/utils";
import { Project } from "@prisma/client";
import ProjectBox from "./components/ProjectBox";

export default function ProjectSection() {
  const [projectBoxStates, setProjectBoxStates] = useState<Project[]>();

  const handleProjectBoxClick = (index: number) => {
    setProjectBoxStates(projectBoxStates?.map((info, i) => ({
      ...info,
      state: i === index
    })));
  };
  
  const projectBoxes = projectBoxStates?.map((info) => (
    <ProjectBox
      key={info.id}
      isClicked={info.state}
      infos={info}
      onClick={() => handleProjectBoxClick(info.id - 1)}
      layoutId={info.id}
    />
  ));

  useEffect(()=>{
    axios.get('/api/project')
  .then(function (response:any) {
    setProjectBoxStates(response.data.data)
  })
  .catch(function (error:any) {
    console.log(error, "project api 연결 에러");
  })
  }
  ,[])
  
  return (
    <motion.div 
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2 }} 
      className="bg-white dark:bg-darkLightGray200 rounded-2xl shadow-lg py-[30px] pl-[30px] my-12 md:w-auto">
      <motion.h2  variants={variants} className="text-5xl font-extrabold mb-6">Projects</motion.h2>
      <h3 className="text-xl text-deepGray dark:text-darkDeepGray">제가 한 프로젝트들을 보여드리겠습니다 프로젝트 설명 프로젝트 설명</h3>

      <div className="h-[640px] pt-20 pb-5 flex snap-mandatory snap-x overflow-x-scroll lg:scrollbar-hide">
        {projectBoxes} 
      </div>
    </motion.div>
  )
}
