import Image from 'next/image';
import CompanyDscrWrapper from '@/components/CompanyDscrWrapper';
import ProjectSkill from '@/components/projectSkill'
import mrpLogo from '@/public/mrpLogo.png';


export default function ExperienceSection(){
  return (
    <div className='mb-20'>
      <h2 className="text-5xl font-extrabold mb-12">Experience</h2>

      <div className="flex w-full">
        <div className="w-[41%] pr-6">
          <Image
            src={mrpLogo}
            alt="mrp 로고"
            width={200}
            height={200}
            className="rounded-[100%]"
          />
        </div>
        <div className="border-l border-[#C1C5CB] border-dashed">
          <CompanyDscrWrapper
            company="(주) MRP Soft"
            period="2023.11 ~ 현재"
            companyDscr="MRP는 ~~입니다. 어쩌고 설명..."
            myRoleDscr="제가 한 역할은.. (예시) 노래방을 즐기는 사람의 입장에서 자주 부르는 노래를 간편하게 관리할 수 있도록 도와주는 웹사이트입니다. 제 취미가 아이디어의 원천이었고, 저와 취미가 같은 사람들에게 도움이 되었으면 하는 마음으로 개발했습니다. Firebase 서비스를 처음 사용해봤다는 것만으로도 의미가 있었지만, 그 과정에서 OAuth 2.0의 개념을 한 번 더 깊게 다지고 NoSQL을 실제로 사용해볼 수 있었다는 점에서 더욱 의미가 있었습니다."
          />

          <div className="mb-8">
            <h4 className="text-2xl font-semibold text-[#645BFF] border-l-[3px] border-[#645BFF] pl-4 mt-4 mb-2.5">
              UBPEX 코인 거래소
            </h4>
            <div className="ml-6">
              <div className="mb-2 ">
                <ProjectSkill skill="react" />
                <ProjectSkill skill="typescript" />
                <ProjectSkill skill="styled-component" />
                <ProjectSkill skill="material-ui" />
                <ProjectSkill skill="react-query" />
              </div>
              <div className="text-xl text-[#808D9A] mb-2">
                2023.02 ~ 2023.06
              </div>

              <div className="mb-4">
                처음부터 끝까지 함께 한 코인거래소 메인, 어쩌고 저쩌고를 제가
                했습니당
              </div>
              <div>
                <div className="leading-7">
                  - 메인페이지, 자산페이지, 등에 기여
                </div>
                <div className="leading-7">
                  - recoil, react-query 기술 선정 및 도입
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

          <div>
            <h4 className="text-2xl font-semibold text-[#645BFF] border-l-[3px] border-[#645BFF] pl-4 my-4">
              인플루언서 페이지
            </h4>
            <div className="ml-6">
              <div className="text-xl text-[#808D9A] mb-2">
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
            <h4 className="text-2xl font-semibold text-[#645BFF] border-l-[3px] border-[#645BFF] pl-4 my-4">
              각종 랜딩페이지
            </h4>
            <div className="ml-6">
              <div className="text-xl text-[#808D9A] mb-2">
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
              <div className="leading-7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}