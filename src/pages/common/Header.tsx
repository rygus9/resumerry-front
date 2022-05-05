import TextLink from 'components/atom/common/TextLink';
import Close from 'components/atom/icons/Close';
import Menu from 'components/atom/icons/Menu';
import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { openState } from 'recoil/openState';
import { cls } from '../../util/utils';
import Button from '../../components/atom/button/index';

export default function Header(): JSX.Element {
  const [menu, setMenu] = useState<boolean>(false);
  const [open, setOpen] = useRecoilState(openState);

  const onMenuClick = useCallback(() => {
    setMenu(!menu);
  }, [menu]);

  const onLoginClick = useCallback(() => {
    setOpen({ ...open, loginOpen: !open.loginOpen });
  }, []);

  return (
    <header
      className={cls(
        'w-full h-14 fixed flex items-center bg-white z-30 shadow-sm shadow-deepGray',
      )}
    >
      {/* logo */}
      <TextLink
        to="/"
        size="lg"
        color="black"
        className={cls('ml-5 flex-auto', 'md:flex-initial')}
      >
        Resumerry
      </TextLink>
      {/* content */}
      <div
        className={cls(
          menu ? 'absolute top-14 bg-lightGray w-full flex flex-col' : 'hidden',
          'md:flex md:relative md:top-0 md:bg-white md:flex-row md:flex-auto',
        )}
      >
        <ul
          className={cls(
            'flex-auto flex flex-col items-center order-2',
            'md:order-1 md:flex-row md:ml-4',
          )}
        >
          <TextLink to="/post">질문 게시판</TextLink>
          <TextLink to="/resume">이력서 보기</TextLink>
          <TextLink to="/recommend">이력서 추천</TextLink>
        </ul>
        {/* about auth */}
        <div
          className={cls(
            'space-x-3 flex justify-center items-center py-5 order-1',
            'md:order-2 md:mr-10 md:py-0',
          )}
        >
          <Button onClick={onLoginClick}>로그인</Button>
          <Link to="/signup">
            <Button>회원가입</Button>
          </Link>
        </div>
      </div>
      {/* menu */}
      <div
        className={cls('w-10 h-5 cursor-pointer', 'md:hidden')}
        onClick={onMenuClick}
      >
        {!menu ? <Menu /> : <Close />}
      </div>
    </header>
  );
}
