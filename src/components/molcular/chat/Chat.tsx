import {
  MainCommentElemResult,
  PostCommentSearchApiResult,
} from "util/api/comment";
import LoadingUI from "../common/LoadingUI";
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
      {isLoading ? (
        <div className="mt-10">
          <LoadingUI />
        </div>
      ) : (
        <>
          <ChatInput
            label={`${commentCnt}개의 댓글`}
            depth={0}
            group={commentData ? commentData?.length : 0}
          />
          <div className="divide-y divide-lightGray">
            {!isLoading &&
              commentData &&
              commentData.map((elem, index) => (
                <ChatItem key={index} {...elem} />
              ))}
          </div>
        </>
      )}
    </>
  );
}
