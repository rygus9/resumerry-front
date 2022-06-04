import { PaymentMypageApi, PaymentMypageApiResult } from "util/api/mypage";
import { AxiosError } from "axios";
import { useParams } from "react-router-dom";
import { useMutation } from "react-query";
import { useMypageProfileQuery } from "pages/mypage/hooks/useMypageProfile";
import { loadTossPayments } from "@tosspayments/payment-sdk";

export default function useMypagePaymentQuery(
  setPayment: React.Dispatch<React.SetStateAction<boolean | null>>
) {
  const params = useParams();
  const { data } = useMypageProfileQuery(params.userId!);
  const { isLoading, mutate } = useMutation(
    () => PaymentMypageApi(data?.email!, data?.nickname!),
    {
      onError: (error) => {
        const err = error as AxiosError;
        console.log("에러 발생", err.response);
      },
      onSuccess: (result) => {
        console.log(result.data.data);
        let baseURL = "https://resumerry.com";
        if (process.env.NODE_ENV === "development") {
          baseURL = "http://localhost:3000";
        }
        if (result) {
          loadTossPayments("test_ck_dP9BRQmyarY5ZMaNvv7rJ07KzLNk").then(
            async (tossPayments): Promise<PaymentMypageApiResult> => {
              await tossPayments.requestPayment(result.data.data.payType, {
                amount: result.data.data.amount,
                orderId: result.data.data.orderId,
                orderName: result.data.data.orderName,
                customerName: result.data.data.customerName,
                successUrl: `${baseURL}/orders/success`,
                failUrl: `${baseURL}/orders/fail`,
              });
              //navigate("/");
              setPayment((elem) => !elem);
              return result.data.data;
            }
          );
        } else {
          alert("결제에 실패하였습니다.");
        }
      },
    }
  );

  return { isLoading, mutate };
}
