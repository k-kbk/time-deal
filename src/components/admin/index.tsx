import { useEffect, useState } from 'react';
import Input from '../common/Input';

export default function Index() {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [isEntered, setIsEntered] = useState(false);

  useEffect(() => {
    if (inputId && inputPw) {
      setIsEntered(true);
    } else {
      setIsEntered(false);
    }
  }, [inputId, inputPw]);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-neutral-50 sm:text-lg">
      <div className="mb-8 w-[80%] sm:w-[25rem]">
        <h1 className="my-12 text-left text-4xl font-bold tracking-tighter sm:text-5xl">
          Admin.
        </h1>
        <form className="flex flex-col justify-start">
          <Input
            type="text"
            name="id"
            label="아이디"
            value={inputId}
            setValue={setInputId}
          />
          <Input
            type="password"
            name="pw"
            label="비밀번호"
            value={inputPw}
            setValue={setInputPw}
          />
          <button
            className={`mt-12 mb-2 rounded-lg bg-red-500 py-4  text-lg font-semibold text-white shadow hover:bg-opacity-70  sm:text-xl`}
            disabled={!isEntered}
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}
