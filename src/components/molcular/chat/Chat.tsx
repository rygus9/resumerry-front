import { useParams } from "react-router-dom";
import { PostCommentSearchApiResult } from "util/api/postcomment";
import ChatInput from "./ChatInput";
import ChatItem from "./ChatItem";

export default function Chat({
  commentCnt,
  isLoading,
  commentData,
}: {
  commentCnt: number;
  isLoading: boolean;
  commentData: PostCommentSearchApiResult | undefined;
}) {
  return (
    <>
      <ChatInput
        label={`${commentCnt}개의 댓글`}
        depth={0}
        group={commentCnt}
      />
      <div className="divide-y divide-lightGray">
        {!isLoading &&
          commentData &&
          commentData &&
          commentData.map((elem, index) => <ChatItem key={index} {...elem} />)}
      </div>
    </>
  );
}
