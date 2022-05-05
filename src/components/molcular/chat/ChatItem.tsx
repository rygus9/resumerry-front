import NormalButton from 'components/atom/button/NormalButton';
import IconNumber from 'components/atom/common/IconNumber';
import { useCallback, useState } from 'react';
import UserInfo from '../common/UserInfo';
import SubChat from './SubChat';

interface Props {
  key: string;
  memberId: string;
  isAnonymous: boolean;
  modifiedDate: string;
  nickname: string;
  imageSrc: string;
  contents: string;
  recommendCnt: number;
  banCnt: number;
  postCommentDepth: any[];
}

export default function ChatItem({ ...elem }: Props) {
  const [subOpen, setSubOpen] = useState(false);
  const onClick = useCallback(() => setSubOpen(!subOpen), [subOpen]);

  return (
    <div className="py-3">
      <div className="pb-5 pt-3">
        <UserInfo
          isAnonymous={elem.isAnonymous}
          nickname={elem.nickname}
          imageSrc={elem.imageSrc}
        />
      </div>
      <p className="text-lg text-black">{elem.contents}</p>
      <div className="mt-5 flex justify-between">
        <div className="flex space-x-2 items-center">
          <span className="text-deepGray pr-3">{elem.modifiedDate}</span>
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
              {subOpen && '댓글 닫기'}
              {!subOpen &&
                (elem.postCommentDepth.length ? (
                  <>{elem.postCommentDepth.length}개의 댓글</>
                ) : (
                  '댓글 작성'
                ))}
            </>
          </NormalButton>
        </div>
      </div>
      {subOpen && <SubChat postCommentDepth={elem.postCommentDepth} />}
    </div>
  );
}
