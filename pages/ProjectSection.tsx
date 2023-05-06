import { useState } from "react"
import ProjectBox from "@/components/ProjectBox";
import hairShop from '@/public/hairShop.png';
import rock from '@/public/rock.png';
import myWeb from '@/public/myWeb.png';
import { StaticImageData } from "next/image";

interface Project {
  id: number;
  state:boolean;
  title: string;
  period: string;
  skill: string;
  dscr: string;
  sort: string;
  src: StaticImageData;
  alt:string;
}


export default function ProjectSection() {
  const [projectBoxStates, setProjectBoxStates] = useState<Project[]>([
    {
      id: 1,
      state: true,
      title: "포트폴리오 웹사이트",
      period: "2022.05.01 ~ 현재",
      skill: "next.js, tailwind CSS, prisma",
      sort: "개인프로젝트",
      dscr: "도입하고 싶은 기술을 마음껏 시도하면서 포트폴리오 웹사이트를 제작했습니다.",
      src: myWeb,
      alt: "헤어샵 프로젝트 이미지",
    },
    {
      id: 2,
      state: false,
      title: "실시간 헤어샵 예약 시스템",
      period: "2022.10.21 ~ 2022.10.28",
      dscr: "도입하고 싶은 기술을 마음껏 시도하면서 포트폴리오 웹사이트를 제작했습니다.",
      sort: "개인프로젝트",
      src: hairShop,
      alt: "헤어샵 프로젝트 이미지",
      skill: "react, styled-component, firebase"
    },
    {
      id: 3,
      state: false,
      title: "가위바위보",
      period: "2022.10.08 ~ 2022.10.10",
      dscr: "개인프로젝트",
      sort: "개인프로젝트",
      src: rock,
      alt: "헤어샵 프로젝트 이미지",
      skill: "next.js, tailwind CSS"
    },
    {
      id: 4,
      state: false,
      title: "프로젝트 4",
      period: "2022.03.21 ~ 2022.03.22",
      dscr: "내가 진짜 열심히 한 프로젝트",
      sort: "내가 진짜 열심히 한 프로젝트",
      src: hairShop,
      alt: "헤어샵 프로젝트 이미지",
      skill: "next.js, tailwind CSS"
    },
    {
      id: 5,
      state: false,
      title: "프로젝트 5",
      period: "2022.03.21 ~ 2022.03.22",
      dscr: "내가 진짜 열심히 한 프로젝트",
      sort: "내가 진짜 열심히 한 프로젝트",
      src: hairShop,
      alt: "헤어샵 프로젝트 이미지",
      skill: "next.js, tailwind CSS"
    },
    {
      id: 6,
      state: false,
      title: "프로젝트 6",
      period: "2022.03.21 ~ 2022.03.22",
      dscr: "내가 진짜 열심히 한 프로젝트",
      sort: "내가 진짜 열심히 한 프로젝트",
      src: hairShop,
      alt: "헤어샵 프로젝트 이미지",
      skill: "next.js, tailwind CSS"
    },
    {
      id: 7,
      state: false,
      title: "프로젝트 7",
      period: "2022.03.21 ~ 2022.03.22",
      dscr: "내가 진짜 열심히 한 프로젝트",
      sort: "내가 진짜 열심히 한 프로젝트",
      src: hairShop,
      alt: "헤어샵 프로젝트 이미지",
      skill: "next.js, tailwind CSS"
    },
  ]);


  const handleProjectBoxClick = (index: number) => {
    setProjectBoxStates(projectBoxStates.map((info, i) => ({
      ...info,
      state: i === index
    })));
  };
  
  const projectBoxes = projectBoxStates.map((info) => (
    <ProjectBox
      key={info.id}
      isClicked={info.state}
      infos={info}
      onClick={() => handleProjectBoxClick(info.id - 1)}
      layoutId={info.id}
    />
  ));
  
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
