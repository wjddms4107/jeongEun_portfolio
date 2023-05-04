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




export default function SkillSection(){
  return (
    <div className="h-[400px] flex flex-col mt-10 mb-20 p-7 bg-[#e9eaeb] rounded-2xl shadow-lg">
      <h2 className="text-5xl font-extrabold mb-8">Skill</h2>

      <div className="mb-12">
        <h3 className="w-[80px] text-xl font-medium mb-4 bg-[#D2DAE0] text-center rounded-full">
          Front
        </h3>
        <div className="grid grid-cols-6 gap-1 gap-y-8 divide-x-[1px] divide-[#c1c5cb] divide-dashed">
          <SkillBox src={html} alt="html 아이콘" lang="HTML" />
          <SkillBox src={css} alt="css 아이콘" lang="CSS" />
          <SkillBox src={js} alt="js 아이콘" lang="Javascript" />
          <SkillBox src={ts} alt="ts 아이콘" lang="Typescript" />
          <SkillBox src={react} alt="react 아이콘" lang="React" />
          <SkillBox src={next} alt="next 아이콘" lang="Next.js" />
          <SkillBox src={sass} alt="sass 아이콘" lang="Sass" isBorderNone />
          <SkillBox lang="Styled-component" isImg={false} />
          <SkillBox src={tailwind} alt="tailwind 아이콘" lang="Tailwild CSS" />
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
        <h3 className="w-[80px] text-xl font-medium mb-4 bg-[#D2DAE0] text-center rounded-full">
          Back
        </h3>
        <div className="grid grid-cols-6 gap-1 gap-y-6 divide-x-[1px] divide-[#c1c5cb] divide-dashed">
          <SkillBox src={firebase} alt="firebase 아이콘" lang="Firebase" />
          <SkillBox src={mongodb} alt="mongodb 아이콘" lang="Mongodb" />
          <SkillBox src={prisma} alt="prisma 아이콘" lang="Prisma" />
        </div>
      </div>
    </div>
  );
}