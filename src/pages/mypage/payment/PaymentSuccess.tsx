import { cls } from "util/utils";
import Normalbutton from "components/atom/button/NormalButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { paymentApprove, paymentplz } from "./hooks/useTossRequest";

export default function PaymentSuccess() {
  const [isapproved, setIsapproved] = useState(false);
  const response = paymentApprove(window.location.search.split("&"));
  console.log(response);
  return (
    <div className="flex justify-center">
      <div className="rounded-b-xl bg-purple-200 mx-16 mt-12 py-8 rounded-xl max-w-5xl px-12">
        <div className="flex justify-center">
          <img
            src="/img/icons/token.png"
            alt=""
            className={cls("w-40 mt-12")}
          />
        </div>
        <div className="mt-12 text-[3rem] text-center text-deepGray">
          토큰 100개가 충전되었습니다!<br></br> 지금 이력서를 확인하러 가보세요!
        </div>
        <div className={cls("flex my-12 justify-center pb-4")}>
          <Link to={`/resume`}>
            <Normalbutton
              size="lg"
              color="normal"
              children={"이력서 확인하기"}
              className="mt-4 bg-white"
            ></Normalbutton>
          </Link>
        </div>
      </div>
    </div>
  );
}
