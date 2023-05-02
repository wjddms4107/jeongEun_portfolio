import Header from '@/components/header'
import Image from 'next/image';
// import html from '@/public/html5.svg';
import html from '@/public/html.svg';
// import css from '@/public/css3.svg';
import css from '@/public/css.svg';
import js from '@/public/js.svg';
import ts from '@/public/ts.svg';
import react from '@/public/react.svg';
import next from '@/public/nextjsIcon.svg';
import sass from '@/public/sass.svg';
import tailwind from '@/public/tailwind.svg';
import redux from '@/public/redux.svg';
// import recoil from '@/public/recoil.svg';
import recoil from '@/public/recoil-js.svg';
import reactQuery from '@/public/reactQuery.svg';
import SkillBox from '@/components/skillBox';


export default function Home() {
  return (
    <>    
      <Header />
      <main className="w-full flex flex-col items-center justify-center">
        <div className="w-[1440px] h-auto flex flex-col p-7">
          <div className='flex align-middle justify-between'>
            <h1 className="w-3/5 items-center text-[50px] leading-[1.3] font-semibold text-[#2f3c49] font-Josefin m-auto">이쁘게 개발하는 걸 좋아하는<br />프론트엔드 개발자 노정은입니다.</h1>
            <div className="w-2/5 bg-white h-[500px] rounded-2xl shadow-lg">이미지 둥글게</div>
          </div>

          <div className='flex flex-col mt-10 mb-14'>
            <h2 className='text-4xl font-medium mb-4 text-center'>About me<span className="absolute left-[55%] text-sm p-2 text-[#FCFCFC] bg-[#FD7FD4] rounded-[4px] cursor-pointer hover:bg-[#f151bc]">이력서 다운로드</span></h2>
            <div className='flex align-middle justify-center space-x-8 text-[#585d63]'>
              <div><span className='border-r-2 border-[#B680F9] mr-2 pr-2'>연락처</span>010 7704 4107</div>
              <div><span className='border-r-2 border-[#B680F9] mr-2 pr-2'>이메일</span> wjddms4107@gmail.com</div>
              <div><span className='border-r-2 border-[#B680F9] mr-2 pr-2'>블로그</span> www.naver.com</div>
              <div><span className='border-r-2 border-[#B680F9] mr-2 pr-2'>깃허브</span> www.naver.com</div>
            </div>
          </div>    

          <div className='h-[400px] flex flex-col mt-10 p-7 bg-[#e9eaeb] rounded-2xl shadow-lg'>
            <h2 className='text-4xl font-medium mb-8'>Skill</h2>

            <div className='mb-12'>
              <h3 className='w-[80px] text-xl font-medium mb-4 bg-[#D2DAE0] text-center rounded-full'>Front</h3>
              <div className='grid grid-cols-6 gap-1 gap-y-8 divide-x-[1px] divide-[#c1c5cb] divide-dashed'>
                <SkillBox src={html} alt="html 아이콘" lang='HTML'/>
                <SkillBox src={css} alt="css 아이콘" lang='CSS'/>
                <SkillBox src={js} alt="js 아이콘" lang='Javascript'/>
                <SkillBox src={ts} alt="ts 아이콘" lang='Typescript'/>
                <SkillBox src={react} alt="react 아이콘" lang='React'/>
                <SkillBox src={next} alt="next 아이콘" lang='Next.js'/>
                <SkillBox src={sass} alt="sass 아이콘" lang='Sass' isBorderNone/>
                <SkillBox lang='Styled-component' isImg={false}/>
                <SkillBox src={tailwind} alt="tailwind 아이콘" lang='Tailwild CSS'/>
                <SkillBox src={redux} alt="redux 아이콘" lang='Redux'/>
                <SkillBox src={recoil} alt="recoil 아이콘" lang='Recoil'/>
                <SkillBox src={reactQuery} alt="reactQuery 아이콘" lang='React-query'/>
              </div>
            </div>

            <div>
            <h3 className='w-[80px] text-xl font-medium mb-4 bg-[#D2DAE0] text-center rounded-full'>Back</h3>
              <div className='grid grid-cols-6 gap-1 gap-y-6 divide-x-[1px] divide-[#c1c5cb] divide-dashed'>
                <SkillBox src={redux} alt="redux 아이콘" lang='Redux'/>
                <SkillBox src={recoil} alt="recoil 아이콘" lang='Recoil'/>
                <SkillBox src={reactQuery} alt="reactQuery 아이콘" lang='React-query'/>
              </div>
            </div>
          </div>     
        </div>


        {/* <div className="p-7">
          <h2 className='text-3xl mb-7'>Skill</h2>
          <div>
            front
          </div>
          <div>
            back
          </div>
        </div>

        <div className="p-7">
          <h2 className='text-3xl mb-7'>Project</h2>
          <div className='w-[550px] h-[500px] p-5 bg-white rounded-2xl shadow-lg'>
            <div className='w-full h-[280px] bg-sky-50' />
            <div>
              <div>제목</div>
              <div>기간</div>
              <div>기술</div>
            </div>
          </div>
          <div>
            back
          </div>
        </div> */}
      </main>
    </>
  )
}
