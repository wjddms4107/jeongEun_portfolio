import { cls } from "@/libs/client/utils"
import Image from "next/image";
import { Project } from "@prisma/client";
import ProjectSkill from "@/components/ProjectSkill";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import BigProjectBox from "./BigProjectBox";
import Link from "next/link";

interface IProjectBoxProps {
  isClicked: boolean;
  onClick: () => void;
  infos: Project;
  layoutId: number;
}

export default function ProjectBox({isClicked, onClick, infos, layoutId}: IProjectBoxProps) {
  const [currentId, setCurrentId] = useState<null | number>(null);

  const handleOpenBox = (id:number) => {
    setCurrentId(id);
  };

  const handleCloseBox = () => {
    setCurrentId(null);
  };

  const skills = infos.skill.split(",")
  
  return (
    <>
    <motion.div
      className={cls(
        'h-full mr-6 bg-gray-50 rounded-2xl transition-all duration-[900ms] ease-in-out cursor-pointer',
        isClicked
          ? 'min-w-[540px]'
          : 'min-w-[130px] hover:min-w-[150px]'
      )}
      onClick={onClick}
      layoutId={layoutId+ ""}
    >
      {isClicked ? (
        <div onClick={()=>handleOpenBox(infos.id)} className="rounded-2xl h-full bg-neutral-100">
          <Image
            src={infos.src}
            alt={infos.alt}
            className="h-[50%] border-8 rounded-t-2xl border-neutral-200 "
            width={555}
            height={400}
          />
          <div className="p-4 pt-2 h-[50%] flex flex-col justify-between">
            <div className="">
              <div className="flex items-center justify-between">
                <span className="text-[25px] font-bold">{infos.title}</span>
                <button onClick={()=>handleOpenBox(infos.id)} className="text-base text-[#727272] hover:text-[#565656] flex items-center">
                  <span>자세히보기</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-[3px]">
                    <path fillRule="evenodd" d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-12 0A.75.75 0 013.75 3h4.5a.75.75 0 010 1.5H5.56l3.97 3.97a.75.75 0 01-1.06 1.06L4.5 5.56v2.69a.75.75 0 01-1.5 0v-4.5zm11.47 11.78a.75.75 0 111.06-1.06l3.97 3.97v-2.69a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h2.69l-3.97-3.97zm-4.94-1.06a.75.75 0 010 1.06L5.56 19.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="text-[17px] font-normal text-middleGray100 mb-[4px]">
                {infos.period} ({infos.sort})
              </div>
              <div className="text-[16px] font-medium mb-[16px] w-full flex flex-wrap gap-y-1">
                {skills.map(item => (
                  <ProjectSkill key={item} skill={item} />
                ))}
              </div>
            </div>
            
            <div className="overflow-y-scroll">
              <div className="text-[17px] text-middleGray900 mb-[6px]">
                📌 github : <Link href={infos.github} className="cursor-pointer hover:underline underline-offset-4">{infos.github}</Link>
              </div>
              <div className="text-[17px] text-middleGray900">
                📌 url : <Link href={infos.url} className="cursor-pointer hover:underline underline-offset-4">{infos.url}</Link>
              </div>
              <div className="text-[17px] text-middleGray900 mt-3">
                {infos.shortDscr}
              </div>
            </div>
          </div>
        </div>
      ) : <div className="h-full flex items-center justify-center text-deepGray text-xl font-semibold text-center p-2">{infos.title}</div>}
    </motion.div>
    <AnimatePresence>
      {currentId ? (
            <motion.div
              className="fixed z-[3] top-0 right-0 left-0 w-[100vx] h-full flex items-center justify-center m-auto"
              onClick={(e) => e.target === e.currentTarget && handleCloseBox()}
              initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
              animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            >
              <BigProjectBox currentId={currentId} infos={infos} />
            </motion.div>
          ) : null}
    </AnimatePresence> 
    </>
  );
}
