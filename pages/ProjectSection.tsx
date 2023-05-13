import { useState, useEffect } from "react"
import { Project } from "@prisma/client";
import { StaticImageData } from "next/image";
import axios from "axios";
import hairShop from '@/public/hairShop.png';
import rock from '@/public/rock.png';
import myWeb from '@/public/myWeb.png';
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
    <div id="project" className="bg-white rounded-2xl shadow-lg py-[30px] pl-[30px] my-12">
      <h2 className="text-5xl font-extrabold mb-6">Projects</h2>
      <h3 className="text-xl text-deepGray">제가 한 프로젝트들을 보여드리겠습니다 프로젝트 설명 프로젝트 설명</h3>

      <div className="h-[640px] pt-20 flex snap-mandatory snap-x overflow-x-scroll scrollbar-hide">
        {projectBoxes} 
      </div>
    </div>
  )
}
