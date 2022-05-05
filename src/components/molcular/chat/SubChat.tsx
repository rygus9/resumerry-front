import IconNumber from 'components/atom/common/IconNumber';
import UserInfo from '../common/UserInfo';
import ChatInput from './ChatInput';

interface Props {
  postCommentDepth: any[];
}

export default function SubChat({ postCommentDepth }: Props) {
  return (
    <div className="bg-stone-50 px-10 py-4 mt-3 divide-y divide-stone-200">
      {postCommentDepth.map((elem) => (
        <div key={elem.commentId} className="pb-5">
          <div className="pb-5 pt-2">
            <UserInfo
              isAnonymous={elem.isAnonymous!}
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
          </div>
        </div>
      ))}
      <ChatInput />
    </div>
  );
}
