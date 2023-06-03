import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import { cls, variants } from "@/libs/client/utils";
import CompanyDscrWrapper from '@/components/CompanyDscrWrapper';
import ProjectSkill from '@/components/ProjectSkill';
import ImgSlide from '@/components/ImgSlide';
import MyRoleDscr from '@/components/MyRoleDscr';
import mrpLogo from '@/public/mrpLogo.png';
import main1 from '@/public/main1.png';
import main2 from '@/public/main2.png';
import main3 from '@/public/main3.png';



export default function ExperienceSection(){
  const PurpleTitle = "relative right-[1px] text-2xl font-semibold text-bluePurple border-l-[2px] border-bluePurple pl-4 mt-4 mb-2"
  const ProjectSkillBgColor = "bg-lightGrayWhite dark:bg-darkLightGray200";

  const mainImages = [main1, main2, main3];

    const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2 }} 
      id="experience" 
      className='w-full mb-20 p-8 lg:w-[1440px]'
    >
      <motion.h2 variants={variants} className="text-5xl font-extrabold my-12">Work Experience</motion.h2>

      <div className="flex flex-col w-full lg:flex-row">
        <div className="m-auto min-w-[200px] mb-16 lg:pr-5 lg:m-0">
          <Image
            src={mrpLogo}
            alt="mrp 로고"
            width={200}
            height={200}
            className="rounded-[100%] dark:border-[2px] "
          />
        </div>
        <div className="border-l border-middleGray100 dark:border-darkMiddleGray100 border-dashed">
          <CompanyDscrWrapper
            company="(주) MRP Soft"
            period="2023.11 ~ 현재"
            companyDscr={`MRP Partners는 블록체인 사업을 진행하고 있으며, 안전성과 효율성을 보장하기 위한 기술 개발에 블록체인 기술을 활용하고 있습니다.`}
            myRoleDscr={`저는 신사업 개발팀에서 프론트엔드 개발자로서의 첫 걸음을 내딛었습니다. 신사업으로 시작된 거래소 프로젝트의 초기 멤버로 기술 선정부터 거래소 구축 후 운영까지 전 과정에 참여하였습니다. 이 과정에서 주니어 개발자로서의 한계를 넘어서며 주도적인 역할을 맡아 선물거래, 랜딩서비스, 스테이킹, 메인페이지 등 다양한 서비스를 개발하였습니다. \n\n` + `특히, 프론트엔드 개발자로서 반응형 디자인, 다크모드, 재사용 가능한 UI 컴포넌트, 언어에 따른 UI 변화, 데이터 캐싱 등의 다양한 기술을 구현하면서 사용자 친화적이고 직관적인 인터페이스를 개발하기 위해 늘 기획자와 디자이너와 긴밀히 대화하며 UI/UX를 개선해나갔습니다. \n\n` + `Styled-component의 theme 기능을 활용하여 일관된 디자인 시스템을 구축하고 Storybook을 활용하여 UI 컴포넌트를 효과적으로 관리하였습니다. 또한, React-Query를 사용하여 데이터 요청과 응답을 최적화하고 캐싱을 통해 사용자 경험을 향상시켰습니다. 뿐만 아니라, i18next를 이용하여 언어에 따른 UI 변화를 구현하고 Framer Motion을 활용하여 부드러운 애니메이션 효과를 적용하였습니다. 이와 함께 React-Responsive을 도입하여 다양한 기기에서도 일관된 레이아웃을 제공하고 사용자의 편의성을 고려한 반응형 디자인을 구현하였습니다.`}
          />

          <div className="mb-8">
            <div className="flex flex-row items-center">
              <h4 className={PurpleTitle}>BYDOZE 코인 거래소</h4>
              <Link href="https://bydoxe.com/" target="_blank" className='text-2xl font-semibold mt-4 mb-2 ml-2'>📣 BYDOZE 거래소 보러가기</Link>
            </div>
            <div className="ml-6">
              <div className="text-xl text-middleGray200 dark:text-darkMiddleGray200 mb-2">
                2023.02 ~ 2023.06 (프론트엔드 2명, 백엔드 3명, 디자이너 2명, 기획자 1명)
              </div>
              <div className="flex flex-wrap gap-y-1 max-w-[900px] mb-4">
                <ProjectSkill skill="react v18 " bgColor={ProjectSkillBgColor} />
                <ProjectSkill skill="typescript" bgColor={ProjectSkillBgColor}  />
                <ProjectSkill skill="react-router-dom" bgColor={ProjectSkillBgColor}  />
                <ProjectSkill skill="styled-component" bgColor={ProjectSkillBgColor} />
                <ProjectSkill skill="material-ui" bgColor={ProjectSkillBgColor} />
                <ProjectSkill skill="storyBook" bgColor={ProjectSkillBgColor} />
                <ProjectSkill skill="recoil" bgColor={ProjectSkillBgColor} />
                <ProjectSkill skill="react-query" bgColor={ProjectSkillBgColor} />
                <ProjectSkill skill="axios" bgColor={ProjectSkillBgColor} />
                <ProjectSkill skill="react-query" bgColor={ProjectSkillBgColor} />
                <ProjectSkill skill="i18next" bgColor={ProjectSkillBgColor} />
                <ProjectSkill skill="react-apexcharts" bgColor={ProjectSkillBgColor} />
                <ProjectSkill skill="framer-motion" bgColor={ProjectSkillBgColor} />
                <ProjectSkill skill="react-responsive" bgColor={ProjectSkillBgColor} />
                <ProjectSkill skill="react-slick" bgColor={ProjectSkillBgColor} />
                <ProjectSkill skill="react-toastify" bgColor={ProjectSkillBgColor} />
              </div>


              <div className="mb-4">
                <h5 className='text-2xl'>- 나의 기여</h5>
                <div className='text-lg text-middleGray900 dark:text-darkMiddleGray200'>
                  헤더, 메인 페이지, 프로필 페이지 (sms 인증, googleOTP 인증, KYC-2 인증, API 관리) <br />
                  자산 페이지 (나의 자산(현물, 선물, 나머지), 이체, 교환, 상환), 스테이킹 페이지, 랜딩서비스 페이지 <br />
                  선물거래 페이지 (포지션 오픈 및 포지션 청산)
                </div>
              </div>

              <div>
                <MyRoleDscr
                  Roletitle="1. 메인 페이지"
                  RoleUrl="https://bydoxe.com/"
                  RoleUrlDscr="메인 페이지 보러가기"
                  imgArray={mainImages}
                  troubleTitle="트러블 슈팅 : framer-motion, react-slick을 통해 생동감 있고 유창한 인터페이스 구현"
                  troubleDscrArray={[
                    {
                      title: "사용자를 사로잡는 인터페이스 구현하기",
                      dscr:
                        `사용자를 사로잡는 인터페이스를 구현하기 위해 framer-motion, react-slick을 도입하였습니다. \n` +
                        `페이지를 보면 중간중간 스크롤 fade 이벤트를 넣어 ... \n` +
                        `BYDOXE만의 특별함 섹션은 순차적으로 했다가 ...`,
                    },
                  ]}
                />

                <MyRoleDscr
                  Roletitle="2. 헤더"
                  RoleUrl="https://bydoxe.com/"
                  RoleUrlDscr="헤더 보러가기"
                  imgArray={mainImages}
                  troubleTitle="트러블 슈팅 : recoil로 헤더에서 로그인유무 및 언어 상태관리, subMenu UI 재활용"
                  troubleDscrArray={[
                    {
                      title: "recoil로 헤더에서 로그인유무 및 언어 상태관리",
                      dscr:
                        `사용자를 사로잡는 인터페이스를 구현하기 위해 framer-motion, react-slick을 도입하였습니다. \n` +
                        `페이지를 보면 중간중간 스크롤 fade 이벤트를 넣어 ... \n` +
                        `BYDOXE만의 특별함 섹션은 순차적으로 했다가 ...`,
                    },
                    {
                      title: "subMenu UI 재활용",
                      dscr:
                        `사용자를 사로잡는 인터페이스를 구현하기 위해 framer-motion, react-slick을 도입하였습니다. \n` +
                        `페이지를 보면 중간중간 스크롤 fade 이벤트를 넣어 ... \n` +
                        `BYDOXE만의 특별함 섹션은 순차적으로 했다가 ...`,
                    },
                  ]}
                />

                <MyRoleDscr
                  Roletitle="3. 프로필 페이지 : 나의 자산(전체), 이체, 교환, 상환"
                  RoleUrl="https://bydoxe.com/mypage/profile"
                  RoleUrlDscr="프로필 페이지 보러가기"
                  imgArray={mainImages}
                  troubleTitle="트러블 슈팅 : 국가 선택 드롭다운, 신분증 이미지 업로드, googleOTP 인증"
                  troubleDscrArray={[
                    {
                      title: "recoil로 헤더에서 로그인유무 및 언어 상태관리",
                      dscr:
                        `사용자를 사로잡는 인터페이스를 구현하기 위해 framer-motion, react-slick을 도입하였습니다. \n` +
                        `페이지를 보면 중간중간 스크롤 fade 이벤트를 넣어 ... \n` +
                        `BYDOXE만의 특별함 섹션은 순차적으로 했다가 ...`,
                    },
                    {
                      title: "subMenu UI 재활용",
                      dscr:
                        `사용자를 사로잡는 인터페이스를 구현하기 위해 framer-motion, react-slick을 도입하였습니다. \n` +
                        `페이지를 보면 중간중간 스크롤 fade 이벤트를 넣어 ... \n` +
                        `BYDOXE만의 특별함 섹션은 순차적으로 했다가 ...`,
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className={PurpleTitle}>인플루언서 페이지</h4>
            <div className="ml-6">
              <div className="text-xl text-middleGray200 dark:text-darkMiddleGray200 mb-2">
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
