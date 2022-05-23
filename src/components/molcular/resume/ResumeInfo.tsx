import IconNumber from "components/atom/common/IconNumber";
import ChatIcon from "components/atom/icons/chatIcon/ChatIcon";
import GoodIcon from "components/atom/icons/chatIcon/GoodIcon";
import ViewIcon from "components/atom/icons/chatIcon/ViewIcon";

export default function ResumeInfo({
  recommendCnt,
  viewCnt,
  commentCnt,
}: {
  recommendCnt: number;
  viewCnt: number;
  commentCnt: number;
}) {
  return (
    <>
      <div className="cursor-pointer transform-gpu duration-500 hover:-translate-y-1">
        <IconNumber number={recommendCnt} icon={<GoodIcon />} iconSize="sm" />
      </div>
      <IconNumber number={viewCnt} icon={<ViewIcon />} iconSize="sm" />
      <IconNumber number={commentCnt} icon={<ChatIcon />} iconSize="sm" />
    </>
  );
}
