import { motion } from "framer-motion";
import { variants } from "@/libs/client/utils";
import EtcBox from "@/components/EtcBox"

export default function EtcSection(){
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2 }}  
    >
      <motion.h2 variants={variants} id="etc" className="text-5xl font-extrabold my-12 mt-20">Etc (수상 및 자격증)</motion.h2>

      <div className="flex h-[80px]">
        <EtcBox title="모범장학금" dscr={`2016 2학기, 2018 1학기 \n` + `2020 1학기, 2021 1학기`} />
        <EtcBox title="TOEIC 830" dscr="2020.08" />
        <EtcBox title="컴퓨터 활용능력 1급" dscr="2018.08.10" />
        <EtcBox title="전산세무 2급" dscr="2018.10.25" />
        <EtcBox title="무역영어 1급" dscr="2018.12.27" />
      </div>
    </motion.div>
  )

}