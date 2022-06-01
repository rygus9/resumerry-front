import { CommentElemResult } from "util/api/comment";
import { cls } from "util/utils";
import ChatElem from "./ChatElem";
import ChatInput from "./ChatInput";

export default function SubChat({
  childComments,
  groupId,
  size,
  yPath,
}: {
  childComments: CommentElemResult[] | null;
  groupId: number;
  size: "sm" | "md";
  yPath?: number;
}) {
  return (
    <div
      className={cls(
        "bg-stone-50 mt-3 divide-y divide-stone-200",
        size === "sm" ? "px-2" : "px-5",
        size === "sm" ? "sm:px-2" : "sm:px-10"
      )}
    >
      {childComments &&
        childComments.map((elem, index) => (
          <ChatElem key={`subchat${index}`} {...elem} size={size}></ChatElem>
        ))}
      <div className="py-4">
        <ChatInput depth={1} group={groupId} size={size} yPath={yPath} />
      </div>
    </div>
  );
}
