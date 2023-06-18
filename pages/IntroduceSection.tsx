interface IProps {
  setIsOpen: () => void;
}

export default function IntroduceSection({ setIsOpen }: IProps) {
  return (
    <div className="introduceSection absolute top-0 right-0 h-full w-full bg-white p-5 lg:p-10 flex flex-col justify-between dark:bg-darkLightGray200">
      <svg
        onClick={setIsOpen}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="introduce w-6 lg:w-10 h-6 lg:h-10 absolute top-[10px] right-[10px] cursor-pointer"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div className="introduce break-normal">
        <div className="text-[14px] lg:text-[20px] mb-1">
          첫째, UI/UX뿐만 아니라{" "}
          <span className="text-purple dark:text-lightBluePurple">
            ‘전체적인 개발의 아름다움을 중요시하는’
          </span>
          개발자입니다.
        </div>
        <div className="text-[13px] lg:text-[17px]">
          의도와 컨셉을 정확히 이해하고 디자이너가 제시한 디자인을 웹 인터페이스로 표현하기 위해
          끊임없이 소통합니다. 또한 변수명과 코드의 구성에 깊게 신경을 쓰며, 개발 로직을 문서화하여
          동료 개발자가 코드를 이해하는데 도움이 되도록 배려합니다. 반복적인 UI는 컴포넌트화하고
          코드는 모듈화하여 재사용성과 유지보수성을 높이는데 주력합니다. 또한 useState를 활용한
          object 형태 업데이트, 비구조화 할당 등을 통해 최적화된 코드를 작성하고 효율적인 개발을
          지향하여 좋은 결과물을 만들어내기 위해 노력합니다.
        </div>
      </div>
      <div className="introduce break-normal">
        <div className="text-[14px] lg:text-[20px] mb-1">
          둘째, <span className="text-purple dark:text-lightBluePurple">‘성취 중독인’</span> 개발자
          입니다.
        </div>
        <div className="text-[13px] lg:text-[17px]">
          대학교 4학년 때, 확실한 결과물을 보여주며 모든 영역에 막대한 영향을 끼치는 개발의 매력에
          빠져들었습니다. 독학을 하며 몰입하는 모습을 보고 개발자로의 확신이 생겨서 위코드
          부트캠프를 수료했습니다. 현재는 글로벌 자산 거래소 'BYDOXE'의 개발과 운영에 참여하고
          있습니다. 안주하지 않고 역량을 향상시키기 위해 노력했기에 주니어 개발자로서의 한계를
          넘어서며 거래소 프로젝트에서 주도적인 역할을 맡았습니다. 이에 기술 선정부터 시작하여
          선물거래, 스테이킹 등 다양한 서비스를 개발하였고, 지금도 더 나은 개발자로 성장하기 위해
          퇴근 후, 출퇴근길에, 주말에 시간을 할애하여 지속적으로 노력하고 있습니다.
        </div>
      </div>
      <div className="introduce break-normal">
        <div className="text-[14px] lg:text-[20px] mb-1">
          셋째,{" "}
          <span className="text-purple dark:text-lightBluePurple">
            ‘적응력이 뛰어나 협업에 자신있는’
          </span>{" "}
          개발자입니다.{" "}
        </div>
        <div className="text-[13px] lg:text-[17px]">
          대학 시절부터 학생회, 응원단 등 다양한 대내외 활동과 이집트 유학 경험을 통해 다양한 상황에
          적응해 왔습니다. 부트캠프에서도 세 가지 팀 프로젝트를 성공적으로 수행하였으며 현재도
          팀원들과의 원활한 소통을 통해 즐거운 협업을 이뤄내는 중 입니다. 또한 이해가 되지 않거나
          궁금한 점이 있을 때 언제든지 저의 생각을 정리하여 디자이너, 기획자, 동료 개발자 등과
          자유롭게 유익한 소통을 할 수 있는 능력을 갖추고 있습니다. 이처럼 저는 원활한
          커뮤니케이션을 통해 팀원들과의 협업을 원활하게 이끌어내고, 프로젝트의 목표를 달성하기 위해
          노력합니다.
        </div>
      </div>
    </div>
  );
}
