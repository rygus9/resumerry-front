import { cls } from "util/utils";
import Normalbutton from "components/atom/button/NormalButton";

export default function MypagePayment() {
  return (
    <div className="">
      <div className="flex justify-center">
        <img src="/img/icons/token.png" alt="" className={cls("w-40 mt-12")} />
      </div>
      <div className="mt-12 text-[3rem] text-center">내 토큰: 100</div>
      <div className={cls("flex my-12 justify-evenly")}>
        <div
          className={cls(
            "px-8 py-4 text-center border-2 rounded-xl border-purple-200"
          )}
        >
          토큰 100개
          <Normalbutton
            size="md"
            color="normalColor"
            children={"7900원"}
            className="mt-4"
          ></Normalbutton>
        </div>
        <div
          className={cls(
            "px-8 py-4 text-center border-2 rounded-xl border-purple-200"
          )}
        >
          토큰 200개
          <Normalbutton
            size="md"
            color="normalColor"
            children={"14900원"}
            className="mt-4"
          ></Normalbutton>
        </div>
        <div
          className={cls(
            "px-8 py-4 text-center border-2 rounded-xl border-purple-200"
          )}
        >
          토큰 300개
          <Normalbutton
            size="md"
            color="normalColor"
            children={"22500원"}
            className="mt-4"
          ></Normalbutton>
        </div>
      </div>
    </div>
  );
}
