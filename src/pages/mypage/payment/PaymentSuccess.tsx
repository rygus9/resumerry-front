import { cls } from "util/utils";
import { PaymentAcceptApi } from "util/api/mypage";
import Normalbutton from "components/atom/button/NormalButton";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const sendPayment = async () => {
      const res = await PaymentAcceptApi(
        searchParams.get("orderId") as string,
        searchParams.get("paymentKey") as string,
        searchParams.get("amount") as string
      );
      console.log(res);
    };
    sendPayment();
  }, [searchParams]);

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
          토큰 100개가 충전되었습니다!
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
