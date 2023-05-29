import { cls, purpleLine, greyLine} from "@/libs/client/utils";

interface IEducationBox {
  period: string;
  title: string;
  dscr: string;
  isMargin?: boolean;
}

export default function EducationBox({period, title, dscr, isMargin}:IEducationBox){
  return (
    <div className="flex lg:whitespace-pre-line">
      <div className={cls(greyLine, "pr-6 min-w-[150px] lg:min-w-[250px]")}>
        <div className={cls(purpleLine, isMargin? "mt-10" : "")}>{period}</div>
      </div>
      <div className={cls(greyLine,"")}>
        <div>
          <div className={cls(purpleLine, isMargin ? "mb-3 mt-10" : "mb-3")}>{title}</div>
          <div className="pl-3 md:w-full lg:w-[900px] lg:break-all"> 
            {dscr}
          </div>
        </div>
      </div>
    </div>
  )
}