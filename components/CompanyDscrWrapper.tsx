import Image from "next/image"

interface IProps {
  company: string;
  period: string;
  companyDscr: string;
  myRoleDscr: string;
}

export default function CompanyDscrWrapper({company, period, companyDscr, myRoleDscr }:IProps) {
  return (
    <div className='ml-6'>
      <h3 className="text-4xl font-bold mb-4">{company}</h3>
      <div className="text-xl text-middleGray200 mb-2">{period}</div>
      <div className="mb-4 w-[1000px] break-all whitespace-pre-line">{companyDscr}</div>
      <div className="w-[1000px] break-all whitespace-pre-line">{myRoleDscr}</div>
    </div>
  )
}