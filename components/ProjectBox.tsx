import { useState } from "react"
import { cls } from "@/libs/client/utils"

interface Project {
  id: number;
  title: string;
  period: string;
  dscr: string;
}

interface IProjectBoxProps {
  isClicked: boolean;
  onClick: () => void;
  infos: Project
}

export default function ProjectBox({isClicked, onClick,infos}: IProjectBoxProps) {
  return (
    <div className={cls("h-full bg-slate-200 mr-6 rounded-2xl transition-all duration-1000 ease-in-out", isClicked ? "min-w-[550px] bg-[#C1B8D2]" : "min-w-[150px] hover:min-w-[180px]")} onClick={onClick}>
      {isClicked && infos.id}
    </div>
  );
}