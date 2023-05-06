import { cls, purpleLine, greyLine} from "@/libs/client/utils";

interface IEducationBox {
  period: string;
  title: string;
  dscr: string;
  isMargin?: boolean;
}

export default function EducationBox({period, title, dscr, isMargin}:IEducationBox){
  // const purpleLine = "relative right-[1px] font-bold border-l-2 border-purple border-dashed pl-3";
  
  return (
    <div className="flex w-full">
      <div className={cls(greyLine, "w-[250px] pr-6")}>
        <div className={cls(purpleLine, isMargin? "mt-10" : "")}>{period}</div>
      </div>
      <div className={greyLine}>
        <div>
          <div className={cls(purpleLine, isMargin ? "mb-3 mt-10" : "mb-3")}>{title}</div>
          <div className="pl-3 w-[700px] break-all whitespace-pre"> 
            {dscr}
          </div>
        </div>
      </div>
    </div>
  )
}