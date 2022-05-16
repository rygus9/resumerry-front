import { AxiosError } from "axios";
import { ResumeRecommendApi } from "./../../../util/api/resume";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
export const useResumeRecommmend = () => {
  const params = useParams();

  const { isLoading, mutate } = useMutation(
    () => ResumeRecommendApi(params.userId!, params.resumeId!),
    {
      onError: (error) => {
        const err = error as AxiosError;
        console.log("에러 발생 : ", err);
      },
      onSuccess: (result) => {
        if (result) {
          alert("포스트 추천이 완료되었습니다.");
        } else {
          alert("추천에 실패하였습니다.");
        }
      },
    }
  );

  return { isLoading, mutate };
};
