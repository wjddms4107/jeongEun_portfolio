import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { variants } from "@/libs/client/utils";
import CompanyDscrWrapper from "@/components/CompanyDscrWrapper";
import ProjectSkill from "@/components/ProjectSkill";
import MyRoleDscr from "@/components/MyRoleDscr";
import mrpLogo from "@/public/mrpLogo.png";
import main1 from "@/public/main1.png";
import main2 from "@/public/main2.png";
import main3 from "@/public/main3.png";
import header1 from "@/public/header1.png";
import header2 from "@/public/header2.png";
import header3 from "@/public/header3.png";
import profile1 from "@/public/profile1.png";
import profile2 from "@/public/profile2.png";
import profile3 from "@/public/profile3.png";
import asset1 from "@/public/asset1.png";
import asset2 from "@/public/asset2.png";
import asset3 from "@/public/asset3.png";
import asset4 from "@/public/asset4.png";
import asset5 from "@/public/asset5.png";
import lending1 from "@/public/lending1.png";
import lending2 from "@/public/lending2.png";
import lending3 from "@/public/lending3.png";
import lending4 from "@/public/lending4.png";
import staking1 from "@/public/staking1.png";
import staking2 from "@/public/staking2.png";
import staking3 from "@/public/staking3.png";
import futures1 from "@/public/futures1.png";
import futures2 from "@/public/futures2.png";
import futures3 from "@/public/futures3.png";
import futures4 from "@/public/futures4.png";

export default function ExperienceSection() {
  const PurpleTitle =
    "relative right-[1px] text-xl lg:text-2xl font-semibold text-bluePurple border-l-[2px] border-bluePurple pl-3 lg:pl-4 lg:mt-4 lg:mb-2";
  const ProjectSkillBgColor = "bg-lightGrayWhite dark:bg-darkLightGray200";

  const mainImages = [main1, main2, main3];
  const headerImages = [header1, header2, header3];
  const profileImages = [profile1, profile2, profile3];
  const assetImages = [asset1, asset2, asset3, asset4, asset5];
  const stakingImages = [staking1, staking2, staking3];
  const lendingImages = [lending1, lending2, lending3, lending4];
  const futuresImages = [futures1, futures2, futures3, futures4];

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.1 }}
      id="experience"
      className="w-full mb-5 lg:mb-20 p-4 lg:p-7 lg:w-[1440px]"
    >
      <motion.h2 variants={variants} className="text-2xl lg:text-5xl font-extrabold my-12">
        Work Experience
      </motion.h2>

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
        <div className="border-l border-middleGray100 border-dashed dark:border-darkMiddleGray100 ">
          <CompanyDscrWrapper
            company="(주) MRP Soft"
            period="2023.11 ~ 현재"
            companyDscr={`MRP Partners는 블록체인 사업을 진행하고 있으며, 안전성과 효율성을 보장하기 위한 기술 개발에 블록체인 기술을 활용하고 있습니다.`}
            myRoleDscr={
              `저는 신사업 개발팀에서 프론트엔드 개발자로서의 첫 걸음을 내딛었습니다. 신사업으로 시작된 거래소 프로젝트의 초기 멤버로 기술 선정부터 거래소 구축 후 운영까지 전 과정에 참여하였습니다. 이 과정에서 주니어 개발자로서의 한계를 넘어서며 주도적인 역할을 맡아 선물거래, 랜딩서비스, 스테이킹, 메인페이지 등 다양한 서비스를 개발하였습니다. \n\n` +
              `특히, 프론트엔드 개발자로서 반응형 디자인, 다크모드, 재사용 가능한 UI 컴포넌트, 언어에 따른 UI 변화, 데이터 캐싱 등의 다양한 기술을 구현하면서 사용자 친화적이고 직관적인 인터페이스를 개발하기 위해 늘 기획자와 디자이너와 긴밀히 대화하며 UI/UX를 개선해나갔습니다. \n\n` +
              `Styled-component의 theme 기능을 활용하여 일관된 디자인 시스템을 구축하고 Storybook을 활용하여 UI 컴포넌트를 효과적으로 관리하였습니다. 또한, React-Query를 사용하여 데이터 요청과 응답을 최적화하고 캐싱을 통해 사용자 경험을 향상시켰습니다. 뿐만 아니라, i18next를 이용하여 언어에 따른 UI 변화를 구현하고 Framer Motion을 활용하여 부드러운 애니메이션 효과를 적용하였습니다. 이와 함께 React-Responsive을 도입하여 다양한 기기에서도 일관된 레이아웃을 제공하고 사용자의 편의성을 고려한 반응형 디자인을 구현하였습니다.`
            }
          />

          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center">
              <h4 className={PurpleTitle}>BYDOZE 코인 거래소</h4>
              <Link
                href="https://bydoxe.com/"
                target="_blank"
                className="text-base lg:text-2xl font-semibold mt-4 mb-2 ml-2"
              >
                📣 BYDOZE 거래소 보러가기
              </Link>
            </div>
            <div className="ml-3 lg:ml-6">
              <div className="text-base lg:text-xl text-middleGray200 dark:text-darkMiddleGray200 mb-2">
                2023.02 ~ 2023.06 (프론트엔드 2명, 백엔드 3명, 디자이너 2명, 기획자 1명)
              </div>
              <div className="flex flex-wrap gap-y-1 max-w-[900px] mb-4">
                <ProjectSkill skill="react v18 " bgColor={ProjectSkillBgColor} />
                <ProjectSkill skill="typescript" bgColor={ProjectSkillBgColor} />
                <ProjectSkill skill="react-router-dom" bgColor={ProjectSkillBgColor} />
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

              <div className="mb-4 lg:mb-8">
                <h5 className="text-xl lg:text-2xl">- 나의 기여</h5>
                <div className="text-base lg:text-lg text-middleGray900 dark:text-darkMiddleGray200">
                  메인 페이지, 헤더, 프로필 페이지 (sms 인증, googleOTP 인증, KYC-2 인증, API 관리){" "}
                  <br />
                  자산 페이지 (나의 자산(전체), 이체, 교환, 상환), 스테이킹 페이지, 랜딩서비스
                  페이지 <br />
                  선물거래 USDT-M,COIN-M 페이지 (포지션 오픈 및 청산, 자산, 증거금 )
                </div>
              </div>

              <div>
                <MyRoleDscr
                  Roletitle="1. 메인 페이지 (페이지 기여도: 100%)"
                  RoleUrl="https://bydoxe.com/"
                  RoleUrlDscr="메인 페이지 보러가기"
                  imgArray={mainImages}
                  troubleTitle="트러블 슈팅 : framer-motion, react-slick을 통해 생동감 있고 유창한 인터페이스 구현"
                  troubleDscrArray={[
                    {
                      title: "framer-motion, react-slick을 통해 생동감 있고 유창한 인터페이스 구현",
                      dscr:
                        `메인 페이지는 사용자가 처음 접하는 페이지로, 사용자를 사로잡는 인터페이스를 구현하기 위해 framer-motion과 react-slick을 도입했습니다. \n` +
                        `framer-motion을 사용하여 중간 중간에 스크롤 fade 이벤트를 적용했습니다. \n` +
                        `또한, react-slick을 활용하여 거래소의 이벤트 배너를 소개하는 이미지 슬라이드를 구현했는데 \n` +
                        `디자이너의 의도에 맞게 센터에 오는 배너는 밝아지고, 양 옆의 배너는 서서히 어둡게 변하도록 커스텀했습니다. \n` +
                        `이처럼 디자이너와의 소통을 통해 의도와 컨셉을 정확히 이해하고, 그것을 코드로 구현하기 위해 노력했습니다. \n` +
                        `이에 UI 요소의 디자인, 애니메이션 효과, 컬러 팔레트 등을 조율하고 조정하여 사용자에게 직관적이고 매력적인 인터페이스를 제공할 수 있었습니다.`,
                    },
                  ]}
                />

                <MyRoleDscr
                  Roletitle="2. 헤더 (페이지 기여도: 100%)"
                  RoleUrl="https://bydoxe.com/"
                  RoleUrlDscr="헤더 보러가기"
                  imgArray={headerImages}
                  troubleTitle="트러블 슈팅 : recoil, localStorage로 로그인유무 및 언어 상태관리, subMenu UI 재활용"
                  troubleDscrArray={[
                    {
                      title: "recoil로 헤더에서 로그인유무 및 언어 상태관리",
                      dscr:
                        `헤더는 웹 전반에 걸쳐 중요한 역할을 담당하고 있으며, 로그인 여부와 언어 선택과 같은 상태 관리를 다루고 있습니다. \n` +
                        `모바일과 웹 환경에서 다르게 보여져야 했기 때문에 react-responsive을 사용하여 모바일에는 MobileHeader, 웹에는 DesktopHeader를 보여주었습니다.  \n` +
                        `이렇게 함으로써 사용자에게 최적화된 UI/UX를 제공할 수 있었습니다. \n` +
                        `또한 로그인 여부와 언어 선택은 Recoil 상태를 활용하여 관리하였는데 \n` +
                        `Recoil 상태가 새로고침되지 않도록 로컬 스토리지에 해당 상태를 저장하여 유지하였습니다. \n` +
                        `이로인해 사용자는 로그인 상태를 유지하고 이전에 선택한 언어 설정도 유지할 수 있었습니다.`,
                    },
                    {
                      title: "subMenu UI 재활용",
                      dscr:
                        `헤더의 subMenu는 여러번 사용되는 UI 요소로서, 이를 재활용하기 위해 해당 부분을 컴포넌트화하였습니다. \n` +
                        `이에 변경 또는 업데이트가 필요한 경우에도 한 곳에서 수정하여 모든 사용처에 적용할 수 있게 했고 \n` +
                        `컴포넌트화된 subMenu는 필요한 props를 받아서 동적으로 데이터를 표시하고 이벤트를 처리할 수 있도록 했습니다. \n` +
                        `이를 통해 유연하게 다양한 상황에 맞춰서 subMenu를 활용할 수 있게 되었습니다.`,
                    },
                  ]}
                />

                <MyRoleDscr
                  Roletitle="3. 프로필 페이지 : sms 인증, googleOTP 인증, KYC-2 인증, API 관리 (페이지 기여도: 50%)"
                  RoleUrl="https://bydoxe.com/mypage/profile"
                  RoleUrlDscr="프로필 페이지 보러가기"
                  imgArray={profileImages}
                  troubleTitle="트러블 슈팅 : 국가 선택 드롭다운 및 국가 검색, 신분증 이미지 프리뷰 및 업로드, googleOTP 인증"
                  troubleDscrArray={[
                    {
                      title: "국가 선택 드롭다운 및 국가 검색 기능",
                      dscr:
                        `SMS 인증 및 KYC 인증을 구현하는 과정에서 국가 선택을 위한 드롭다운 및 국가 검색 기능을 구현하였습니다. \n` +
                        `자료 조사를 통해 Material UI 라이브러리에서 제공하는 객체 배열을 활용했습니다. \n` +
                        `사용자가 국가를 선택하면 e.currentTarget으로 해당 국가의 이미지, 국가 전화 코드, 국가명이 화면에 동적으로 표시되도록 구현했습니다. \n` +
                        `또한, 사용자들이 원하는 국가를 빠르게 찾을 수 있도록 국가 검색 기능도 추가했고 \n` +
                        `여러곳에서 사용할 수 있도록 컴포넌트화 햤습니다.`,
                    },
                    {
                      title: "KYC-2 인증 - 신분증 이미지 프리뷰 및 업로드 기능",
                      dscr:
                        `프로필 페이지에서 KYC-2 인증을 위해 신분증 이미지 업로드 기능을 구현하였습니다. \n` +
                        `사용자는 신분증 이미지를 선택하여 업로드할 수 있으며, 수정 및 삭제도 가능하도록 했습니다. \n` +
                        `업로드하면 MAX_FILE_SIZE를 초과하는지 검사하고 FileReader를 사용하여 이미지 파일을 미리보기용 데이터 URL로 변환하여 상태를 업데이트합니다. \n` +
                        `이후 최종 확인 버튼을 누르면 FormData를 생성하여 파일을 POST 요청으로 서버로 전송되어 인증 과정에서 사용됩니다. \n` +
                        `또한, 컴포넌트화되어 이미지 업로드가 필요한 여러 곳에서 사용할 수 있도록 구현했습니다.`,
                    },
                    {
                      title: "googleOTP 인증",
                      dscr:
                        `Google OTP 인증을 구현하는 과정에서 백엔드 개발자와의 원활한 소통이 필요했습니다. \n` +
                        `인증 코드를 정확히 받아오고 구현했음에도 불구하고 "잘못된 인증"이라는 오류가 계속 발생했습니다.  \n` +
                        `이 문제는 내가 실수한 것인지, 백엔드가 실수한 것인지 명확하지 않았습니다. \n` +
                        `결과적으로, step1에서 step2로 진입하면 인증을 하지 않아도 step1의  비밀 키(secret key)가 변경되기 때문에, \n` +
                        `뒤로가기를 누르거나 페이지를 이동하면 이전의 Google OTP 인증이 유효하지 않다는 사실을 발견했습니다. \n` +
                        `이를 해결하기 위해 백엔드에서는 이전 비밀 키(old secret key)와 새 비밀 키(new secret key)를 모두 확인하여 처리할 수 있었고 \n` +
                        `이 경험을 통해 소통의 중요성을 몸소 깨닫게 되었습니다. \n` +
                        `상호 간의 의사소통과 원활한 협업은 프로젝트의 성공과 품질을 보장하는 핵심적인 역할을 수행한다는 것을 깨달았습니다.`,
                    },
                  ]}
                />

                <MyRoleDscr
                  Roletitle="4. 자산 페이지 : 나의 자산(전체), 이체, 교환, 상환 (페이지 기여도: 70%)"
                  RoleUrl="https://bydoxe.com/asset/myassets/spot"
                  RoleUrlDscr="자산 페이지 보러가기"
                  imgArray={assetImages}
                  troubleTitle="트러블 슈팅 : 계좌 테이블 구현 및 커스텀, 이체 페이지 진입 flow에 따른 드롭다운 default"
                  troubleDscrArray={[
                    {
                      title: "계좌 테이블 구현 및 커스텀",
                      dscr:
                        `나의 자산을 표시하기 위해 현물 계좌, 선물 계좌, 스테이킹 계좌 등 여러 상태를 보여주는 테이블이 필요했습니다. \n` +
                        `이를 위해 Material UI의 Table을 커스텀하여 구현하였습니다. \n` +
                        `백엔드로부터 받아오는 각 자산의 데이터 키 값이 다양하여 테이블 로직을 컴포넌트화하기 어려웠지만 \n` +
                        `현물 계좌, 선물 계좌, 스테이킹 계좌 등에 사용되는 테이블은 모두 동일한 레이아웃을 가지고 있었기에 \n` +
                        `효율적인 관리를 위해 공통된 테이블 스타일을 src > styles > tableStyles.ts에서 관리하여 일관된 스타일을 적용할 수 있었습니다. \n` +
                        `이를 통해 테이블 컴포넌트의 관리와 유지보수를 용이하게 했고 계좌 테이블의 구현과 커스터마이징을 통해 다양한 자산의 시각화를 가능하게 하였습니다.\n` +
                        `더불어 모든 자산 테이블에서 쓰이는 필터기능은 hook으로 만들어 재사용성을 높였습니다.`,
                    },
                    {
                      title: "이체 페이지 진입 flow에 따른 드롭다운 default",
                      dscr:
                        `이체 페이지에 접근하는 플로우에 따라 "출금 계정"과 "입금 계정" 드롭다운과 암호화폐 드롭다운의 기본값을 다르게 설정해야 했습니다. \n` +
                        `예를 들어, '현물 계좌' 테이블에서 '이체' 버튼을 클릭하여 이체 페이지에 진입한 경우, \n` +
                        `출금 계정"은 'SPOT'으로 설정되어야 하고, "입금 계정"은 'USDT-M'으로 설정되어야 합니다. \n` +
                        `또한, 암호화폐 드롭다운은 선택된 테이블 행의 코인으로 설정되어야 합니다. \n` +
                        `이렇듯 플로우에 따라 다른 값을 기본값을 설정해주어야 했습니다.\n` +
                        `이러한 로직을 구현하기 위해 Recoil을 사용하여 출입금 상태를 관리하는 transfersDropItemAtom과 \n` +
                        `암호화폐 코인을 저장하는 transferCoinAtom을 활용했습니다. \n` +
                        `각 플로우에서 이체 페이지로 진입할 때 setTransferDropItem 및 setTransferCoin을 사용하여 해당 상태를 업데이트하고 관리할 수 있었습니다. \n` +
                        `이를 통해 이체 페이지의 기본값을 유동적으로 설정하고 관리할 수 있었습니다.`,
                    },
                  ]}
                />

                <MyRoleDscr
                  Roletitle="5. 스테이킹 페이지 (페이지 기여도: 100%)"
                  RoleUrl="https://bydoxe.com/staking"
                  RoleUrlDscr="스테이킹 페이지 보러가기"
                  imgArray={stakingImages}
                  troubleTitle="트러블 슈팅 : 상태 전달을 고려한 효율적인 설계로 사용자 경험 향상시키기, stacked card slider 구현"
                  troubleDscrArray={[
                    {
                      title: "상태 전달을 고려한 효율적인 설계로 사용자 경험 향상시키기",
                      dscr:
                        `최상위 부모 컴포넌트인 InProgressStakingSection에서 모든 상태를 관리하여 하위 컴포넌트로 상태를 전달하는 설계를 했습니다.\n` +
                        `이로써 하위 컴포넌트인 테이블 컴포넌트 InProgressStakingDesktop(모바일에서는 InProgressStakingMobile)와 \n` +
                        `모달 컴포넌트인 StakingModal에 효율적으로 상태를 전달할 수 있었습니다.  \n` +
                        `그리고 테이블 리스트를 클릭하면 해당 스테이킹의 디테일 정보를 보여주는 TableDetail 컴포넌트도 구현했습니다. \n` +
                        `각 테이블 row에 이벤트 핸들러를 추가하고, 해당 스테이킹의 상세 정보를 state에 저장하여 props로 전달하는 방식을 사용했습니다.  \n` +
                        `마지막으로, 스테이킹 기간을 표시하는 버튼은 StakingModal에서도 사용되기 때문에 Recoil을 활용했습니다.  \n` +
                        `각 스테이킹은 다른 기간을 가지고 있으므로, 먼저 TableDetail 컴포넌트에서 해당 기간을 구현한 후 \n` +
                        `모달 컴포넌트에 상태를 전달하여 일관된 기간 표시를 구현했습니다. \n` +
                        `이와 같은 설계와 상태 전달 덕분에 단 한번의 데이터 요청으로 로딩없이 빠른 사용자 경험을 향상시킬 수 있었습니다. \n` +
                        `이 경험을 통해 프론트엔드 개발자로서 효율적인 설계에 대한 중요성을 깨달았습니다. `,
                    },
                    {
                      title: "stacked card slider 구현",
                      dscr:
                        `react-slick 라이브러리를 사용하여 슬라이더를 구현하던 중 stacked card slider를 구현하는데 어려움이 있었습니다. \n` +
                        `따라서 직접 slider를 구현하기로 결정했습니다. \n` +
                        `stacked card slider는 일정 시간마다 슬라이드가 종이처럼 넘어가야하고, 슬라이더를 클릭하거나 dot을 클릭해도 슬라이드가 전환되어야 했습니다.  \n` +
                        `이를 위해 indexs라는 상태를 생성하여 해당 인덱스에 해당하는 이미지를 가져오는 로직을 구현했습니다. \n` +
                        `각 카드의 위치를 나타내는 인덱스를 할당하기 위해 indexs 배열을 map 함수로 순회하였고, \n` +
                        `현재 표시되는 위치를 파악하기 위해 data-slide 속성에도 인덱스를 할당했습니다.  \n` +
                        `카드의 쌓임 레이아웃은 data-slide 선택자에 transform, z-index, opacity 속성을 적용하여 구현했습니다. \n` +
                        `마지막으로, 슬라이드 카드를 다음 순서로 이동시키기 위해 슬라이더 클릭 이벤트 함수에서 인덱스 배열인 indexes를 업데이트했습니다. \n` +
                        `인덱스 배열을 복사하여 새로운 배열을 생성한 후, 첫 번째 인덱스를 shift 메서드로 삭제하고 마지막 위치에 추가하는 로직을 구현했습니다.  \n` +
                        `이를 통해 카드가 순서대로 이동할 수 있었습니다.`,
                    },
                  ]}
                />

                <MyRoleDscr
                  Roletitle="6. 랜딩서비스 페이지 (페이지 기여도: 100%)"
                  RoleUrl="https://bydoxe.com/landing"
                  RoleUrlDscr="랜딩서비스 페이지 보러가기"
                  imgArray={lendingImages}
                  troubleTitle="트러블 슈팅 : 랜딩서비스 구현을 위한 API 연결과 로직 설계"
                  troubleDscrArray={[
                    {
                      title: "랜딩서비스 구현을 위한 API 연결과 로직 설계",
                      dscr:
                        `랜딩서비스 페이지에 접속하면, 로그인 상태와 스테이킹 여부를 확인하여 랜딩서비스를 받을 수 있는지 판단하는 기능을 구현했습니다. \n` +
                        `이를 위해 recoil을 사용하여 로그인 상태를 확인하고, API 연결을 통해 스테이킹 여부를 판단했습니다. \n\n` +
                        `이후 랜딩서비스를 받을 수 없는 유저에게는 "토큰없음"이라는 메시지를 표시하고, \n` +
                        `받을 수 있는 유저에게는 "스테이킹 심볼 목록 API"를 호출하여 심볼을 선택할 수 있는 드롭다운을 제공했습니다. \n` +
                        `스테이킹 담보 심볼을 선택하면, 해당 심볼을 사용하여 "랜딩 토큰 선택을 위한 API"를 호출할 수 있게 됩니다.  \n` +
                        `이를 통해 유저가 선택한 토큰의 정보를 가져와서 setState를 통해 상태를 업데이트하고, \n` +
                        `랜딩 가능 금액이나 최대 랜딩 가능 기간과 같은 정보를 화면에 표시했습니다. \n\n` +
                        `프로젝트 진행 과정에서 기획자, 디자이너, 백엔드 개발자와 협업하며 \n` +
                        `API에 필요한 정보와 데이터 구조를 논의하고 각 API에 전달되어야 할 데이터를 구체화하여 구현에 반영할 수 있었습니다. \n` +
                        `또한, useQuery를 활용한 API 호출은 개발 과정에서 큰 도움이 되었습니다. \n` +
                        `enable 옵션을 사용하여 API 호출과 관련된 작업을 간소화하고 데이터를 캐싱하여 코드를 단순화하고 효율적으로 처리할 수 있었습니다. \n` +
                        `로직상으로는 다양한 상태와 컴포넌트 간의 상호작용에 대한 고민이 필요했습니다. \n` +
                        `효율적인 로직을 구현하기 위해 상태의 변화와 업데이트를 어떤 컴포넌트에서 처리해야 하는지를 고민하고, \n` +
                        `필요한 정보를 recoil 또는 부모 컴포넌트에서 자식 컴포넌트로 전달하는 방식으로 데이터 흐름을 관리했습니다. `,
                    },
                  ]}
                />

                <MyRoleDscr
                  isBorder={false}
                  Roletitle="7. 선물거래 페이지 : 포지션 오픈 및 포지션 청산 (페이지 기여도: 30%)"
                  RoleUrl="https://bydoxe.com/landing"
                  RoleUrlDscr="선물거래 페이지 보러가기"
                  imgArray={futuresImages}
                  troubleTitle="트러블 슈팅 : 제한된 리소스 횐경에서 선물거래 포지션 오픈 및 청산 구현, 다양한 케이스를 고려한 격리와 교차 레버리지 설정"
                  troubleDscrArray={[
                    {
                      title: "제한된 리소스 횐경에서 선물거래 포지션 오픈 및 청산 구현",
                      dscr:
                        `선물거래의 포지션 설정에서는 백엔드로부터 받아온 데이터와 함께 증거금 등의 다양한 계산식을 등 다양한 계산식을 처리해야 했습니다. \n` +
                        `또한 거래 수량 단위가 USDT인지 %에 따라 다른 계산을 해야 했고 지정가, 시장가, 트리거 등 각각의 상태로 관리해야 했습니다.\n` +
                        `이와 더불어 각 포지션에 따른 다양한 예외처리도 고려해야 했습니다. \n\n` +
                        `당시 계산식 및 예외처리가 명확하게 기획되지 않았기 때문에, \n` +
                        `기획자와 함께 mexc, 바이낸스, bitget 등의 래퍼런스를 참고하여 이를 함께 기획하고 구현 방향을 정했습니다. \n` +
                        `더불어 프론트와 서버에서 처리해야 할 데이터를 정의하기 위해 백엔드 개발자와 회의도 자주 진행했습니다. \n` +
                        `또한 선물거래에 대한 도메인 이해를 높이기 위해 유튜브 영상 시청, 데모 선물거래 직접 시도, 애널리스트와의 상담 등을 통해 많은 시간을 투자했습니다. \n` +
                        `리소스의 한계로 인해 이해에 많은 시간을 들였지만, 도메인을 명확히 이해하고 개발함으로써 구현에 대한 확신을 얻을 수 있었습니다. \n\n` +
                        `구현에는 recoil, useState, react-query, useEffect, useCallback 등의 기술을 적절하게 활용하였으며, \n` +
                        `input, dropdow, 주문요청 모달 등 재사용 가능한 UI 요소들을 효율적으로 활용하여 코드의 효율성을 높이는데 주력했습니다. \n` +
                        `위와 같은 노력을 통해 선물거래 포지션 오픈 및 포지션 청산 기능을 성공적으로 구현할 수 있었고, \n` +
                        `이를 통해 프론트엔드 개발자로서 협력의 중요성을 다시 한번 깨닫게 되었습니다. `,
                    },
                    {
                      title: "다양한 케이스를 고려한 격리와 교차 레버리지 설정",
                      dscr:
                        `선물거래에서 격리와 교차에 따른 레버리지 설정은 사용자의 포지션 여부, 선택한 모드, \n` +
                        `그리고 이전에 설정한 레버리지 등 다양한 케이스를 고려하여 상태를 관리해야 했습니다. \n\n` +
                        `포지션이 없는 유저는 격리모드와 교차모드 중 어떤 모드든 선택하고 레버리지 설정도 자유롭게 변경할 수 있습니다. \n` +
                        `격리 포지션이 있는 유저는 청산하지 않으면 교차 모드로 변경할 수 없으며, 교차 포지션이 있는 유저도 청산하지 않으면 격리 모드로 변경할 수 없습니다.\n` +
                        `레버리지 설정은 이전에 선택한 값보다 높게 설정할 수 있지만 낮게 변경하는 것은 허용되지 않습니다.  \n` +
                        `이러한 조건들을 고려하여 사용자의 선택과 현재 상태를 비교하고 조건문을 활용하여 적절한 처리를 수행하는 로직을 구현했습니다. \n` +
                        `이를 통해 사용자가 선택한 모드와 레버리지를 실시간으로 반영하여 일관성 있는 거래 환경을 제공할 수 있었습니다. \n\n` +
                        `또한 사용자의 편의성과 안전성을 고려하여 올바른 모드와 레버리지 설정을 유도하기 위한\n` +
                        `UI/UX 요소를 고민하면서 사용자 중심의 개발과 상태 관리의 중요성을 깨달을 수 있었습니다.`,
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
