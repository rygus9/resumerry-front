import { CommentElemResult } from "util/api/comment";
import { cls } from "util/utils";
import ChatElem from "./ChatElem";
import ChatInput from "./ChatInput";

export default function SubChat({
  childComments,
  groupId,
}: {
  childComments: CommentElemResult[] | null;
  groupId: number;
}) {
  return (
    <div
      className={cls(
        "bg-stone-50 px-5 mt-3 divide-y divide-stone-200",
        "sm:px-10"
      )}
    >
      {childComments &&
        childComments.map((elem, index) => (
          <ChatElem key={index} {...elem}></ChatElem>
        ))}
      <div className="py-4">
        <ChatInput depth={1} group={groupId} />
      </div>
    </div>
  );
}
