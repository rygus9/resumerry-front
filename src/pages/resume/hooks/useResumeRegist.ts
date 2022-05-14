import { ResumeWriteApi } from "./../../../util/api/resume";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { ResumeWriteApiInput } from "util/api/resume";

export default function useResumeRegist() {
  const navigate = useNavigate();
  const { isLoading, mutate } = useMutation(
    (newPost: ResumeWriteApiInput) => ResumeWriteApi(newPost),
    {
      onError: (error) => {
        const err = error as AxiosError;
        console.log("에러 발생", err.response);
      },
      onSuccess: (result) => {
        if (result) {
          alert("포스트 등록이 완료되었습니다.");
          navigate("/post");
        } else {
          alert("등록에 실패하였습니다.");
        }
      },
    }
  );

  return { isLoading, mutate };
}
