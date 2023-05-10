interface IProjectDscrProps {
  title: string;
  dscr: string;
}

export default function ProjectDscr({ title, dscr }:IProjectDscrProps) {
  const purpleLine = "relative right-[17px] min-w-[120px] h-fit border-purple border-l-[1px] pl-4 mr-4";

  const customDscr = title === "구현기능 소개" &&  dscr.split("+");

  return (
    <>
      <div className="flex text-middleGray900" >
        <div className={purpleLine}>{title}</div>
        <div
        className={
          title === "url" || title === "github"
            ? "text-bluePurple cursor-pointer hover:underline underline-offset-4 "
            : ""
        }
        >
        {title === "구현기능 소개"
          ? customDscr?.map((item: string, i: number) => (
              <div key={i}>{i === 0 ? null : `📌 ${item}`}</div>
            ))
          : dscr}
      </div>
      </div>
    </>
  )
}