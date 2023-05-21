import HomeSection from './HomeSection';
import SkillSection from './SkillSection';
import ExperienceSection from './ExperienceSection';
import ProjectSection from './ProjectSection';
import EducationSection from './EducationSection';
import EtcSection from './EtcSection';

export default function Home() {
  return (
      <main className="w-[100vw] flex flex-col items-center justify-center mt-[60px]">
        <div className="w-screen h-auto flex flex-col p-8 lg:w-[1440px]">
          <HomeSection />
          <div id="skill" >
            <SkillSection />
          </div>
        </div>

        <div className='w-[100vw] flex items-center justify-center bg-white dark:bg-black'>
          <ExperienceSection />
        </div>

        <div id="project" className="w-screen h-auto flex flex-col p-8 lg:w-[1440px]">
          <ProjectSection />
        </div>

        <div className='w-[100vw] flex items-center justify-center bg-white dark:bg-black'>
          <div className='w-screen mb-20 p-8 lg:w-[1440px]'>
            <EducationSection />
            <EtcSection />
          </div>
        </div>
      </main>
  )
}
