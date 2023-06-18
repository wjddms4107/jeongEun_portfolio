interface IProps {
  company: string;
  period: string;
  companyDscr: string;
  myRoleDscr: string;
}

export default function CompanyDscrWrapper({ company, period, companyDscr, myRoleDscr }: IProps) {
  return (
    <div className="ml-3 lg:ml-6 mb-4 lg:max-w-[1060px]">
      <h3 className="text-3xl lg:text-4xl font-bold mb-4">{company}</h3>
      <div className="text-xl text-middleGray200 dark:text-darkMiddleGray200 mb-2">{period}</div>
      <div className="mb-6 leading-7 text-base lg:text-lg break-all whitespace-pre-line">
        {companyDscr}
      </div>
      <div className="leading-7 text-base lg:text-lg break-all whitespace-pre-line">
        {myRoleDscr}
      </div>
    </div>
  );
}
