import NormalButton from "components/atom/button/NormalButton";
import { useCallback, useState } from "react";
import { MainCommentElemResult } from "util/api/comment";
import UserInfo from "../common/UserInfo";
import ChatElem from "./ChatElem";
import ChatInfo from "./ChatInfo";
import useCommentDelete from "./hooks/useCommentDelete";
import SubChat from "./SubChat";

export default function ChatItem(elem: MainCommentElemResult) {
  const [subOpen, setSubOpen] = useState(false);
  const onClick = useCallback(() => setSubOpen(!subOpen), [subOpen]);

  return (
    <div className="py-3">
      <ChatElem
        button={
          <div className="pr-5">
            <NormalButton onClick={onClick}>
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
        />
      )}
    </div>
  );
}
