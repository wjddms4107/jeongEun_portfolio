import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image"

interface ISkillBox {
  src?:string | StaticImageData;
  alt?:string;
  lang:string;
  isBorderNone?:boolean
  isImg?:boolean
}

export default function SkillBox({src, lang, alt,isBorderNone = false, isImg=true}:ISkillBox) {
  const containerStyle = isBorderNone ? { border: "0px" } : {};

  return (
    <div style={containerStyle}>
      <motion.div whileHover={{ scale: 1.2 }} className='flex items-center justify-center cursor-pointer'>
        {isImg ? 
          <Image src={src!} alt={alt!} width={20} /> 
          : <div className='h-[20px] w-[20px] flex items-center lg:text-[20px]'>💅</div>}
        <div className='ml-2 mr-2 font-medium lg:text-[20px]'>{lang}</div>
      </motion.div>
    </div>
  )
}