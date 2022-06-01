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
        if (result) {
          loadTossPayments("test_ck_Kma60RZblrq6dKoKZab8wzYWBn14").then(
            (tossPayments): Promise<PaymentMypageApiResult> => {
              tossPayments.requestPayment(result.data.data.payType, {
                amount: result.data.data.amount,
                orderId: result.data.data.orderId,
                orderName: result.data.data.orderName,
                customerName: result.data.data.customerName,
                successUrl:
                  "http://localhost:3000" + result.data.data.successUrl,
                failUrl: "http://localhost:3000" + result.data.data.failUrl,
              });
              return result.data.data;
            }
          );
          setPayment((elem) => !elem);
        } else {
          alert("결제에 실패하였습니다.");
        }
      },
    }
  );

  return { isLoading, mutate };
}
