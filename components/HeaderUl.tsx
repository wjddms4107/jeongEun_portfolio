import { useTheme } from "next-themes";
import { scrollUp } from "@/libs/client/utils";
import { useRouter } from 'next/router';

interface IHeaderUlProps {
  isClickHamberger : boolean;
  serIsClickHamberger?: () => void;
}

export default function HeaderUl({isClickHamberger, serIsClickHamberger}: IHeaderUlProps) {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const { pathname } = router;

  const goToHomePage = pathname === "/" ? undefined : () => router.push("/");
  
  const UlStyle = isClickHamberger ? "flex flex-col items-center w-full" : "flex items-center space-x-10";
  const liStyle = isClickHamberger ? "w-full h-[50px] flex items-center justify-center hover:text-middleGray200 hover:bg-lightGrayWhite" : "hover:text-middleGray200 hover:dark:text-darkLightGray";

  return (
    <ul className={UlStyle} onClick={() => serIsClickHamberger?.()}>
      <li onClick={() => {pathname === "/" ? scrollUp() : router.push("/")}} className={liStyle}>
        About me
      </li>
      <li className={liStyle} onClick={goToHomePage}>
        <a href="#skill">Skill</a>
      </li>
      <li className={liStyle} onClick={goToHomePage}>
        <a href="#experience">Experience</a>
      </li>
      <li className={liStyle} onClick={goToHomePage}>
        <a href="#project">Project</a>
      </li>
      <li className={liStyle} onClick={goToHomePage}>
        <a href="#education">Education</a>
      </li>
      <li className={liStyle} onClick={goToHomePage}>
        <a href="#etc">Etc</a>
      </li>
      <li className={liStyle} onClick={() => router.push("/my-ground")}>
        MyGround
      </li>
      <li
        className={liStyle}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#F2F2F2"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="#F7D974"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="#0E0E0E"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="#F7D974"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        )}
      </li>

  </ul>
  )
}