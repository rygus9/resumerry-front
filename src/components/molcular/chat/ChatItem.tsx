import NormalButton from "components/atom/button/NormalButton";
import IconNumber from "components/atom/common/IconNumber";
import { useCallback, useState } from "react";
import { MainCommentElemResult } from "util/api/comment";
import UserInfo from "../common/UserInfo";
import SubChat from "./SubChat";

export default function ChatItem(elem: MainCommentElemResult) {
  const [subOpen, setSubOpen] = useState(false);
  const onClick = useCallback(() => setSubOpen(!subOpen), [subOpen]);

  return (
    <div className="py-3">
      <div className="pb-5 pt-3 w-fit">
        <UserInfo
          isAnonymous={elem.isAnonymous}
          nickname={elem.nickname}
          imageSrc={elem.imageSrc}
          modifiedDate={elem.modifiedDate}
        />
      </div>
      <p className="text-lg text-black min-h-[3rem]">
        {elem.contents.split("\n").map((elem, index) => (
          <span key={index}>
            {elem} <br />
          </span>
        ))}
      </p>
      <div className="mt-2 flex justify-between">
        <div className="flex space-x-2 items-center">
          <IconNumber
            src="/img/icons/good.svg"
            number={elem.recommendCnt}
            iconSize="sm"
          />
          <IconNumber src="/img/icons/dislike.svg" number={elem.banCnt} />
        </div>
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
      </div>
      {subOpen && <SubChat childComments={elem.childComments} />}
    </div>
  );
}
