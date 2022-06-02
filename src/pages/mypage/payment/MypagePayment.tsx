import { cls } from "util/utils";
import Normalbutton from "components/atom/button/NormalButton";
import useMypagePaymentQuery from "./hooks/useMypagePayment";
import { useParams } from "react-router-dom";
import { useState } from "react";
import PaymentSuccess from "./PaymentSuccess";
export default function MypagePayment() {
  const params = useParams();
  const [payment, setPayment] = useState<boolean | null>(null);
  const { isLoading: isPaymentLoading, mutate: scrapPayment } =
    useMypagePaymentQuery(setPayment);
  return (
    <>
      {!payment ? (
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
              토큰을 사용하여<br></br> 더 다양한 이력서를 경험해 보세요!
            </div>
            <div className={cls("flex my-12 justify-center pb-4")}>
              <div
                className={cls(
                  "px-8 py-4 text-center border-2 rounded-xl border-purple-200 text-xl text-lightBlack bg-white"
                )}
              >
                토큰 충전
                <Normalbutton
                  size="lg"
                  color="normal"
                  children={"7900원"}
                  className="mt-4 bg-white"
                  onClick={() => {
                    scrapPayment();
                  }}
                ></Normalbutton>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <PaymentSuccess />
      )}
    </>
  );
}
