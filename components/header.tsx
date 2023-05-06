import { useState, useEffect } from "react";
import { cls } from "@/libs/client/utils";

export default function Header() {
  const liHover = "hover:text-middleGray200"

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div className={cls("fixed top-0 left-0 right-0 h-[75px] flex align-middle justify-center", isScrolled ? "bg-lightGrayWhite" : "bg-white" )}>
      <div className="w-[1440px] h-full px-7 flex align-middle justify-between">
      <div className="flex items-center"><a href="#home">Front_JeongEun</a></div>
        <ul className="flex items-center space-x-10">
          <li className={liHover}><a href="#home">About me</a></li>
          <li className={liHover}><a href="#skill">Skill</a></li>
          <li className={liHover}><a href="#experience">Experience</a></li>
          <li className={liHover}><a href="#project">Project</a></li>
          <li className={liHover}><a href="#education">Education</a></li>
          <li className={liHover}><a href="#etc">Etc</a></li>
        </ul>
      </div>
    </div>
  )
}