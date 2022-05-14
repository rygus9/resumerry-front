import { openState } from "recoil/openState";
import { useRecoilState } from "recoil";
import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { ResumeDeleteApi } from "util/api/resume";

export default function useResumeDelete() {
  const navigate = useNavigate();
  const params = useParams();
  const [open, setOpen] = useRecoilState(openState);

  const { isLoading, mutate } = useMutation(
    () => ResumeDeleteApi(params.userId!, params.resumeId!),
    {
      onError: (error) => {
        const err = error as AxiosError;
        console.log("에러 발생", err.response);
      },
      onSuccess: (result) => {
        if (result) {
          alert("포스트 삭제가 완료되었습니다.");
          navigate("/resume");
          setOpen({ ...open, resumeDeleteOpen: !open.resumeDeleteOpen });
        } else {
          alert("삭제에 실패하였습니다.");
        }
      },
    }
  );

  return { isLoading, mutate };
}
