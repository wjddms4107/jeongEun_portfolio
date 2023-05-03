import Image from 'next/image';
import Header from '@/components/header'
import HomeSection from './HomeSection';
import SkillSection from './SkillSection';
import ExperienceSection from './ExperienceSection';

export default function Home() {
  return (
      <main className="w-full flex flex-col items-center justify-center">
        <div className="w-[1440px] h-auto flex flex-col p-7 pt-12">
          <HomeSection />
          <SkillSection />
          <ExperienceSection />
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
  )
}
