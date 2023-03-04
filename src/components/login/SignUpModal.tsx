import { useState } from 'react';
import Input from './Input';

interface SignUpModalProps {
  setRenderModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SignUpModal({ setRenderModal }: SignUpModalProps) {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [inputCheckedPw, setInputCheckedPw] = useState('');

  function handleModal() {
    setRenderModal(false);
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black bg-opacity-20">
      <div className="flex h-[38rem] w-full flex-col items-center justify-center rounded-xl bg-white sm:h-[42rem] sm:w-[40rem] sm:text-lg">
        <h1 className="mt-4 mb-16 text-3xl font-bold sm:text-4xl">회원가입</h1>
        <form className="flex w-[25rem] flex-col justify-start px-12 drop-shadow-sm sm:px-0">
          <Input
            type="text"
            name="id"
            label="아이디"
            value={inputId}
            setValue={setInputId}
            inputStyle="border"
          />
          <Input
            type="password"
            name="pw"
            label="비밀번호"
            value={inputPw}
            setValue={setInputPw}
            inputStyle="border"
          />
          <Input
            type="password"
            name="checkedPw"
            label="비밀번호 확인"
            value={inputCheckedPw}
            setValue={setInputCheckedPw}
            inputStyle="border"
          />
          <button className="mt-16 mb-2 rounded-lg bg-red-500 py-3 font-semibold text-white shadow hover:bg-opacity-70 sm:py-4 sm:text-xl">
            회원가입
          </button>
        </form>
        <button
          className="w-[25rem] py-4 font-medium hover:text-neutral-400"
          onClick={handleModal}
        >
          닫기
        </button>
      </div>
    </div>
  );
}
