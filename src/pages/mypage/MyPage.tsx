import IconNumber from "components/atom/common/IconNumber";
import Normalbutton from "components/atom/button/NormalButton";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import MypageNav from "./MypageNav";
import MypagePayment from "./payment/MypagePayment";
import { cls } from "util/utils";
import MypageProfile from "./MypageProfile";
import MypageProfileContainer from "./MypageProfileContainer";

export default function Mypage(): JSX.Element {
  const params = useParams();
  //const { data } = useMypageQuery(params.userId!);
  return (
    <div
      className={cls(
        "flex flex-col bg-stone-100 pt-20 px-10 pb-5",
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
        <MypageProfileContainer />
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
