"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Project } from "@prisma/client";
import { cls } from "@/libs/client/utils";
import ProjectDetailsModal from "./ProjectDetailsModal";
import ProjectSkill from "@/components/ProjectSkill";

interface IProjectBoxProps {
  isClicked: boolean;
  onClick: () => void;
  details: Project;
  layoutId: number;
}

export default function ProjectBox({ isClicked, onClick, details, layoutId }: IProjectBoxProps) {
  const { theme } = useTheme();

  const [currentId, setCurrentId] = useState<null | number>(null);

  const skills = details?.skill.split(",");

  const handleOpenBox = (id: number) => {
    setCurrentId(id);
    document.documentElement.style.overflow = "hidden";
  };

  const handleCloseBox = () => {
    setCurrentId(null);
    document.documentElement.style.overflow = "visible";
  };

  return (
    <>
      <motion.div
        className={cls(
          "h-full mr-3 lg:mr-6 bg-gray-50 dark:bg-darkMiddleGray100 rounded-2xl transition-all duration-[900ms] ease-in-out cursor-pointer",
          isClicked
            ? "min-w-[300px] lg:min-w-[540px]"
            : "min-w-[70px] lg:min-w-[130px] hover:min-w-[90px] lg:hover:min-w-[150px]",
        )}
        onClick={onClick}
        layoutId={layoutId + ""}
      >
        {isClicked ? (
          <div
            onClick={() => handleOpenBox(details?.id)}
            className="min-h-[480px] lg:min-h-full h-full rounded-2xl  bg-neutral-100 dark:bg-darkMiddleGray200"
          >
            <Image
              src={details?.src[0]}
              alt={details?.alt}
              className="lg:h-[50%] border-8 rounded-t-2xl border-LightGray dark:border-darkMiddleGray100 "
              width={555}
              height={400}
            />
            <div className="h-[auto] flex flex-col justify-between p-4 pt-2 overflow-y-scroll  sm:overflow-y-hidden">
              <div className="">
                <div className="flex items-center justify-between">
                  <h1 className="lg:text-[20px] font-bold">{details?.title}</h1>
                  <button
                    onClick={() => handleOpenBox(details?.id)}
                    className="text-base text-middleGray200 dark:text-middleGray900 hover:text-middleGray300 hover:dark:text-darkMiddleGray900 flex items-center"
                  >
                    <span className="text-base">자세히보기</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 lg:w-6 lg:h-6 ml-[3px]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-12 0A.75.75 0 013.75 3h4.5a.75.75 0 010 1.5H5.56l3.97 3.97a.75.75 0 01-1.06 1.06L4.5 5.56v2.69a.75.75 0 01-1.5 0v-4.5zm11.47 11.78a.75.75 0 111.06-1.06l3.97 3.97v-2.69a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h2.69l-3.97-3.97zm-4.94-1.06a.75.75 0 010 1.06L5.56 19.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div className="text-[14px] font-normal text-middleGray100 dark:text-darkMiddleGray900 mb-[4px] sm:text-[17px]">
                  {details?.period} ({details?.sort})
                </div>
                <div className="text-[13px] font-medium mb-2 lg:mb-[16px] w-full flex flex-wrap gap-y-1 sm:text-[16px]">
                  {skills.map(item => (
                    <ProjectSkill
                      key={item}
                      skill={item}
                      bgColor={theme === "dark" ? "dark:bg-darkMiddleGray100" : undefined}
                    />
                  ))}
                </div>
              </div>

              <div className="sm:overflow-y-auto">
                <div className="hidden lg:block text-[15px] text-middleGray900 dark:text-darkMiddleGray900 mb-[6px]">
                  📌 github :{" "}
                  <Link
                    href={details?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="cursor-pointer hover:underline underline-offset-4"
                  >
                    {details?.github}
                  </Link>
                </div>
                <div className="text-[13px] lg:text-[15px] text-middleGray900 dark:text-darkMiddleGray900">
                  📌 url :{" "}
                  <Link
                    href={details?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="cursor-pointer hover:underline underline-offset-4"
                  >
                    {details?.url}
                  </Link>
                </div>
                <div className="text-[13px] lg:text-base mt-1 lg:mt-3 text-middleGray900 dark:text-darkMiddleGray900">
                  {details?.shortDscr}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="min-h-[480px] lg:h-[auto] lg:text-xl break-all flex items-center justify-center text-deepGray dark:text-darkMiddleGray300 font-semibold text-center p-2">
            {details?.title}
          </div>
        )}
      </motion.div>
      <AnimatePresence>
        {currentId ? (
          <motion.div
            className="fixed z-20 top-0 right-0 left-0 w-[100vw] h-full flex items-center justify-center m-auto"
            onClick={e => e.target === e.currentTarget && handleCloseBox()}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <ProjectDetailsModal currentId={currentId} details={details} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
