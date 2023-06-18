import HeaderUl from "./HeaderUl";

interface IMobileHeaderProps {
  serIsClickHamberger: () => void;
}

export default function MobileHeader({ serIsClickHamberger }: IMobileHeaderProps) {
  return (
    <div className="fixed top-[75px] left-0 right-0 w-full h-fit z-50 bg-white dark:bg-black border-b-2 dark:border-darkLightGray200">
      <HeaderUl isClickHamberger={true} serIsClickHamberger={serIsClickHamberger} />
    </div>
  );
}
