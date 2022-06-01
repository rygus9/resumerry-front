import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import {
  MainCommentElemResult,
  PostCommentDeleteApi,
  ResumeCommentDeleteApi,
} from "util/api/comment";

export default function useCommentDelete(
  commentId: number,
  groupId: number,
  depth: number
) {
  const location = useLocation();
  const params = useParams();
  const path = location.pathname.split("/")[1];
  const queryClient = useQueryClient();

  let CommentDeleteFunc = null;
  if (path === "resume") {
    CommentDeleteFunc = () =>
      ResumeCommentDeleteApi(params.userId!, params.resumeId!, commentId);
  } else {
    CommentDeleteFunc = () =>
      PostCommentDeleteApi(params.userId!, params.postId!, commentId);
  }

  const { isLoading, mutate } = useMutation(CommentDeleteFunc, {
    onError: (error) => {
      const err = error as AxiosError;
      console.log("에러 발생", err.response);
    },
    onMutate: () => {
      if (path === "resume") {
        queryClient.setQueryData(
          ["ResumeComment", params.userId, params.resumeId],
          (old: MainCommentElemResult[] | undefined) => {
            const nextVal = old?.map((elem) => {
              if (elem.commentGroup === groupId) {
                if (depth === 0) {
                  elem.isDelete = "Y";
                } else {
                  elem.childComments = elem.childComments.map((childElem) => {
                    if (childElem.commentId === commentId) {
                      childElem.isDelete = "Y";
                    }
                    return childElem;
                  });
                }
              }
              return elem;
            });
            return nextVal!;
          }
        );
      } else {
        queryClient.setQueryData(
          ["PostComment", params.userId, params.postId],
          (old: MainCommentElemResult[] | undefined) => {
            const nextVal = old?.map((elem) => {
              if (elem.commentGroup === groupId) {
                if (depth === 0) {
                  elem.isDelete = "Y";
                } else {
                  elem.childComments = elem.childComments.map((childElem) => {
                    if (childElem.commentId === commentId) {
                      childElem.isDelete = "Y";
                    }
                    return childElem;
                  });
                }
              }
              return elem;
            });
            return nextVal!;
          }
        );
      }
    },
    onSuccess: (result) => {
      console.log("성공 메시지:", result);
    },
  });

  return { isLoading, mutate };
}
