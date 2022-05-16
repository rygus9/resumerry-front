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
      PostCommentWriteApi(
        {
          contents: "ddd",
          isAnonymouns: false,
          postCommentDepth: 0,
          postCommentGroup: 1,
        },
        params.userId!,
        params.postId!
      ),
    {
      onError: (error) => {
        const err = error as AxiosError;
        console.log("에러 발생", err.response);
      },
      onSuccess: (result) => {
        console.log("성공 메시지:", result);
      },
    }
  );

  return { isLoading, mutate };
}
