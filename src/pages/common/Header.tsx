import TextLink from "components/atom/common/TextLink";
import Close from "components/atom/icons/Close";
import Menu from "components/atom/icons/Menu";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { openState } from "recoil/openState";
import useUser from "util/hooks/useUser";
import useGoHome from "util/hooks/goHome";
import { cls } from "../../util/utils";
import Button from "../../components/atom/button/index";

export default function Header(): JSX.Element {
  const [menu, setMenu] = useState<boolean>(false);
  const [open, setOpen] = useRecoilState(openState);
  const user = useUser();
  const goHome = useGoHome();

  const onMenuClick = useCallback(() => {
    setMenu(!menu);
  }, [menu]);

  const onLoginClick = useCallback(() => {
    setOpen({ ...open, loginOpen: true });
  }, []);

  const onLogout = useCallback(() => {
    localStorage.removeItem("userToken");
    goHome();
    location.reload();
  }, []);

  const myMemberId = localStorage.getItem("myMemberId");

  return (
    <header
      className={cls(
        "w-full h-14 fixed top-0 flex items-center bg-white z-30 shadow-sm shadow-deepGray"
      )}
    >
      {/* logo */}
      <div className={cls("ml-5 flex-auto", "md:flex-initial")}>
        <div className={cls("w-[5rem] font-DoHyean text-black", "md:w-fit")}>
          <TextLink to="/" size="lg" color="black">
            Resumerry
          </TextLink>
        </div>
      </div>
      {/* content */}
      <div
        className={cls(
          menu ? "absolute top-14 bg-black  w-full flex flex-col" : "hidden",
          "md:flex md:relative md:top-0 md:bg-white md:flex-row md:flex-auto"
        )}
        onClick={onMenuClick}
      >
        <ul
          className={cls(
            "flex-auto flex flex-col items-center order-2 space-y-3 pb-5",
            "md:order-1 md:flex-row md:ml-4 md:space-y-0 md:pb-0"
          )}
        >
          <TextLink to="/post">질문 게시판</TextLink>
          <TextLink to="/resume">이력서 보기</TextLink>
          <TextLink to="/recommend">이력서 추천</TextLink>
        </ul>
        {/* about auth */}
        <div
          className={cls(
            "space-x-3 flex justify-center items-center py-5 order-1",
            "md:order-2 md:mr-10 md:py-0"
          )}
        >
          {user ? (
            <>
              <Button onClick={onLogout}>로그아웃</Button>
              <Link to={`/mypage/${myMemberId}`}>
                <Button>마이페이지</Button>
              </Link>
            </>
          ) : (
            <>
              <Button onClick={onLoginClick}>로그인</Button>
              <Link to="/signup">
                <Button>회원가입</Button>
              </Link>
            </>
          )}
        </div>
      </div>
      {/* menu */}
      <div
        className={cls(
          "w-10 h-5 cursor-pointer flex-initial flex items-center justify-center mr-4",
          "md:hidden"
        )}
        onClick={onMenuClick}
      >
        {!menu ? <Menu /> : <Close />}
      </div>
    </header>
  );
}
