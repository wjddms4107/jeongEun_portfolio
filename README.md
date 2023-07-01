# 포트폴리오 웹 사이트
> 개발자 노정은을 소개하는 포트폴리오 웹 사이트입니다. </br>
> [포트폴리오 웹 사이트](https://jeong-eun-portfolio.vercel.app/) </br>
: 웹 페이지는 Vercel로 배포했습니다.

## 1. 제작 기간
- 05월 01일 ~ 현재

## 2. 사용 기술
- Next.js
- TypeScript
- Taliwind CSS
- Prisma
- Vercel
- PlanetScale
- Framer-motion

## 3. 핵심 기술
 
#### `개발자 노정은을 소개하는 포트폴리오 웹 사이트`
- 저는 현재 React와 Styled Components를 사용하는 프론트엔드 개발자로 일하고 있습니다.<br />
  그러나, 제한된 기술 스택에만 의존하지 않고 더 넓은 개발 경험을 쌓기 위해 출퇴근 시간, 퇴근 후, 주말 등 자유로운 시간을 활용하여 <br />
  Next.js, Prisma, Tailwind CSS, Velcel 등을 공부하고 습득하였습니다. <br /> 
  이러한 학습을 토대로 직접 웹사이트를 제작하기 위해 포트폴리오 웹사이트 프로젝트를 시작하게 되었습니다. <br />  

  Next.js를 사용하여 빠른 페이지 렌더링과 서버 사이드 렌더링을 구현하였고, Prisma를 활용하여 데이터베이스와의 상호작용을 용이하게 만들었습니다.<br /> 
  또한, Tailwind CSS를 통해 쉽고 빠르게 스타일을 구성하였고 Next.js 애플리케이션을 쉽고 빠르게 배포할 수 있는 Vervel을 선택했습니다.<br /> 
  이 프로젝트를 통해 기존의 기술 스택을 넘어서는 도전을 하였으며, 새로운 기술들을 학습하고 실제 프로젝트에 적용하는 경험을 얻었습니다.<br /> 

  포트폴리오 웹사이트에서 저의 개발 스킬과 프로젝트 경험을 효과적으로 전달하기 위해 심혈을 기울였습니다. <br /> 
  제 이력과 업적을 자유롭게 소개할 수 있는 공간으로 웹사이트를 제작하게 되어 매우 기쁩니다. <br /> 
  추후 간단한 블로깅 기능도 추가하여 고도화하려고 합니다. <br /> 


#### `구현 기능`
- 구현한 기능을 간략하게 소개하자면 다음과 같습니다:

타이핑 애니메이션: 시작 화면에서 개발자 노정은을 소개하는 타이핑 애니메이션을 구현했습니다.  <br /> 
반응형 및 다크 모드: Tailwind CSS의 제공 기능과 next-themes를 활용하여 반응형 웹 디자인과 다크 모드를 구현했습니다.  <br /> 
ProjectSection: Prisma를 활용하여 프로젝트 정보를 관리하고, Cloudinary를 이용해 이미지를 URL로 변환하여 이미지 슬라이더를 구현했습니다.  <br /> 
스크롤 이벤트와 모달 애니메이션: Framer Motion을 이용하여 스크롤 이벤트와 모달 애니메이션을 구현했습니다.  <br /> 
성능 최적화: Next.js에서 제공하는 렌더링과 최적화 기능을 활용하여 웹사이트의 성능을 향상시키는 작업을 진행했습니다.  <br /> 
컴포넌트 재사용성: 2번 이상 반복되는 기능은 컴포넌트로 분리하여 재사용성을 높이도록 노력했습니다. 


#### `개발 내용`
- About me
- Skill
- Work Experience
- Projects
- Education
- Etc
- MyGround (사용해보고 싶은 라이브러리나 기술 등을 연습하고 정리하는 공간) ()


## 4. 트러블 슈팅
### Project 섹션 구현하기
<img width="700" alt="제품상세리뷰" src="https://github.com/wjddms4107/jeongEun_portfolio/assets/78889402/4b789071-d503-40a4-8102-9ad632c2057c.gif" /> <br />
#### (1) Prisma, Cloudinary 활용하여 Project 섹션 구현 🔗[Prisma handler 코드](https://github.com/wjddms4107/jeongEun_portfolio/blob/67837b687b55e90b8d19b34bdd2643a62e149c63/pages/api/project.tsx#LL4C31-L4C38),  🔗[구분자 가공 코드](https://github.com/wjddms4107/jeongEun_portfolio/blob/67837b687b55e90b8d19b34bdd2643a62e149c63/pages/components/BigProjectBox.tsx#L18)

- Prisma 모델 파일에서 데이터베이스 모델을 정의한 후 Prisma Studio를 실행하여 데이터를 추가했습니다.
- 개발한 기능, 트러블 슈팅과 같이 한 줄씩 띄어쓰기 위해 div태그에 text를 넣었는데
배열 타입을 지원하지 않는 Prisma의 필드에서 문자열 배열 구현하기위해서 문자열을 구분자로 이어붙이는 방법을 택했습니다. 
각 문자열을 구분하기 위해 특정 구분자 ‘+’ 사용하여 `const projectDscr = infos.projectDscr.split("+")` 이처럼 가공하여 구현할 수 있었습니다.
- 또한 노트북에 저장된 이미지를 url로 만들어서 image slider를 구현하기 위해 무료로 이미지를 올릴 수 있는 Cloudinary를 활용했습니다. 
Cloudinary 홈페이지에서 이미지를 업로드하여 URL을 얻을 수 있었고 이후 복사한 URL을 Prisma Studio에서 Project 모델의 src 필드에 넣어 
next.config.js 파일에 res.cloudinary.com을 추가했습니다. 
- 더불어 image slider를 구현하기 위해 URL을 배열에 넣어야 했습니다. 
project 모델의 src 속성을 ','를 기준으로 분리하여 배열로 변환한 후 각각의 요소에서 맨 앞과 맨 뒤의 `"`를 제거하고 새로운 배열을 생성했습니다. 

<details>
<summary><b>Prisma 모델 정의</b></summary>
<div markdown="1">

 ~~~javascript
 model Project {
  id Int @id @default(autoincrement())
  state Boolean
  title String
  period String
  sort String
  src String @db.VarChar(3000)
  alt String
  skill String
  github String
  url String
  team String?
  myRole String?
  library String?
  notes String?
  shortDscr String
  projectDscr String  @db.VarChar(1000)
  featureDscr String  @db.VarChar(1000)
  troubleeDscr String  @db.VarChar(1000)
}
 ~~~

</div>
</details>

<details>
<summary><b>projects 모델 src 속성 배열로 변환</b></summary>
<div markdown="1">

  ~~~javascript
 export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  const projects = await client.project.findMany();

  const newData = projects.map((project) => {
    const srcArray: string[] = project.src.split(',');
    const newArray = srcArray.map((src:string) => src.replace(/^"(.*)"$/, '$1'));

    return {
      ...project,
      src: newArray ,
    };
  });

  res.json({
    ok: true,
    data: newData,
  });
}
 ~~~
</div>
</details>


#### (2) ProjectDetailsModal 구현하기 : prisma 데이터 처리와 framer-motion 모달 애니메이션 효과 <br />
 🔗[ProjectSection 코드](https://github.com/wjddms4107/jeongEun_portfolio/blob/1bdf5d74a3315b6a864698d175ba770a9ec1de6c/pages/ProjectSection.tsx#L13), 🔗[ProjectBox 코드](https://github.com/wjddms4107/jeongEun_portfolio/blob/1bdf5d74a3315b6a864698d175ba770a9ec1de6c/pages/components/ProjectBox.tsx#L20), 🔗[ProjectDetailsModal 코드](https://github.com/wjddms4107/jeongEun_portfolio/blob/1bdf5d74a3315b6a864698d175ba770a9ec1de6c/pages/components/ProjectDetailsModal.tsx#L14)

- ProjectSection에는 프로젝트의 간단한 정보를 보여주는 ProjectBox와 상세정보를 보여주는 ProjectDetailsModal이 있습니다. 이를 위해 projectDetails라는 상태 변수를 사용하여 프로젝트의 상세 정보를 관리했습니다. projectDetails 배열을 map함수로 순회하여 각각의 ProjectBox에 데이터를 전달해주었습니다.
- ProjectBox에서는 프로젝트의 제목, 기간, 기술스택 등과 같은 간단한 정보만을 보여줍니다. 처음에는 맨 앞의 ProjectBox만 보여지도록 설정되어 있고, 다른 ProjectBox를 클릭하면 기존에 열렸던 ProjectBox가 닫히고 클릭된 프로젝트의 간단한 정보를 볼 수 있도록 조건부 렌더링을 사용하여 구현했습니다.
- 또한 사용자가 펼쳐진 ProjectBox를 클릭하면 프로젝트 상세정보를 보여주는 ProjectDetailsModal이 부드럽게 열리도록 구현했습니다. 이는 현재 currentId 상태에 따라 모달이 열리거나 닫히도록 구현되어 있습니다.
- 부드러운 애니메이션 효과를 주기 위해 배경색을 애니메이션으로 조절하여 부드럽게 변화하도록 구현하였습니다. 또한, 모달 영역 외의 부분을 클릭하면 모달이 닫히도록 하기 위해 모달 컨테이너에 클릭 이벤트를 추가하였습니다.
- 마지막으로, ProjectDetailsModal에는 현재 열려 있는 프로젝트의 currentId와 해당 프로젝트의 상세 정보를 전달하여 모달 내부에서 필요한 데이터를 표시할 수 있도록 하였습니다.


<details>
<summary><b>projectDetails map 돌려서 ProjectBox에 데이터 전달하기</b></summary>
<div markdown="1">
 
 ~~~javascript
   const [projectDetails, setProjectDetails] = useState<Project[]>(projects);

  const ClickProjectBox = (index: number) => {
    setProjectDetails(projectDetails?.map((info, i) => ({
      ...info,
      state: i === index
    })));
  };
  
  const projectBoxs = projectDetails?.map((details) => (
    <ProjectBox
      key={details.id}
      isClicked={details.state}
      details={details}
      onClick={() => ClickProjectBox(details.id - 1)}
      layoutId={details.id}
    />
  ));
 ~~~
 
</div>
</details>
 
 <details>
<summary><b>모달 애니메이션</b></summary>
<div markdown="1">

 ~~~javascript
  <AnimatePresence>
    {currentId ? (
       <motion.div
         className="fixed z-20 top-0 right-0 left-0 w-[100vw] h-full flex items-center justify-center m-auto"
         onClick={(e) => e.target === e.currentTarget && handleCloseBox()}
         initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
         animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
         exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
       >
         <ProjectDetailsModal currentId={currentId} details={details} />
       </motion.div>
     ) : null}
  </AnimatePresence> 
 ~~~
 
</div>
</details>

#### (3) 기능구현 후 렌더링 성능향상 (getServerSideProps) 🔗[getServerSideProps 코드](https://github.com/wjddms4107/jeongEun_portfolio/blob/1bdf5d74a3315b6a864698d175ba770a9ec1de6c/pages/index.tsx#L46)

- Prisma에서 Project 데이터를 받아오는 로직을 수정했습니다. 이전에는 useEffect를 사용하여 API 연결을 수행하였으나, 이로 인해 ProjectSection에 도달할 때마다 데이터 패칭이 발생하여 성능에 이슈가 있었습니다. 이를 해결하기 위해 next.js의 기능 중 하나인 getStaticProps를 활용하여 구현했습니다.
- getStaticProps는 페이지를 미리 렌더링하여 정적인 HTML 파일로 생성하는 방식으로 동작합니다. 따라서 사용자의 요청에 상관없이 미리 생성된 정적 파일을 제공하므로 데이터 패칭의 빈도를 줄일 수 있어 성능 향상에 기여할 수 있었습니다.
- 그러나 이 과정에서 undefined가 찍히는 에러가 발생했습니다. 이 문제를 해결하기 위해 getStaticProps를 최상위 파일에서만 사용해야 한다는 사실을 깨달았습니다. 최상위 파일로 로직을 이동시킴으로써 에러를 해결하였고, getStaticProps의 사용 범위에 대한 이해를 높일 수 있었습니다. 이러한 경험을 통해 next.js의 특징과 사용 방법을 더 깊이 이해하고, 성능 최적화를 위한 올바른 구현 방법을 배울 수 있었습니다.

<details>
<summary><b>getStaticProps 활용 코드</b></summary>
<div markdown="1">

 ~~~javascript
 
export async function getStaticProps() {
  const projects = await client.project.findMany();

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

}
 ~~~

</div>
</details>

<details>
<summary><b>이전 useEffect 코드</b></summary>
<div markdown="1">

  ~~~javascript
  useEffect(()=>{
    axios.get('/api/project')
  .then(function (response:any) {
    setProjectBoxStates(response.data.data)
  })
  .catch(function (error:any) {
    console.log(error, "project api 연결 에러");
  })
  }
  ,[])
 ~~~
</div>
</details>



<br/>

## 5. 그 외 문제 해결 경험

<details>
<summary>nextJS 제공기능으로 최적화 : Layout 컴포넌트, Head 태그, Image 태그 </summary>
<div markdown="1"> 
<br />

- Layout 컴포넌트로 웹 사이트의 레이아웃을 잡아주었습니다.

~~~javascript
 import Header from "./Header";

 export default function Layout({children}: React.PropsWithChildren) {
   return (
     <>
      <Header />
      <main className="w-[100vw] flex flex-col items-center justify-center mt-[70px]">
        {children}
      </main>
    </>
   )
 }
~~~


- 이미지 최적화를 위해 lazy loading, 사이즈최적화, layout shift 방지해기 위해 <Image /> 태그를 사용했습니다.

~~~javascript
  <Image src="/jeongeun1.jpg" alt="jeongeun" width={500} height={500} className="rounded-2xl shadow-lg mt-12 lg:w-2/5 lg:ml-10 lg:mt-0" />
 ~~~

- 웹사이트의 head 부분 생성하기위해 head 태그를 사용했습니다.

~~~javascript
  import Head from 'next/head';

interface IProps {
  title : string;
}

export default function Seo({title}:IProps) {
  return (
    <Head>
      <title>{title} | JeongEun</title>
    </Head>
  )
  
}
 ~~~

</div>
</details>

<details>
<summary>next-themes와 TailwindCSS의 제공 기능 활용하기</summary>
<div markdown="1">
<br />
- 원래는 recoil과 같은 전역 상태 관리 도구를 사용하여 다크 모드와 라이트 모드를 전역적으로 적용하려고 했습니다. 그러나 next.js에는 편리하게 다크 모드를 사용할 수 있는 next-themes 라이브러리가 있었습니다. 그래서 next-themes와 TailwindCSS의 dark 활용하여 다크 모드를 쉽게 구현할 수 있었습니다.  <br />
_App : https://github.com/wjddms4107/jeongEun_portfolio/blob/1a9231c9847c2c675eec1bd84fb041ee91524b69/pages/_app.tsx#L10 
다크모드 변환 : https://github.com/wjddms4107/jeongEun_portfolio/blob/1a9231c9847c2c675eec1bd84fb041ee91524b69/components/HeaderUl.tsx#L45
<br />

- TailwindCSS의 제공 기능을 활용하여 반응형을 구현했습니다. TailwindCSS의 lg, md와 같은 선택자를 사용하여 미디어 쿼리 없이도 반응형 스타일링을 간편하게 적용할 수 있었습니다. 이를 통해 브라우저의 크기에 따라 적절한 스타일을 자동으로 적용할 수 있었습니다.   <br />
반응형 : https://github.com/wjddms4107/jeongEun_portfolio/blob/1a9231c9847c2c675eec1bd84fb041ee91524b69/pages/HomeSection.tsx#L17
<br />

 - TailwindCSS의 클래스 중 하나인 space-y-1과 같은 클래스를 사용하여 요소 사이에 간격을 쉽게 조절할 수 있었습니다. 

~~~javascript
 <div className='space-y-4'>
  {troubleDscrArray.map(({title, dscr, code}) => (
    <div className='text-lg' key={title}>
      <div className='font-bold mb-1'>📌 {title}</div>
        <div className='text-middleGray300 dark:text-darkMiddleGray200 break-all whitespace-pre-line' >
         {dscr}
         {code && 
           <div className='mt-2'>
             <code>{code}</code>
           </div>
         }       
      </div>
    </div>
  ))}
 </div>
~~~

</div>
</details>

<details>
<summary>타이핑 애니메이션 구현</summary>
<div markdown="1">

- ['전체적인 아름다움을 중요시하는', '성취 중독자', '적응력이 뛰어나 협업에 자신있는'] 프론트엔드 개발자 노정은입니다. 를 표현하기 위해 타이핑 애니메이션을 구현했습니다.

useTypingAnimation : https://github.com/wjddms4107/jeongEun_portfolio/blob/1a9231c9847c2c675eec1bd84fb041ee91524b69/libs/client/useTypingAnimation.ts#L3
useCursorBlink : https://github.com/wjddms4107/jeongEun_portfolio/blob/1a9231c9847c2c675eec1bd84fb041ee91524b69/libs/client/useCursorBlink.ts#L3

</div>
</details>

<details>
<summary>컴포넌트 재활용</summary>
<div markdown="1">

- ImgSlide: 이미지 슬라이드
https://github.com/wjddms4107/jeongEun_portfolio/blob/adf70c7cd421ce26be0a3ee68305b7453c6712f6/components/ImgSlide.tsx#L15

- MyRoleDscr: Work Experience 역할 설명 
https://github.com/wjddms4107/jeongEun_portfolio/blob/adf70c7cd421ce26be0a3ee68305b7453c6712f6/components/MyRoleDscr.tsx#L21

- SkillBox : Skill에서 기술스택 UI
https://github.com/wjddms4107/jeongEun_portfolio/blob/adf70c7cd421ce26be0a3ee68305b7453c6712f6/components/skillBox.tsx#L13

- 이외에도 다양한 컴포넌트를 재활용 했습니다.


</div>
</details>
