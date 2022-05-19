import IconNumber from "components/atom/common/IconNumber";
import { CommentElemResult } from "util/api/comment";
import { cls } from "util/utils";
import UserInfo from "../common/UserInfo";
import ChatInput from "./ChatInput";
import useCommentRegist from "./hooks/useCommentRegist";

export default function SubChat({
  childComments,
}: {
  childComments: CommentElemResult[];
}) {
  return (
    <div
      className={cls(
        "bg-stone-50 px-5 mt-3 divide-y divide-stone-200",
        "sm:px-10"
      )}
    >
      {childComments.map((elem, index) => (
        <div key={index} className="pb-5">
          <div className="pb-5 pt-5 w-fit">
            <UserInfo
              isAnonymous={elem.isAnonymous!}
              nickname={elem.nickname}
              imageSrc={elem.imageSrc}
              modifiedDate={elem.modifiedDate}
            />
          </div>
          <p className="text-lg text-black">{elem.contents}</p>
          <div className="mt-5 flex justify-between">
            <div className="flex space-x-2 items-center">
              <IconNumber
                src="/img/icons/good.svg"
                number={elem.recommendCnt}
                iconSize="sm"
              />
              <IconNumber src="/img/icons/dislike.svg" number={elem.banCnt} />
            </div>
          </div>
        </div>
      ))}
      <div className="py-4">
        <ChatInput depth={1} group={childComments[0].commentGroup} />
      </div>
    </div>
  );
}
