import LoginForm from 'components/molcular/login/LoginForm';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { openState } from 'recoil/openState';
import { cls } from 'util/utils';
import ModalFrame from './ModalFrame';

export default function LoginModal() {
  const [open, setOpen] = useRecoilState(openState);

  const onClose = useCallback(() => {
    setOpen({ ...open, loginOpen: !open.loginOpen });
  }, []);

  return (
    <ModalFrame onClose={onClose}>
      <div
        className={cls(
          'inner relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[21rem] pb-8 bg-white rounded-xl',
          'sm:w-[24rem]',
        )}
      >
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
          <LoginForm />
        </div>
      </div>
    </ModalFrame>
  );
}
