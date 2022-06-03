import { ResumeUnlockApi } from "./../../../../util/api/resume";
import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { AxiosError } from "axios";

export const useResumeUnlock = (onClose: () => void) => {
  const params = useParams();
  const navigate = useNavigate();

  const { isLoading, mutate } = useMutation(
    () => ResumeUnlockApi(params.userId!, params.resumeId!),
    {
      onError: (error) => {
        const err = error as AxiosError;
        console.log("에러 발생", err.response);
      },
      onSuccess: ({ data }) => {
        onClose();
        if (data.result) {
          alert("잠금해제가 완료되었습니다.");
          navigate(0);
        } else {
          alert("토큰 갯수가 부족합니다.");
        }
      },
    }
  );
  return { isLoading, mutate };
};
