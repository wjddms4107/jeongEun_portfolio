import { motion } from "framer-motion";
import { variants } from "@/libs/client/utils";
import SkillBox from "@/components/SkillBox";

export default function SkillSection() {
  const skillSortRoundBox =
    "w-[80px] text-xl font-medium mb-4 bg-LightGray dark:bg-darkLightGrayWhite text-center rounded-full";
  const skillBorder =
    "flex items-center grid grid-cols-2 gap-1 gap-y-8 sm:grid-cols-6  sm:divide-middleGray200 sm:divide-dashed sm:divide-x-[1px]";

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.5 }}
      className="flex flex-col mt-20 mb-20 p-7 bg-gray-50 dark:bg-darkLightGray200 rounded-2xl shadow-lg"
    >
      <motion.h2 variants={variants} className="text-5xl font-extrabold mb-10">
        Skill
      </motion.h2>

      <div className="mb-14">
        <h3 className={skillSortRoundBox}>Front</h3>
        <div className={skillBorder}>
          <SkillBox src="/html.svg" alt="html 아이콘" lang="HTML/CSS" />
          <SkillBox src="/js.svg" alt="js 아이콘" lang="Javascript" />
          <SkillBox src="/ts.svg" alt="ts 아이콘" lang="Typescript" />
          <SkillBox src="/react.svg" alt="react 아이콘" lang="React" />
          <SkillBox src="/next.svg" alt="next 아이콘" lang="Next.js" />
          <SkillBox src="/sass.svg" alt="sass 아이콘" lang="Sass" width={35} />
          <SkillBox lang="Styled-component" isImg={false} isBorderNone />
          <SkillBox src="/tailwind.svg" alt="tailwind 아이콘" lang="Tailwild CSS" />
          <SkillBox src="/mui.png" alt="mui 아이콘" lang="Material UI" />
          <SkillBox src="/redux.svg" alt="redux 아이콘" lang="Redux" />
          <SkillBox src="/recoil.svg" alt="recoil 아이콘" lang="Recoil" width={50} />
          <SkillBox src="/reactQuery.svg" alt="reactQuery 아이콘" lang="React-query" />
        </div>
      </div>

      <div>
        <h3 className={skillSortRoundBox}>Back</h3>
        <div className={skillBorder}>
          <SkillBox src="/prisma.svg" alt="prisma 아이콘" lang="Prisma" />
          <SkillBox src="/firebase.svg" alt="firebase 아이콘" lang="Firebase" />
          <SkillBox src="/mongodb.svg" alt="mongodb 아이콘" lang="Mongodb" />
        </div>
      </div>
    </motion.div>
  );
}
