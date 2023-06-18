import { cls } from "@/libs/client/utils";

interface IProps {
  skill: string;
  bgColor?: string;
}

export default function ProjectSkill({ skill, bgColor = "bg-white" }: IProps) {
  return (
    <span
      className={cls(
        "w-fit px-3 py-1 rounded-md text-bluePurple dark:text-lightBluePurple mr-1",
        bgColor,
      )}
    >
      {skill}
    </span>
  );
}
