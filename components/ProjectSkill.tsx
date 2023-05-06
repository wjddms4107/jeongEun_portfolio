import { cls } from "@/libs/client/utils";

interface IProps {
  skill:string;
  bgColor?: string;
}

export default function ProjectSkill({skill, bgColor = "bg-white"}:IProps) {
  return <span className={cls("px-3 py-1 rounded-md text-bluePurple mr-1", bgColor)}>{skill}</span>
}