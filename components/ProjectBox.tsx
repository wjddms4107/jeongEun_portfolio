import { cls } from "@/libs/client/utils"
import Image from "next/image";
import { StaticImageData } from "next/image";
import ProjectSkill from "./ProjectSkill";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";



interface Project {
  id: number;
  state:boolean;
  title: string;
  period: string;
  dscr: string;
  sort: string;
  src: StaticImageData;
  alt:string;
  skill: string;
}

interface IProjectBoxProps {
  isClicked: boolean;
  onClick: () => void;
  infos: Project;
  layoutId: number;
}

export default function ProjectBox({isClicked, onClick,infos, layoutId}: IProjectBoxProps) {
  const [currentId, setCurrnetId] = useState<null | number>(null);

  const skills = infos.skill.split(",")
  
  return (
    <>
    <motion.div
      className={cls(
        'h-full mr-6 bg-gray-50 rounded-2xl transition-all duration-[900ms] ease-in-out',
        isClicked
          ? 'min-w-[540px]'
          : 'min-w-[130px] hover:min-w-[150px]'
      )}
      onClick={onClick}
      layoutId={layoutId+ ""}
    >
      {isClicked ? (
        <div onClick={()=>setCurrnetId(infos.id)} className="rounded-2xl h-full bg-neutral-100">
          <Image
            src={infos.src}
            alt={infos.alt}
            className="h-[50%] border-8 rounded-t-2xl border-neutral-200 "
          />
          <div className="p-4 pt-2">
            <div className="mb-[4px] flex items-center justify-between">
              <span className="text-3xl font-bold">{infos.title}</span>{' '}
              <button onClick={()=>setCurrnetId(infos.id)} className="text-lg font-semibold text-lightBluePurple hover:text-bluePurple flex items-center">
                자세히보기 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-2">
                  <path fill-rule="evenodd" d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-12 0A.75.75 0 013.75 3h4.5a.75.75 0 010 1.5H5.56l3.97 3.97a.75.75 0 01-1.06 1.06L4.5 5.56v2.69a.75.75 0 01-1.5 0v-4.5zm11.47 11.78a.75.75 0 111.06-1.06l3.97 3.97v-2.69a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h2.69l-3.97-3.97zm-4.94-1.06a.75.75 0 010 1.06L5.56 19.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="text-[18px] font-medium text-middleGray200 mb-2">
              {infos.period} ({infos.sort})
            </div>
            <div className="text-[16px] font-medium mb-[24px]">
              {skills.map(item => (
                <ProjectSkill key={item} skill={item} />
              ))}
            </div>
            <div className="text-[19px] mb-[8px]">
              <span className="font-medium">주요기능 : </span>실시간 예약 가능
            </div>
            <div className="text-[19px] mb-[6px]">
              {infos.dscr}
            </div>
          </div>
        </div>
      ) : <div className="h-full flex items-center justify-center text-deepGray text-xl font-semibold text-center p-2">{infos.title}</div>}
    </motion.div>
    <AnimatePresence>
      {currentId ? (
            <motion.div
              className="fixed z-[3] top-0 right-0 left-0 w-[100vx] h-full flex items-center justify-center m-auto"
              onClick={() => setCurrnetId(null)}
              initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
              animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            >
              <motion.div className="relative h-[840px] min-w-[740px] mr-6 rounded-2xl  bg-neutral-100" layoutId={currentId+""}>안녕하세요~</motion.div>
            </motion.div>
          ) : null}
    </AnimatePresence> 
    </>
  );
}
