interface IProps {
  skill:string;
}

export default function ProjectSkill({skill}:IProps) {
  return <span className='bg-[#ffffff] px-3 py-1 rounded-md text-[#7684F1] mr-1'>{skill}</span>
}