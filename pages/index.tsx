import Header from '@/components/header'
import Image from 'next/image';
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

import mrpLogo from '@/public/mrpLogo.png';

import CompanyDscrWrapper from '@/components/CompanyDscrWrapper';
import ProjectSkill from '@/components/projectSkill';







export default function Home() {
  return (
      <main className="w-full flex flex-col items-center justify-center">
        <div className="w-[1440px] h-auto flex flex-col p-7 pt-12">
          <div className='flex align-middle justify-between'>
            <h1 className="w-3/5 items-center text-[50px] leading-[1.3] font-semibold text-[#2f3c49] font-Josefin m-auto">이쁘게 개발하는 걸 좋아하는<br />프론트엔드 개발자 노정은입니다.</h1>
            <div className="w-2/5 bg-white h-[500px] rounded-2xl shadow-lg">이미지 둥글게</div>
          </div>

          <div className='flex flex-col mt-24 mb-14'>
            <h2 className='text-5xl font-extrabold mb-6 text-center'>About me<span className="absolute left-[58%] text-lg p-2 text-[#FCFCFC] bg-[#FD7FD4] rounded-[4px] cursor-pointer hover:bg-[#f151bc]">이력서 다운로드</span></h2>
            <div className='flex align-middle justify-center space-x-8 text-[#585d63]'>
              <div className='text-xl'><span className='border-r-2 border-[#B680F9] mr-2 pr-2'>연락처</span>010 7704 4107</div>
              <div className='text-xl'><span className='border-r-2 border-[#B680F9] mr-2 pr-2'>이메일</span> wjddms4107@gmail.com</div>
              <div className='text-xl'><span className='border-r-2 border-[#B680F9] mr-2 pr-2'>블로그</span> www.naver.com</div>
              <div className='text-xl'><span className='border-r-2 border-[#B680F9] mr-2 pr-2'>깃허브</span> www.naver.com</div>
            </div>
          </div>    

          <div className='h-[400px] flex flex-col mt-10 mb-20 p-7 bg-[#e9eaeb] rounded-2xl shadow-lg'>
            <h2 className='text-5xl font-extrabold mb-8'>Skill</h2>

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
                <SkillBox src={firebase} alt="firebase 아이콘" lang='Firebase'/>
                <SkillBox src={mongodb} alt="mongodb 아이콘" lang='Mongodb'/>
                <SkillBox src={prisma} alt="prisma 아이콘" lang='Prisma'/>
              </div>
            </div>
          </div>     

          <div>
            <h2 className='text-5xl font-extrabold mb-12'>Experience</h2>

            <div className='flex w-full' >
              <div className='w-[41%] pr-6'>
                <Image src={mrpLogo} alt="mrp 로고" width={200} height={200} className='rounded-[100%]' /> 
              </div>
              <div className='border-l border-[#C1C5CB] border-dashed'>
                <CompanyDscrWrapper company="(주) MRP Soft" period="2023.11 ~ 현재" companyDscr="MRP는 ~~입니다. 어쩌고 설명..." myRoleDscr="제가 한 역할은.. (예시) 노래방을 즐기는 사람의 입장에서 자주 부르는 노래를 간편하게 관리할 수 있도록 도와주는 웹사이트입니다. 제 취미가 아이디어의 원천이었고, 저와 취미가 같은 사람들에게 도움이 되었으면 하는 마음으로 개발했습니다. Firebase 서비스를 처음 사용해봤다는 것만으로도 의미가 있었지만, 그 과정에서 OAuth 2.0의 개념을 한 번 더 깊게 다지고 NoSQL을 실제로 사용해볼 수 있었다는 점에서 더욱 의미가 있었습니다."  />
                
                <div className='mb-8'>
                  <h4 className='text-2xl font-semibold text-[#645BFF] border-l-[3px] border-[#645BFF] pl-4 mt-4 mb-2.5'>UBPEX 코인 거래소</h4>
                  <div className='ml-6'>
                    <div className='mb-2 '>
                      <ProjectSkill skill="react"/>
                      <ProjectSkill skill="typescript"/>
                      <ProjectSkill skill="styled-component"/>
                      <ProjectSkill skill="material-ui"/>
                      <ProjectSkill skill="react-query"/>
                    </div>
                    <div className="text-xl text-[#808D9A] mb-2">2023.02 ~ 2023.06</div>
                    
                    <div className="mb-4">처음부터 끝까지 함께 한 코인거래소 메인, 어쩌고 저쩌고를 제가 했습니당</div>
                    <div>
                      <div className='leading-7'>- 메인페이지, 자산페이지, 등에 기여</div>
                      <div className='leading-7'>- recoil, react-query 기술 선정 및 도입</div>
                      <div className='leading-7'>- 메인페이지, 자산페이지, 등에 기여</div>
                      <div className='leading-7'>- 메인페이지, 자산페이지, 등에 기여</div>
                      <div className='leading-7'>- 메인페이지, 자산페이지, 등에 기여</div>  
                    </div>
                    
                  </div>
                </div>

                <div>
                  <h4 className='text-2xl font-semibold text-[#645BFF] border-l-[3px] border-[#645BFF] pl-4 my-4'>인플루언서 페이지</h4>
                  <div className='ml-6'>
                    <div className="text-xl text-[#808D9A] mb-2">2023.02 ~ 2023.06</div>
                    <div className="mb-4">처음부터 끝까지 함께 한 코인거래소 메인, 어쩌고 저쩌고를 제가 했습니당</div>
                    <div className='leading-7'>- 메인페이지, 자산페이지, 등에 기여</div>
                    <div className='leading-7'>- 메인페이지, 자산페이지, 등에 기여</div>
                    <div className='leading-7'>- 메인페이지, 자산페이지, 등에 기여</div>
                    <div className='leading-7'>- 메인페이지, 자산페이지, 등에 기여</div>
                    <div className='leading-7'>- 메인페이지, 자산페이지, 등에 기여</div>  
                  </div>
                </div>

                <div>
                  <h4 className='text-2xl font-semibold text-[#645BFF] border-l-[3px] border-[#645BFF] pl-4 my-4'>각종 랜딩페이지</h4>
                  <div className='ml-6'>
                    <div className="text-xl text-[#808D9A] mb-2">2023.02 ~ 2023.06</div>
                    <div className="mb-4">처음부터 끝까지 함께 한 코인거래소 메인, 어쩌고 저쩌고를 제가 했습니당</div>
                    <div className='leading-7'>- 메인페이지, 자산페이지, 등에 기여</div>
                    <div className='leading-7'>- 메인페이지, 자산페이지, 등에 기여</div>
                    <div className='leading-7'>- 메인페이지, 자산페이지, 등에 기여</div>
                    <div className='leading-7'>- 메인페이지, 자산페이지, 등에 기여</div>
                    <div className='leading-7'>- 메인페이지, 자산페이지, 등에 기여</div>  
                  </div>
                </div>
                

                
                
                
              </div>
            </div>
          </div>
        </div>

        {/* <div>
            <h2 className='text-5xl font-extrabold mb-12'>Experience</h2>
            <div>
              <h3 className="text-4xl font-bold mb-4">MRP Soft</h3>
              <div className='text-[25px] text-[#152F49] mb-12'>노래방을 즐기는 사람의 입장에서 자주 부르는 노래를 간편하게 관리할 수 있도록 도와주는 웹사이트입니다. 제 취미가 아이디어의 원천이었고, 저와 취미가 같은 사람들에게 도움이 되었으면 하는 마음으로 개발했습니다. Firebase 서비스를 처음 사용해봤다는 것만으로도 의미가 있었지만, 그 과정에서 OAuth 2.0의 개념을 한 번 더 깊게 다지고 NoSQL을 실제로 사용해볼 수 있었다는 점에서 더욱 의미가 있었습니다.</div>
              <div>
                <div>
                  <div className='text-3xl'>UBPEX 코인 거래소</div>
                  <div className='text-xl'>23.02 ~ 23.05</div>
                  <div className='text-xl'>백엔드 3명, </div>

                </div>
                

              </div>
              
            </div>
          </div> */}



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
  )
}
