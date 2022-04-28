import Close from 'components/_atom/icons/Close';
import Menu from 'components/_atom/icons/Menu';
import ListElement from 'components/_atom/ListElement';
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { cls } from '../../service/utils';
import Button from '../_atom/Button';

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ setOpen }: Props): JSX.Element {
  const [menu, setMenu] = useState<boolean>(false);

  const onMenuClick = useCallback(() => {
    setMenu(!menu);
  }, [menu]);

  const onClick = useCallback(() => {
    setOpen((elem) => !elem);
  }, []);

  return (
    <header
      className={cls(
        'w-full h-14 flex items-center bg-white fixed z-30 shadow-sm shadow-deepGray',
      )}
    >
      {/* logo */}
      <div
        className={cls(
          'text-deepBlack text-2xl ml-10 flex-auto select-none',
          'md:flex-initial',
        )}
      >
        Resumerry
      </div>
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
          <Link to="/board">
            <ListElement>질문 게시판</ListElement>
          </Link>
          <ListElement>이력서 보기</ListElement>
          <ListElement>이력서 추천</ListElement>
        </ul>
        {/* about auth */}
        <div
          className={cls(
            'space-x-3 flex justify-center items-center py-5 order-1',
            'md:order-2 md:mr-10 md:py-0',
          )}
        >
          <Button onClick={onClick}>로그인</Button>
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
