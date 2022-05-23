import IconNumber from "components/atom/common/IconNumber";
import ChatIcon from "components/atom/icons/chatIcon/ChatIcon";
import ViewIcon from "components/atom/icons/chatIcon/ViewIcon";

export default function PostInfo({
  commentCnt,
  viewCnt,
}: {
  commentCnt: number;
  viewCnt: number;
}) {
  return (
    <>
      <IconNumber icon={<ChatIcon />} number={commentCnt} />
      <IconNumber icon={<ViewIcon />} number={viewCnt} />
    </>
  );
}
