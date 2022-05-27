import IconNumber from "components/atom/common/IconNumber";
import Normalbutton from "components/atom/button/NormalButton";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import MypageNav from "./MypageNav";
import MypagePayment from "./MypagePayment";
import { cls } from "util/utils";
import MypageProfile from "./MypageProfile";
import MypageToken from "./MypagePayment";
import MypageResume from "components/molcular/mypage/MypageResume";
import { useMypageTokenQuery } from "./hooks/useMypageToken";

export default function Mypage(): JSX.Element {
  const params = useParams();
  //const { data } = useMypageQuery(params.userId!);
  return (
    <div
      className={cls(
        "flex flex-col bg-stone-100 pt-20 px-10",
        "md:flex-row md:px-8",
        "xl:px-20 xl:justify-center"
      )}
    >
      <div
        className={cls(
          "w-full h-[fit-content] bg-white  rounded-3xl",
          "md:w-[12rem] md:ml-[0%]",
          "lg:w-[20rem]",
          "xl:w-[22rem]"
        )}
      >
        <div className="justify-center flex">
          <img
            src="/img/background/question.png"
            alt=""
            className={cls(
              "rounded-full w-[7rem] h-[7rem] mb-8 mt-8",
              "sm:w-40 sm:h-40",
              "md:w-[8rem] md:h-[8rem] md:mb-12 md:mt:12",
              "lg:w-40 lg:h-40"
            )}
          />
        </div>
        <MypageProfile />
        <div className="flex justify-center mb-6">
          <Normalbutton
            size="md"
            color="normal"
            children={"수정하기"}
          ></Normalbutton>
        </div>
      </div>
      <div
        className={cls(
          "flex-1 max-w-[60rem] mt-10 mb-8 rounded-sm",
          "md:ml-10 md:mt-0",
          "lg:ml-20"
        )}
      >
        <MypageNav />
      </div>
    </div>
  );
}
