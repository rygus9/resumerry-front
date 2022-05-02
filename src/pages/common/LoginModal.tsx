import LoginForm from 'components/molcular/login/LoginForm';
import React, { useCallback } from 'react';

type Props = {
  setOpenLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LoginModal({ setOpenLogin }: Props) {
  const onClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const clicked = (e.target as HTMLElement).closest('.inner');
    if (clicked) return;
    setOpenLogin((elem) => !elem);
  }, []);
  const onClose = useCallback(() => {
    setOpenLogin((elem) => !elem);
  }, []);

  return (
    <div
      className="absolute top-0 left-0 bg-black z-40 w-full h-screen bg-opacity-40"
      onClick={onClick}
    >
      <div className="inner relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[24rem] h-[28rem] bg-white rounded-xl">
        <div
          className="cursor-pointer absolute top-2 right-3 text-deepGray"
          onClick={onClose}
        >
          X
        </div>
        <div className="w-4/5 m-auto">
          <h3 className="text-center text-xl py-5 border-b-2 border-deepPurple">
            Resumerry
          </h3>
          <h4 className="text-center py-4 text-deepGray">
            당신의 이력서를 위하여
          </h4>
          <LoginForm onClose={onClose} />
        </div>
      </div>
    </div>
  );
}
