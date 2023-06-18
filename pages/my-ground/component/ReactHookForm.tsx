import { useState } from "react";
import { useForm, FieldErrors } from "react-hook-form";

interface IForm {
  email: string;
  username: string;
  password: string;
}

export default function ReactHookForm() {
  const [isMemoClick, setIsMemoClick] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const inputStyle = "bg-violet-100 pl-2 h-[35px] rounded-lg";

  const onValid = (data: IForm) => {
    console.log(data);
  };

  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  console.log(errors);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="relative w-full bg-gray-50 rounded-2xl shadow-lg p-4 pb-10">
        <h2 className="text-2xl font-extrabold mb-4">react-hook-form</h2>

        <form
          onSubmit={handleSubmit(onValid, onInvalid)}
          className="flex flex-col gap-y-2 w-[300px]"
        >
          <input
            {...register("email", {
              required: "이메일은 필수로 입력해야합니다.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "이메일 형식을 확인해주세요.",
              },
            })}
            placeholder="email"
            className={inputStyle}
          />
          <span>{errors?.email?.message}</span>

          <input
            {...register("username", {
              required: "이름은 필수로 입력해야합니다.",
              minLength: {
                value: 2,
                message: "2글자 이상을 입력해주세요.",
              },
            })}
            placeholder="username"
            className={inputStyle}
          />
          <span>{errors?.username?.message}</span>

          <input
            {...register("password", {
              required: "비밀번호는 필수로 입력해야합니다.",
              minLength: {
                value: 5,
                message: "5글자 이상으로 입력해주세요.",
              },
            })}
            placeholder="password"
            className={inputStyle}
          />
          <span>{errors?.password?.message}</span>

          <button className="bg-LightGray" type="submit">
            Add
          </button>
        </form>

        <div
          onClick={() => setIsMemoClick(!isMemoClick)}
          className="absolute w-full bottom-0 left-0 right-0 h-[25px] text-center bg-lightBluePurple rounded-b-2xl cursor-pointer hover:bg-purple"
        >
          기술설명
        </div>
      </div>
      <div
        className={`${
          isMemoClick
            ? "opacity-100 max-h-[100%] transition-all duration-500 ease-in-out"
            : "opacity-0 max-h-0 transition-all duration-500 ease-in-out"
        } relative top-0 left-0 right-0 w-[98%] bg-white rounded-b-2xl shadow-lg p-4 break-all overflow-y-auto`}
      >
        <div className="mb-2">
          react-hook-form은 큰 form을 가지고 있어서 유효성 검사를 할 때 너무 편리하다.
        </div>
        <div>
          register은 onChange, value 등 전부 다 해결해준다. 즉, useState, onChangeg핸들러, value의
          props들이 다 필요없다. <br />
          handleSubmit은 유효성검사 등을 끝내고 onValid, onInvalid 함수를 호출한다. 만약 에러가 나면
          그 input으로 focus를 데려간다. <br />
          onValid는 데이터가 유효할 때 호출되는 필수 함수이고, onInvalid은 데이터가 유효하지 않을 때
          호출되는 함수로 필수는 아니다.
        </div>
      </div>
    </div>
  );
}
