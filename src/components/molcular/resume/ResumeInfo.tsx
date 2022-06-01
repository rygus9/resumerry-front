import IconNumber from "components/atom/common/IconNumber";
import ChatIcon from "components/atom/icons/chatIcon/ChatIcon";
import GoodIcon from "components/atom/icons/chatIcon/GoodIcon";
import ViewIcon from "components/atom/icons/chatIcon/ViewIcon";
import { useResumeRecommmend } from "pages/resume/hooks/useResumeRecommend";

export default function ResumeInfo({
  recommendDone = false,
  recommendCnt,
  viewCnt,
  commentCnt,
}: {
  recommendDone?: boolean;
  recommendCnt: number;
  viewCnt: number;
  commentCnt: number;
}) {
  const { isLoading: isRecommendLoading, mutate: recommendMutate } =
    useResumeRecommmend();

  return (
    <>
      <div
        className="cursor-pointer transform-gpu duration-500 hover:-translate-y-1"
        onClick={recommendDone ? () => {} : () => recommendMutate()}
      >
        <IconNumber
          number={recommendCnt}
          icon={<GoodIcon isTrue={recommendDone} />}
          isTrue={recommendDone}
          iconSize="sm"
        />
      </div>
      <IconNumber number={viewCnt} icon={<ViewIcon />} iconSize="sm" />
      <IconNumber number={commentCnt} icon={<ChatIcon />} iconSize="sm" />
    </>
  );
}
