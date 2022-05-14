import { PostFixApi, PostFixApiInput } from "./../../../util/api/post";
import { AxiosError } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "react-query";

export default function usePostRegist() {
  const params = useParams();
  const navigate = useNavigate();

  const postUpgrade = (newPost: PostFixApiInput) =>
    PostFixApi(newPost, params.userId!, params.postId!);

  const { isLoading, mutate } = useMutation(
    (newPost: PostFixApiInput) => postUpgrade(newPost),
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
