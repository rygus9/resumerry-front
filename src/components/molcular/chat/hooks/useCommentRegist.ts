import {
  CommentWriteApiInput,
  PostCommentWriteApi,
  ResumeCommentWriteApi,
  ResumeCommentWriteApiInput,
} from "util/api/comment";
import { useMutation, useQueryClient } from "react-query";
import { AxiosError } from "axios";
import { useLocation, useParams } from "react-router-dom";

export default function useCommentRegist() {
  const location = useLocation();
  const params = useParams();
  const path = location.pathname.split("/")[1];
  const queryClient = useQueryClient();

  let CommentWriteFunc = null;
  if (path === "resume") {
    CommentWriteFunc = (newComment: ResumeCommentWriteApiInput) =>
      ResumeCommentWriteApi(newComment, params.userId!, params.resumeId!);
  } else {
    CommentWriteFunc = (newComment: CommentWriteApiInput) =>
      PostCommentWriteApi(newComment, params.userId!, params.postId!);
  }

  const { isLoading, mutate } = useMutation(CommentWriteFunc, {
    onError: (error) => {
      const err = error as AxiosError;
      console.log("에러 발생", err.response);
    },
    onSuccess: (result) => {
      console.log("성공 메시지:", result);
      if (path === "resume") {
        queryClient.fetchQuery([
          "ResumeComment",
          params.userId,
          params.resumeId,
        ]);
      } else {
        queryClient.fetchQuery(["PostComment", params.userId, params.postId]);
      }
    },
  });

  return { isLoading, mutate };
}
