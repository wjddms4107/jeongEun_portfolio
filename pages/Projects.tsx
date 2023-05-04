import ProjectBox from "@/components/ProjectBox";
import { cls } from "@/libs/client/utils";
import { useState } from "react"

interface Project {
  id: number;
  state: boolean;
  title: string;
  period: string;
  dscr: string;
}


export default function Projects() {
  const [projectBoxStates, setProjectBoxStates] = useState<Project[]>([
    {
      id: 1,
      state: false,
      title: "프로젝트 1",
      period: "2022.03.21 ~ 2022.03.22",
      dscr: "내가 진짜 열심히 한 프로젝트",
    },
    {
      id: 2,
      state: true,
      title: "프로젝트 2",
      period: "2022.03.21 ~ 2022.03.22",
      dscr: "내가 진짜 열심히 한 프로젝트",
    },
    {
      id: 3,
      state: false,
      title: "프로젝트 3",
      period: "2022.03.21 ~ 2022.03.22",
      dscr: "내가 진짜 열심히 한 프로젝트",
    },
    {
      id: 4,
      state: false,
      title: "프로젝트 3",
      period: "2022.03.21 ~ 2022.03.22",
      dscr: "내가 진짜 열심히 한 프로젝트",
    },
    {
      id: 5,
      state: false,
      title: "프로젝트 3",
      period: "2022.03.21 ~ 2022.03.22",
      dscr: "내가 진짜 열심히 한 프로젝트",
    },
    {
      id: 6,
      state: false,
      title: "프로젝트 3",
      period: "2022.03.21 ~ 2022.03.22",
      dscr: "내가 진짜 열심히 한 프로젝트",
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
    />
  ));
  
  return (
    <div className="bg-white h-[1000px] rounded-2xl shadow-lg py-[30px] pl-[30px]">
      <h2 className="text-5xl font-extrabold mb-6">Projects</h2>
      <h3 className="text-xl text-[#6C6C6C]">제가 한 프로젝트들을 보여드리겠습니다 프로젝트 설명 프로젝트 설명</h3>

      <div className="h-[640px] pt-20 flex snap-mandatory snap-x overflow-x-scroll scrollbar-hide">
        {projectBoxes}
      </div>
    </div>
  )
}
