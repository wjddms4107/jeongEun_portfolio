import Seo from '@/components/Seo';
import HomeSection from './HomeSection';
import IntroduceSection from './IntroduceSection';
import SkillSection from './SkillSection';
import ExperienceSection from './ExperienceSection';
import ProjectSection from './ProjectSection';
import EducationSection from './EducationSection';
import EtcSection from './EtcSection';
import { Project } from "@prisma/client";
import client from "@/libs/server/client";



interface IProps {
  projects: Project[];
}

export default function Home({projects}:IProps) {
  return (
      <>
        <Seo title="Portfolio" />
        <div className="w-screen h-auto flex flex-col p-8 lg:w-[1440px]">
          <HomeSection />
          <IntroduceSection />
          <div id="skill" >
            <SkillSection />
          </div>
        </div>

        <div className='w-[100vw] flex items-center justify-center bg-white dark:bg-black'>
          <ExperienceSection />
        </div>

        <div id="project" className="w-screen h-auto flex flex-col p-8 lg:w-[1440px]">
          <ProjectSection projects={projects} />
        </div>

        <div className='w-[100vw] flex items-center justify-center bg-white dark:bg-black'>
          <div className='w-screen mb-20 p-8 lg:w-[1440px]'>
            <EducationSection />
            <EtcSection />
          </div>
        </div>
      </>
  )
}

export async function getStaticProps() {
  const projects = await client.project.findMany();


  console.log('projects:',projects)

  const newData = projects.map((project) => {
    const srcArray: string[] = project.src.split(',');
    const newArray = srcArray.map((src:string) => src.replace(/^"(.*)"$/, '$1'));

    return {
      ...project,
      src: newArray ,
    };
  });
  
  return {
    props: {
      projects: newData,
    },
  };
}
