import IconNumber from 'components/atom/common/IconNumber';

interface PostItemProps {
  postId: string;
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
    <div className="px-3 py-5 cursor-pointer">
      {/* profile */}
      <div className="flex items-center">
        <div className="bg-slate-300 rounded-full w-10 h-10" />
        <span className="text-lg px-3">{isAnnonymous ? '익명' : nickname}</span>
        <span className="text-md px-3">{modifiedDate}</span>
      </div>
      {/* body */}
      <div className="py-4">
        <h3 className="py-3 text-xl">{title}</h3>
        <p className="max-w-xl">{contents}</p>
      </div>
      {/* icons */}
      <div className="flex justify-end mr-10">
        <IconNumber src="/img/icons/chat.svg" number={commentCnt} />
        <IconNumber src="/img/icons/view.svg" number={viewCnt} />
      </div>
    </div>
  );
}
