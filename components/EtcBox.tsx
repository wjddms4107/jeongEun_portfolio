import { cls, purpleLine, greyLine } from "@/libs/client/utils";

interface IEtcBox {
  title: string;
  dscr: string;
}

export default function EtcBox({ title, dscr }: IEtcBox) {
  return (
    <div className={cls(greyLine, "w-[50%] lg:w-[250px] pr-6")}>
      <div className={cls(purpleLine, "mb-3")}>{title}</div>
      <div className="pl-3 w-[auto] lg:w-[700px] text-sm break-all whitespace-pre">{dscr}</div>
    </div>
  );
}
