import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface ISkillBox {
  src?: string | StaticImageData;
  alt?: string;
  lang: string;
  isBorderNone?: boolean;
  isImg?: boolean;
  width?: number;
}

export default function SkillTitle({
  src,
  lang,
  alt,
  isBorderNone = false,
  isImg = true,
  width = 20,
}: ISkillBox) {
  const containerStyle = isBorderNone ? { border: "0px" } : {};

  return (
    <div style={containerStyle}>
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="flex items-center justify-center cursor-default text-sm lg:text-base"
      >
        {isImg ? (
          <Image src={src!} alt={alt!} width={width} height={width} />
        ) : (
          <div className="h-[20px] w-[20px] flex items-center lg:text-[20px]">💅</div>
        )}
        <div className="ml-2 mr-2 font-medium lg:text-[20px] dark:text-darkMiddleGray900">
          {lang}
        </div>
      </motion.div>
    </div>
  );
}
