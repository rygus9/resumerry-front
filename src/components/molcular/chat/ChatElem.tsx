import NormalButton from "components/atom/button/NormalButton";
import { CommentElemResult } from "util/api/comment";
import { cls } from "util/utils";
import UserInfo from "../common/UserInfo";
import ChatInfo from "./ChatInfo";
import useCommentDelete from "./hooks/useCommentDelete";
import useCommentRecommend from "./hooks/useCommentRecommend";
import useCommentReport from "./hooks/useCommentReport";

interface ChatElemProps extends CommentElemResult {
  button: JSX.Element | null;
  size: "sm" | "md";
}

ChatElem.defaultProps = {
  button: null,
};

export default function ChatElem({ button, size, ...elem }: ChatElemProps) {
  const { isLoading: deleteLoading, mutate: deleteMutate } = useCommentDelete(
    elem.commentId,
    elem.commentGroup,
    elem.commentDepth
  );

  const { isLoading: RecommendLoading, mutate: RecommendMutate } =
    useCommentRecommend(elem.commentId, elem.commentGroup, elem.commentDepth);

  const { isLoading: ReportLoading, mutate: ReportMutate } = useCommentReport(
    elem.commentId,
    elem.commentGroup,
    elem.commentDepth
  );

  return (
    <div className="pb-1">
      <div className={cls("items-center", size === "sm" ? "block" : "flex")}>
        <div className={cls(size === "sm" ? "py-3" : "py-5", "w-fit")}>
          <UserInfo
            isAnonymous={elem.isAnonymous!}
            nickname={elem.nickname}
            imageSrc={elem.imageSrc}
            modifiedDate={elem.modifiedDate}
            size={size}
          />
        </div>
        {elem.isOwner && elem.isDelete === "N" && (
          <div className="pb-3">
            <NormalButton
              onClick={() => {
                deleteMutate();
              }}
              size={size}
            >
              삭제
            </NormalButton>
          </div>
        )}
      </div>
      <p
        className={cls(
          "text-lightBlack min-h-[3rem]",
          size === "sm" ? "text-base" : "text-lg",
          size === "sm" ? "min-h-[2.5rem]" : "min-h-[3rem]"
        )}
      >
        {elem.isDelete === "Y"
          ? "삭제된 댓글입니다."
          : elem.contents.split("\n").map((elem, index) => (
              <span key={index}>
                {elem} <br />
              </span>
            ))}
      </p>
      <div
        className={cls(
          "flex justify-between items-center",
          size === "sm" ? "mt-2" : "mt-5"
        )}
      >
        <div className="flex space-x-2 items-center">
          {elem.isDelete === "N" && (
            <ChatInfo
              isBanned={elem.isBanned}
              isRecommend={elem.isRecommend}
              recommendCnt={elem.recommendCnt}
              banCnt={elem.banCnt}
              onRecommend={RecommendMutate}
              onReport={ReportMutate}
            ></ChatInfo>
          )}
        </div>
        {button && button}
      </div>
    </div>
  );
}
