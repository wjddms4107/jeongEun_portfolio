interface IHeaderProps {
  children: React.ReactNode;
}

const liHover = "hover:border-b-2 hover:border-orange-500"

export default function Header() {
  return (
    <div className="h-[60px] bg-white flex align-middle justify-center">
      <div className="w-[1440px] h-full px-7 flex align-middle justify-between">
      <div className="flex items-center">Front_JE</div>
        <ul className="flex items-center space-x-10">
          <li className={liHover}>About me</li>
          <li className={liHover}>Skill</li>
          <li className={liHover}>Experience</li>
          <li className={liHover}>Project</li>
          <li className={liHover}>Etc</li>
        </ul>
      </div>
    </div>
  )
}