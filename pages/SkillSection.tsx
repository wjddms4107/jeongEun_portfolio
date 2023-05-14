import { motion } from "framer-motion";
import { cls, variants } from "@/libs/client/utils";
import SkillBox from '@/components/skillBox';
import html from '@/public/html.svg';
import css from '@/public/css.svg';
import js from '@/public/js.svg';
import ts from '@/public/ts.svg';
import react from '@/public/react.svg';
import next from '@/public/next.svg';
import sass from '@/public/sass.svg';
import tailwind from '@/public/tailwind.svg';
import redux from '@/public/redux.svg';
import recoil from '@/public/recoil-js.svg';
import reactQuery from '@/public/reactQuery.svg';
import firebase from '@/public/firebase.svg';
import mongodb from '@/public/mongodb.svg';
import prisma from '@/public/prisma.svg';
import mui from '@/public/mui.png';


export default function SkillSection(){
  const skillSortRoundBox = "w-[80px] text-xl font-medium mb-4 bg-LightGray text-center rounded-full";
  const skillBorder = "flex items-center grid grid-cols-6 gap-1 gap-y-8 divide-x-[1px] divide-middleGray200 divide-dashed";

  return (
    <motion.div 
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.5 }}
      className="flex flex-col mt-20 mb-20 p-7 bg-gray-50 rounded-2xl shadow-lg"
    >
      <motion.h2 variants={variants} className="text-5xl font-extrabold mb-10">Skill</motion.h2>

      <div className="mb-14">
        <h3 className={skillSortRoundBox}>
          Front
        </h3>
        <div className={skillBorder}>
          <SkillBox src={html} alt="html 아이콘" lang="HTML/CSS" />
          <SkillBox src={js} alt="js 아이콘" lang="Javascript" />
          <SkillBox src={ts} alt="ts 아이콘" lang="Typescript" />
          <SkillBox src={react} alt="react 아이콘" lang="React" />
          <SkillBox src={next} alt="next 아이콘" lang="Next.js" />
          <SkillBox src={sass} alt="sass 아이콘" lang="Sass" />
          <SkillBox lang="Styled-component" isImg={false} isBorderNone />
          <SkillBox src={tailwind} alt="tailwind 아이콘" lang="Tailwild CSS" />
          <SkillBox src={mui} alt="mui 아이콘" lang="Material UI" />
          <SkillBox src={redux} alt="redux 아이콘" lang="Redux" />
          <SkillBox src={recoil} alt="recoil 아이콘" lang="Recoil" />
          <SkillBox
            src={reactQuery}
            alt="reactQuery 아이콘"
            lang="React-query"
          />
        </div>
      </div>

      <div>
        <h3 className={skillSortRoundBox}>
          Back
        </h3>
        <div className={skillBorder}>
          <SkillBox src={prisma} alt="prisma 아이콘" lang="Prisma" />
          <SkillBox src={firebase} alt="firebase 아이콘" lang="Firebase" />
          <SkillBox src={mongodb} alt="mongodb 아이콘" lang="Mongodb" />
        </div>
      </div>
    </motion.div>
  );
}