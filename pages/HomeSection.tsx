export default function HomeSection(){
  return (
    <>
      <div className="flex align-middle justify-between">
        <h1 className="w-3/5 items-center text-[50px] leading-[1.3] font-semibold text-deepGray font-Josefin m-auto">
          이쁘게 개발하는 걸 좋아하는
          <br />
          프론트엔드 개발자 노정은입니다.
        </h1>
        <div className="w-2/5 bg-white h-[500px] rounded-2xl shadow-lg">
          이미지 둥글게
        </div>
      </div>

      <div className="flex flex-col mt-24 mb-14">
        <h2 className="flex items-center justify-center text-5xl font-extrabold mb-6 text-center">
          <span>About me</span>
          <span className="text-base text-white p-2 ml-4 bg-pink rounded-[4px] cursor-pointer hover:bg-deepPink">
            이력서 다운로드
          </span>
        </h2>
        <div className="flex justify-center space-x-8 text-deepGray">
          <div className="text-xl">
            <span className="border-r-2 border-purple mr-2 pr-2">
              연락처
            </span>
            010 7704 4107
          </div>
          <div className="text-xl">
            <span className="border-r-2 border-purple mr-2 pr-2">
              이메일
            </span>
            wjddms4107@gmail.com
          </div>
          <div className="text-xl">
            <span className="border-r-2 border-purple mr-2 pr-2">
              블로그
            </span>
            www.naver.com
          </div>
          <div className="text-xl">
            <span className="border-r-2 border-purple mr-2 pr-2">
              깃허브
            </span>
            www.naver.com
          </div>
        </div>
      </div>
    </>
  );
}