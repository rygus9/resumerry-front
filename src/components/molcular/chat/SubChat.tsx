import IconNumber from 'components/atom/common/IconNumber';
import { cls } from 'util/utils';
import UserInfo from '../common/UserInfo';
import ChatInput from './ChatInput';

interface Props {
  postCommentDepth: any[];
}

export default function SubChat({ postCommentDepth }: Props) {
  return (
    <div
      className={cls(
        'bg-stone-50 px-5 mt-3 divide-y divide-stone-200',
        'sm:px-10',
      )}
    >
      {postCommentDepth.map((elem) => (
        <div key={elem.commentId} className="pb-5">
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
        <ChatInput />
      </div>
    </div>
  );
}
