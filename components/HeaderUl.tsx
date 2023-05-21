import { cls,scrollUp } from "@/libs/client/utils";
import lightIcon from '@/public/lightIcon.svg';
import darkIcon from '@/public/darkIcon.svg';
import Image from "next/image";

interface IHeaderUlProps {
  isClickHamberger : boolean;
  serIsClickHamberger?: () => void;
}

export default function HeaderUl({isClickHamberger, serIsClickHamberger}: IHeaderUlProps) {
  const UlStyle = isClickHamberger ? "flex flex-col items-center w-full" : "flex items-center space-x-10";
  const liStyle = isClickHamberger ? "w-full h-[50px] flex items-center justify-center hover:text-middleGray200 hover:bg-lightGrayWhite" : "hover:text-middleGray200";

  return (
    <ul className={UlStyle} onClick={() => serIsClickHamberger?.()}>
      <li onClick={() => scrollUp()} className={liStyle}>
        About me
      </li>
      <li className={liStyle}>
        <a href="#skill">Skill</a>
      </li>
      <li className={liStyle}>
        <a href="#experience">Experience</a>
      </li>
      <li className={liStyle}>
        <a href="#project">Project</a>
      </li>
      <li className={liStyle}>
        <a href="#education">Education</a>
      </li>
      <li className={liStyle}>
        <a href="#etc">Etc</a>
      </li>
      <li className={liStyle}>
        {true ? <Image src={lightIcon} alt="lightIcon" /> : <Image src={darkIcon} alt="darkIcon" />}
      </li>
  </ul>
  )
}