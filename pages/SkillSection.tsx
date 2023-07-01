import { motion } from "framer-motion";
import { variants } from "@/libs/client/utils";
import SkillTitle from "@/components/SkillTitle";

export default function SkillSection() {
  const skillSortRoundBox =
    "w-[80px] text-base lg:text-xl font-medium mb-4 bg-LightGray dark:bg-darkLightGrayWhite text-center rounded-full";
  const skillBorder =
    "flex items-center grid grid-cols-2 gap-1 gap-y-8 sm:grid-cols-6  sm:divide-middleGray200 sm:divide-dashed sm:divide-x-[1px]";

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.5 }}
      className="flex flex-col mt-16 lg:mt-20 mb-20 p-7 bg-gray-50 dark:bg-darkLightGray200 rounded-2xl shadow-lg"
    >
      <motion.h2 variants={variants} className="text-2xl lg:text-5xl font-extrabold mb-3 lg:mb-10">
        Skill
      </motion.h2>

      <div className="mb-8 lg:mb-14">
        <h3 className={skillSortRoundBox}>Front</h3>
        <div className={skillBorder}>
          <SkillTitle src="/html.svg" alt="html 아이콘" lang="HTML/CSS" />
          <SkillTitle src="/js.svg" alt="js 아이콘" lang="Javascript" />
          <SkillTitle src="/ts.svg" alt="ts 아이콘" lang="Typescript" />
          <SkillTitle src="/react.png" alt="react 아이콘" lang="React" />
          <SkillTitle src="/next.svg" alt="next 아이콘" lang="Next.js" />
          <SkillTitle src="/sass.svg" alt="sass 아이콘" lang="Sass" width={35} />
          <SkillTitle lang="Styled-component" isImg={false} isBorderNone />
          <SkillTitle src="/tailwind.svg" alt="tailwind 아이콘" lang="Tailwild CSS" />
          <SkillTitle src="/mui.png" alt="mui 아이콘" lang="Material UI" />
          <SkillTitle src="/redux.svg" alt="redux 아이콘" lang="Redux" />
          <SkillTitle src="/recoil.svg" alt="recoil 아이콘" lang="Recoil" width={50} />
          <SkillTitle src="/reactQuery.svg" alt="reactQuery 아이콘" lang="React-query" />
        </div>
      </div>

      <div>
        <h3 className={skillSortRoundBox}>Back</h3>
        <div className={skillBorder}>
          <SkillTitle src="/prisma.svg" alt="prisma 아이콘" lang="Prisma" />
          <SkillTitle src="/firebase.svg" alt="firebase 아이콘" lang="Firebase" />
          <SkillTitle src="/mongodb.svg" alt="mongodb 아이콘" lang="Mongodb" />
        </div>
      </div>
    </motion.div>
  );
}
