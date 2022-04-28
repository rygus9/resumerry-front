import MainButton from 'components/_atom/MainButton';
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { cls } from 'service/utils';

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
      <div className="inner relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 h-[400px] bg-white rounded-xl">
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
            당신의 어쩌구 저쩌구
          </h4>
          <form className="space-y-3">
            <div>
              <label htmlFor="id" className="block">
                아이디
              </label>
              <input
                type="text"
                id="id"
                className={cls(
                  'w-full h-8 border-deepGray rounded-lg',
                  'focus:ring-deepGray focus:border-deepGray',
                )}
              />
            </div>
            <div>
              <label htmlFor="id" className="block">
                비밀번호
              </label>
              <input
                type="text"
                id="id"
                className={cls(
                  'w-full h-8 border-deepGray rounded-lg',
                  'focus:ring-deepGray focus:border-deepGray',
                )}
              />
            </div>
            <div className="flex justify-center pt-3">
              <MainButton type="submit">로그인하기</MainButton>
            </div>
            <div className="text-sm text-center">
              아직 회원이 아니신가요?{' '}
              <Link to="/signup">
                <span className="text-deepPurple">회원가입</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
