import IconNumber from 'components/atom/common/IconNumber';

interface Props {
  category: string;
  commentCnt: number;
  viewCnt: number;
}

export default function SideInfo({ category, commentCnt, viewCnt }: Props) {
  return (
    <aside className="relative basis-1/5">
      <div className="fixed top-52 space-y-3 pt-5 pb-2 px-2 bg-stone-100 rounded-2xl">
        <div className="text-black pt-1 pl-2">
          <h3 className="text-lightBlack">category</h3>
          <h5 className="text-xl">{category}</h5>
        </div>
        <div className="flex border-t-2 border-gray py-2 space-x-4">
          <IconNumber src="/img/icons/chat.svg" number={commentCnt} />
          <IconNumber src="/img/icons/view.svg" number={viewCnt} />
        </div>
      </div>
    </aside>
  );
}
