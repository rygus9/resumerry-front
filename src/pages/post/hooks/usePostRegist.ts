import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { PostWriteApi, PostWriteApiInput } from "./../../../util/api/post";
import { useMutation } from "react-query";

export default function usePostRegist() {
  const navigate = useNavigate();
  const { isLoading, mutate } = useMutation(
    (newPost: PostWriteApiInput) => PostWriteApi(newPost),
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
