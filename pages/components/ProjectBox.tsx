'use client'

import { cls } from "@/libs/client/utils"
import Image from "next/image";
import { Project } from "@prisma/client";
import ProjectSkill from "@/components/ProjectSkill";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import BigProjectBox from "./BigProjectBox";
import Link from "next/link";
import { useTheme } from "next-themes";

interface IProjectBoxProps {
  isClicked: boolean;
  onClick: () => void;
  infos: Project;
  layoutId: number;
}

export default function ProjectBox({isClicked, onClick, infos, layoutId}: IProjectBoxProps) {
  const { theme } = useTheme();
  
  const [currentId, setCurrentId] = useState<null | number>(null);

  const skills = infos.skill.split(",")

  const handleOpenBox = (id:number) => {
    setCurrentId(id);
    document.documentElement.style.overflow = 'hidden';
  };
  
  const handleCloseBox = () => {
    setCurrentId(null);
    document.documentElement.style.overflow = 'visible';
  };

  
  return (
    <>
    <motion.div
      className={cls(
        'h-full mr-6 bg-gray-50 dark:bg-darkMiddleGray100 rounded-2xl transition-all duration-[900ms] ease-in-out cursor-pointer',
        isClicked
          ? 'sm:min-w-[540px]'
          : 'sm:min-w-[130px] sm:hover:min-w-[150px]'
      )}
      onClick={onClick}
      layoutId={layoutId+ ""}
    >
      {isClicked ? (
        <div onClick={()=>handleOpenBox(infos.id)} className="rounded-2xl h-full bg-neutral-100 dark:bg-darkMiddleGray200">
          <Image
            src={infos.src[0]}
            alt={infos.alt}
            className="h-[50%] border-8 rounded-t-2xl border-LightGray dark:border-darkMiddleGray100 "
            width={555}
            height={400}
          />
          <div className="h-[auto] flex flex-col justify-between p-4 pt-2 overflow-y-scroll  sm:overflow-y-hidden">
            <div className="">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px] font-bold sm:text-[25px]">{infos.title}</h1>
                <button onClick={()=>handleOpenBox(infos.id)} className="text-base text-middleGray200 dark:text-middleGray900 hover:text-middleGray300 hover:dark:text-darkMiddleGray900 flex items-center">
                  <span>자세히보기</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-[3px]">
                    <path fillRule="evenodd" d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-12 0A.75.75 0 013.75 3h4.5a.75.75 0 010 1.5H5.56l3.97 3.97a.75.75 0 01-1.06 1.06L4.5 5.56v2.69a.75.75 0 01-1.5 0v-4.5zm11.47 11.78a.75.75 0 111.06-1.06l3.97 3.97v-2.69a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h2.69l-3.97-3.97zm-4.94-1.06a.75.75 0 010 1.06L5.56 19.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="text-[14px] font-normal text-middleGray100 dark:text-darkMiddleGray900 mb-[4px] sm:text-[17px]">
                {infos.period} ({infos.sort})
              </div>
              <div className="text-[13px] font-medium mb-[16px] w-full flex flex-wrap gap-y-1 sm:text-[16px]">
                {skills.map(item => (
                  <ProjectSkill key={item} skill={item} bgColor={theme === 'dark' ? "dark:bg-darkMiddleGray100" : undefined} />
                ))}
              </div>
            </div>
            
            <div className="sm:overflow-y-auto">
              <div className="text-[13px] text-middleGray900 dark:text-darkMiddleGray900 mb-[6px] sm:text-[17px]">
                📌 github : <Link href={infos.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="cursor-pointer hover:underline underline-offset-4">{infos.github}</Link>
              </div>
              <div className="text-[13px] text-middleGray900 dark:text-darkMiddleGray900 sm:text-[17px]">
                📌 url : <Link href={infos.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="cursor-pointer hover:underline underline-offset-4">{infos.url}</Link>
              </div>
              <div className="text-[13px] text-middleGray900 dark:text-darkMiddleGray900 mt-3 sm:text-[17px]">
                {infos.shortDscr}
              </div>
            </div>
          </div>
        </div>
      ) : <div className="h-full flex items-center justify-center text-deepGray dark:text-darkMiddleGray300 text-xl font-semibold text-center p-2">{infos.title}</div>}
    </motion.div>
    <AnimatePresence>
      {currentId ? (
            <motion.div
              className="fixed z-20 top-0 right-0 left-0 w-[100vw] h-full flex items-center justify-center m-auto"
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
