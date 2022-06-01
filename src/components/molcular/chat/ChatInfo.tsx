import IconNumber from "components/atom/common/IconNumber";
import DislikeIcon from "components/atom/icons/chatIcon/DislikeIcon";
import GoodIcon from "components/atom/icons/chatIcon/GoodIcon";
import { UseMutateFunction } from "react-query/types/react/types";

export default function ChatInfo({
  recommendCnt,
  banCnt,
  isRecommend = false,
  isBanned = false,
  onRecommend = () => {},
  onReport = () => {},
}: {
  recommendCnt: number;
  banCnt: number;
  isRecommend: boolean;
  isBanned: boolean;
  onRecommend?: UseMutateFunction;
  onReport?: UseMutateFunction;
}) {
  return (
    <>
      <div className="cursor-pointer transform-gpu duration-500 hover:-translate-y-1">
        {isRecommend ? (
          <IconNumber
            icon={<GoodIcon isTrue={true} />}
            number={recommendCnt}
            isTrue={true}
            iconSize="sm"
          />
        ) : (
          <div onClick={() => onRecommend()}>
            <IconNumber
              icon={<GoodIcon />}
              number={recommendCnt}
              iconSize="sm"
            />
          </div>
        )}
      </div>
      <div className="cursor-pointer transform-gpu duration-500 hover:-translate-y-1">
        {isBanned ? (
          <IconNumber
            icon={<DislikeIcon isTrue={true} />}
            number={banCnt}
            isTrue={true}
          />
        ) : (
          <div onClick={() => onReport()}>
            <IconNumber icon={<DislikeIcon />} number={banCnt} />
          </div>
        )}
      </div>
    </>
  );
}
