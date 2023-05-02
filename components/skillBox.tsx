import Image from "next/image"

interface ISkillBox {
  src?:string;
  alt?:string;
  lang:string;
  isBorderNone?:boolean
  isImg?:boolean
}

export default function SkillBox({src, lang, alt,isBorderNone = false, isImg=true}:ISkillBox) {
  const containerStyle = isBorderNone ? { border: "0px" } : {};

  return (
    <div className='flex items-center justify-center' style={containerStyle}>
      {isImg ? 
        <Image src={src!} alt={alt!} width={20} /> 
        : <div className='text-[20px] h-[20px] w-[20px] flex items-center'>💅</div>}
      <div className='ml-2 mr-2 text-[20px] font-medium'>{lang}</div>
    </div>
  )
}