import {
  PostCommentWriteApi,
  PostCommentWriteApiInput,
} from "util/api/postcomment";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { AxiosError } from "axios";

export default function useCommentRegist() {
  const params = useParams();

  const { isLoading, mutate } = useMutation(
    (newComment: PostCommentWriteApiInput) =>
      PostCommentWriteApi(newComment, params.userId!, params.postId!),
    {
      onError: (error) => {
        const err = error as AxiosError;
        console.log("에러 발생", err.response);
      },
      onSuccess: (result) => {
        if (result) {
          alert("댓글 등록이 완료되었습니다.");
        } else {
          alert("등록에 실패하였습니다.");
        }
      },
    }
  );

  return { isLoading, mutate };
}
