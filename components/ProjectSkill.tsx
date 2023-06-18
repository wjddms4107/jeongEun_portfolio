import { cls } from "@/libs/client/utils";

interface IProps {
  skill: string;
  bgColor?: string;
}

export default function ProjectSkill({ skill, bgColor = "bg-white" }: IProps) {
  return (
    <span
      className={cls(
        "text-sm lg:text-base w-fit mr-1 px-2 lg:px-3 py-1 rounded-md text-bluePurple dark:text-lightBluePurple",
        bgColor,
      )}
    >
      {skill}
    </span>
  );
}
