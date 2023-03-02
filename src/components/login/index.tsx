import { useState } from 'react';
import Input from './Input';

export default function Index() {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center
    "
    >
      <div>
        <h1
          className="my-12 w-[25rem] text-left text-4xl font-bold tracking-tighter
"
        >
          NUMBLE.
        </h1>
      </div>
      <form className="flex w-[25rem] flex-col justify-start drop-shadow-sm">
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
        <button className="mt-12 mb-6 rounded-lg bg-red-500 py-4 text-lg font-semibold text-white">
          로그인
        </button>
        <button className="font-medium">회원가입하기</button>
      </form>
    </div>
  );
}
