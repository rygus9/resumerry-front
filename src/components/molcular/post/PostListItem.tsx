import IconNumber from 'components/atom/common/IconNumber';
import { Link } from 'react-router-dom';
import UserInfo from '../common/UserInfo';

interface PostItemProps {
  postId: string;
  memberId: string;
  title: string;
  contents: string;
  commentCnt: number;
  viewCnt: number;
  isAnnonymous: boolean;
  imageSrc: string | null;
  nickname: string;
  modifiedDate: string;
}

export default function PostListItem({
  postId,
  memberId,
  title,
  contents,
  commentCnt,
  viewCnt,
  isAnnonymous,
  imageSrc,
  nickname,
  modifiedDate,
}: PostItemProps): JSX.Element {
  return (
    <Link to={`./${memberId}/${postId}`}>
      <div className="px-3 py-5 cursor-pointer">
        {/* profile */}
        <UserInfo
          imageSrc={imageSrc}
          nickname={nickname}
          isAnonymous={isAnnonymous}
        />
        {/* body */}
        <div className="pt-2 pb-2">
          <h3 className="py-3 text-xl">{title}</h3>
          <p className="max-w-xl">{contents}</p>
        </div>
        {/* icons */}
        <div className="flex justify-between mr-10">
          <span className="text-deepGray">{modifiedDate}</span>
          <div className="flex space-x-5">
            <IconNumber src="/img/icons/chat.svg" number={commentCnt} />
            <IconNumber src="/img/icons/view.svg" number={viewCnt} />
          </div>
        </div>
      </div>
    </Link>
  );
}
