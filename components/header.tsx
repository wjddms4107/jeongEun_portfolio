import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Image from "next/image";
import { cls,scrollUp } from "@/libs/client/utils";
import hambergerIcon from '@/public/hambergerIcon.svg';
import darkHambergerIcon from '@/public/darkHambergerIcon.svg';
import closeIcon from '@/public/closeIcon.svg';
import darkCloseIcon from '@/public/darkCloseIcon.svg';
import MobileHeader from "./MobileHeader";
import HeaderUl from "./HeaderUl";


export default function Header() {
  const {theme} = useTheme();
  const router = useRouter();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClickHamberger, serIsClickHamberger] = useState(false);

  const hambergerSvg = theme === "dark" ? darkHambergerIcon : hambergerIcon;
  const closeSvg = theme === "dark" ? darkCloseIcon : closeIcon;

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <>
    <div className={cls("fixed top-0 left-0 right-0 h-[75px] flex align-middle justify-center z-10 transition-all duration-[600ms] ease-in-out", isScrolled ? "bg-lightGrayWhite dark:bg-darkMiddleGray200 dark:text-black" : "bg-white dark:bg-black" )}>
      <div className="w-[1440px] h-full px-7 flex align-middle justify-between">
        <div onClick={() => {router.push("/"); scrollUp();}} className="flex items-center text-lg cursor-pointer hover:text-purple dark:hover:text-darkPurple">Front_JeongEun</div>
        {isMobile ? (
          <Image src={isClickHamberger ? closeSvg : hambergerSvg} alt={isClickHamberger ? closeSvg : hambergerSvg} onClick={()=> serIsClickHamberger(!isClickHamberger)} className="cursor-pointer"/>
        ) : (
          <HeaderUl isClickHamberger={false} />
        )}
      </div>
    </div>
    {isMobile && isClickHamberger && <MobileHeader serIsClickHamberger={() => serIsClickHamberger(false)}/>}
    </>
  )
}