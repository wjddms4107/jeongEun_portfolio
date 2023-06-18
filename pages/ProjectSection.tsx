"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { variants } from "@/libs/client/utils";
import { Project } from "@prisma/client";
import ProjectBox from "./components/ProjectBox";

interface IProps {
  projects: Project[];
}

export default function ProjectSection({ projects }: IProps) {
  const [projectDetails, setProjectDetails] = useState<Project[]>(projects);

  const ClickProjectBox = (index: number) => {
    setProjectDetails(
      projectDetails?.map((info, i) => ({
        ...info,
        state: i === index,
      })),
    );
  };

  const projectBoxs = projectDetails?.map(details => (
    <ProjectBox
      key={details.id}
      isClicked={details.state}
      details={details}
      onClick={() => ClickProjectBox(details.id - 1)}
      layoutId={details.id}
    />
  ));

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2 }}
      className="bg-white dark:bg-darkLightGray200 rounded-2xl shadow-lg py-[30px] pl-[30px] my-12 md:w-auto"
    >
      <motion.h2 variants={variants} className="text-5xl font-extrabold mb-6">
        Projects (총 {projects?.length}개)
      </motion.h2>
      <h3 className="text-xl text-deepGray dark:text-darkDeepGray">
        총 {projects?.length}개의 프로젝트를 최신순으로 나열해놓았습니다. <br />
        기술스택, 프로젝트 소개 및 트러블 슈팅 등의 내용이 담겨있고 '자세히보기'를 클릭하시면 더
        많은 정보를 보실 수 있습니다.
      </h3>

      <div className="h-[700px] pt-10 pb-5 flex snap-mandatory snap-x overflow-x-scroll lg:scrollbar-hide">
        {projectBoxs}
      </div>
    </motion.div>
  );
}
