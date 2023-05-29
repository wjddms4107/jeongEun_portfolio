import type { NextPage } from "next";
import { ReactElement } from "react";
import ReactHookForm from "./component/ReactHookForm";


const MyGround: NextPage = (): ReactElement => {
  return ( 
    <main className="mt-[70px] p-8 ">
      <div className="w-full text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4">MyGround</h1>
        <span>  
          MyGround는 사용해보고 싶은 라이브러리나 기술 등을 연습하고 정리하는 공간으로 사용하고 있습니다.
        </span>
      </div>

      <ReactHookForm />
    </main>
    )
};

export default MyGround;
