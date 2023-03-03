import { useState } from 'react';
import Input from './Input';
import ModalPortal from './ModalPortal';
import SignUpModal from './SignUpModal';

export default function Index() {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [renderModal, setRenderModal] = useState(false);

  function handleModal() {
    setRenderModal(true);
  }

  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <div className="w-[25rem]">
          <h1 className="my-12 text-left text-4xl font-bold tracking-tighter">
            NUMBLE.
          </h1>
          <form className="flex flex-col justify-start drop-shadow-sm">
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
            <button className="mt-12 mb-4 rounded-lg bg-red-500 py-4 text-lg font-semibold text-white hover:bg-opacity-70">
              로그인
            </button>
          </form>
          <button
            className="w-full py-2 font-medium hover:text-neutral-400"
            onClick={handleModal}
          >
            회원가입하기
          </button>
        </div>
      </div>
      {renderModal && (
        <ModalPortal>
          <SignUpModal setRenderModal={setRenderModal} />
        </ModalPortal>
      )}
    </>
  );
}
