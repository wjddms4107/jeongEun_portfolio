import Image from 'next/image';
import { motion } from "framer-motion";
import { variants } from "@/libs/client/utils";
import CompanyDscrWrapper from '@/components/CompanyDscrWrapper';
import ProjectSkill from '@/components/ProjectSkill';
import mrpLogo from '@/public/mrpLogo.png';

export default function ExperienceSection(){
  const PurpleTitle = "relative right-[1px] text-2xl font-semibold text-bluePurple border-l-[2px] border-bluePurple pl-4 mt-4 mb-2"

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2 }} 
      id="experience" 
      className='w-full mb-20 p-8 lg:w-[1440px]'
    >
      <motion.h2 variants={variants} className="text-5xl font-extrabold my-12">Experience</motion.h2>

      <div className="flex flex-col w-full lg:flex-row">
        <div className="m-auto min-w-[200px] mb-16 lg:pr-5 lg:m-0">
          <Image
            src={mrpLogo}
            alt="mrp 로고"
            width={200}
            height={200}
            className="rounded-[100%]"
          />
        </div>
        <div className="border-l border-middleGray100 border-dashed">
          <CompanyDscrWrapper
            company="(주) MRP Soft"
            period="2023.11 ~ 현재"
            companyDscr={`MRP Partners는 블록체인 사업을 진행하고 있으며, 안전성과 효율성을 보장하기 위한 기술 개발에 블록체인 기술을 활용하고 있습니다. \n\n` + `저는 회사의 IT본부에 속한 신사업 개발팀에서 프론트엔드 개발자로 근무하고 있습니다. 신사업으로 시작된 거래소 프로젝트의 초기 멤버로 합류하여 기술 선정부터 거래소 구축 후 운영까지 함께 참여했습니다. 이 과정에서 주니어 개발자로서의 한계를 넘어서며 주도적인 역할을 맡아 다양한 기능과 기술을 구현하였습니다.`}
            myRoleDscr={`특히, 프론트엔드 개발을 담당하면서 storyBook, react-responsive, framer-motion 등을 도입하여 사용자 경험을 개선하고 확장성 있는 아키텍처를 구축하여 개발 효율성을 향상시켰습니다. 뿐만 아니라, Recoil과 React Query와 같은 상태 관리 및 데이터 요청 라이브러리를 도입하여 프로젝트의 성능과 유지 보수성을 향상시키는 데에도 주력했습니다. Recoil을 활용하여 전역 상태 관리를 간편하게 구현하고, React Query를 사용하여 비동기 데이터 요청과 캐싱을 효율적으로 처리하였습니다. 이를 통해 사용자 경험을 개선하고, 데이터 흐름을 효과적으로 관리하여 애플리케이션의 성능을 향상시키는 데에 기여하였습니다.`}
          />

          <div className="mb-8">
            <h4 className={PurpleTitle}>BYBIX 코인 거래소</h4>
            <div className="ml-6">
              <div className="text-xl text-middleGray200 mb-2">
                2023.02 ~ 2023.06
              </div>
              <div className="flex flex-wrap gap-y-1 max-w-[900px] mb-4">
                <ProjectSkill skill="react v18 " bgColor="bg-lightGrayWhite" />
                <ProjectSkill skill="typescript" bgColor="bg-lightGrayWhite"  />
                <ProjectSkill skill="react-router-dom 6.4.3" bgColor="bg-lightGrayWhite"  />
                <ProjectSkill skill="styled-component" bgColor="bg-lightGrayWhite" />
                <ProjectSkill skill="material-ui" bgColor="bg-lightGrayWhite" />
                <ProjectSkill skill="storyBook" bgColor="bg-lightGrayWhite" />
                <ProjectSkill skill="recoil" bgColor="bg-lightGrayWhite" />
                <ProjectSkill skill="react-query" bgColor="bg-lightGrayWhite" />
                <ProjectSkill skill="i18next" bgColor="bg-lightGrayWhite" />
                <ProjectSkill skill="framer-motion" bgColor="bg-lightGrayWhite" />
                <ProjectSkill skill="apexcharts" bgColor="bg-lightGrayWhite" />
                <ProjectSkill skill="react-slick" bgColor="bg-lightGrayWhite" />
                <ProjectSkill skill="react-responsive" bgColor="bg-lightGrayWhite" />
              </div>


              <div className="mb-4">
                나의 기여 : 메인 페이지, 헤더, 프로필 페이지, 자산 페이지, 스테이킹 페이지, 랜딩서비스 페이지
              </div>
              <div>
                <div className="leading-7">
                  - 메인 페이지 : framer Motion, react-slick을 통해 생동감 있고 유창한 인터페이스를 구현하여 사용자의 참여도를 높임
                </div>
                <div className="leading-7">
                  - 헤더 : recoil로 헤더에서 로그인유무가 상태관리 되도록 구현, react-router-dom으로 페이지 이동 
                </div>
                <div className="leading-7">
                  - 프로필 페이지 : SMS인증, googleOTP, KYC 고급 인증, API 관리 구현
                </div>
                <div className="leading-7">
                  - 자산 페이지 : 보유자산 현황과 증가하고 있는 자산, 현물과 선물 그리고 나머지 계좌 테이블, 자산 교환 및 이체 구현
                </div>
                <div className="leading-7">
                  - 스테이킹 페이지 : 
                </div>
                <div className="leading-7">
                  - 랜딩서비스 페이지 : 
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className={PurpleTitle}>인플루언서 페이지</h4>
            <div className="ml-6">
              <div className="text-xl text-middleGray200 mb-2">
                2023.02 ~ 2023.06
              </div>
              <div className="mb-4">
                처음부터 끝까지 함께 한 코인거래소 메인, 어쩌고 저쩌고를 제가
                했습니당
              </div>
              <div className="leading-7">
                - 메인페이지, 자산페이지, 등에 기여
              </div>
              <div className="leading-7">
                - 메인페이지, 자산페이지, 등에 기여
              </div>
              <div className="leading-7">
                - 메인페이지, 자산페이지, 등에 기여
              </div>
              <div className="leading-7">
                - 메인페이지, 자산페이지, 등에 기여
              </div>
              <div className="leading-7">
                - 메인페이지, 자산페이지, 등에 기여
              </div>
            </div>
          </div>

          <div>
            <h4 className={PurpleTitle}>각종 랜딩페이지</h4>
            <div className="ml-6">
              <div className="text-xl text-middleGray200 mb-2">
                2023.02 ~ 2023.06
              </div>
              <div className="mb-4">
                처음부터 끝까지 함께 한 코인거래소 메인, 어쩌고 저쩌고를 제가
                했습니당
              </div>
              <div className="leading-7">
                - 메인페이지, 자산페이지, 등에 기여
              </div>
              <div className="leading-7">
                - 메인페이지, 자산페이지, 등에 기여
              </div>
              <div className="leading-7">
                - 메인페이지, 자산페이지, 등에 기여
              </div>
              <div className="leading-7">
                - 메인페이지, 자산페이지, 등에 기여
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
