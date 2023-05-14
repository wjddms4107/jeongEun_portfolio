import Image from 'next/image';
import HomeSection from './HomeSection';
import SkillSection from './SkillSection';
import ExperienceSection from './ExperienceSection';
import ProjectSection from './ProjectSection';
import EducationSection from './EducationSection';
import EtcSection from './EtcSection';

export default function Home() {

  return (
      <main className="w-[100vw] flex flex-col items-center justify-center mt-[60px]">
        <div className="w-[1440px] h-auto flex flex-col p-8">
          <HomeSection />
          <div id="skill" >
            <SkillSection />
          </div>
          
        </div>

        <div className='w-[100vw] flex items-center justify-center bg-white'>
          <ExperienceSection />
        </div>

        <div id="project"  className="w-[1440px] h-auto flex flex-col p-8">
          <ProjectSection />
        </div>

        <div className='w-[100vw] flex items-center justify-center bg-white'>
          <div className='w-[1440px] mb-20 p-8'>
            <EducationSection />
            <EtcSection />
          </div>
        </div>
      </main>
  )
}
