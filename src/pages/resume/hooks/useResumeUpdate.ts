import { AxiosError } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "react-query";
import { ResumeFixApi, ResumeFixApiInput } from "util/api/resume";

export default function usePostRegist() {
  const params = useParams();
  const navigate = useNavigate();

  const resomeUpgrade = (newResume: ResumeFixApiInput) =>
    ResumeFixApi(newResume, params.userId!, params.resumeId!);

  const { isLoading, mutate } = useMutation(
    (newResume: ResumeFixApiInput) => resomeUpgrade(newResume),
    {
      onError: (error) => {
        const err = error as AxiosError;
        console.log("에러 발생", err.response);
      },
      onSuccess: (result) => {
        if (result) {
          alert("포스트 수정이 완료되었습니다.");
          navigate(-1);
        } else {
          alert("등록에 실패하였습니다.");
        }
      },
    }
  );

  return { isLoading, mutate };
}
