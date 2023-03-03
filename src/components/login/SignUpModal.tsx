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
      <div className="flex h-[42rem] w-[40rem] flex-col items-center justify-center rounded-xl bg-white">
        <h1 className="mb-16 text-4xl font-bold">회원가입</h1>
        <form className="flex w-[25rem] flex-col justify-start drop-shadow-sm">
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
          <button className="mt-16 mb-4 rounded-lg bg-red-500 py-4 text-lg font-semibold text-white hover:bg-opacity-70">
            회원가입
          </button>
        </form>
        <button
          className="w-[25rem] py-2 font-medium hover:text-neutral-400"
          onClick={handleModal}
        >
          닫기
        </button>
      </div>
    </div>
  );
}
