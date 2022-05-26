import NormalButton from "components/atom/button/NormalButton";
import { useCallback, useState } from "react";
import { MainCommentElemResult } from "util/api/comment";
import { cls } from "util/utils";
import ChatElem from "./ChatElem";
import SubChat from "./SubChat";

interface Props extends MainCommentElemResult {
  size: "sm" | "md";
}

export default function ChatItem(elem: Props) {
  const [subOpen, setSubOpen] = useState(false);
  const onClick = useCallback(() => setSubOpen(!subOpen), [subOpen]);

  return (
    <div className="py-3">
      <ChatElem
        button={
          <div className={cls(elem.size === "sm" ? "" : "pr-5")}>
            <NormalButton onClick={onClick} size={elem.size}>
              <>
                {subOpen && "댓글 닫기"}
                {!subOpen &&
                  (elem.childComments.length ? (
                    <>{elem.childComments.length}개의 댓글</>
                  ) : (
                    "댓글 작성"
                  ))}
              </>
            </NormalButton>
          </div>
        }
        {...elem}
      />
      {subOpen && (
        <SubChat
          childComments={elem.childComments}
          groupId={elem.commentGroup}
          size={elem.size}
        />
      )}
    </div>
  );
}
