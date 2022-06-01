import { cls } from "util/utils";
import PostInfo from "components/molcular/post/PostInfo";

export interface TokenItemProps {
  id: number;
  tokenCnt: number;
  reason: string;
  createdDate: string;
}

export default function TokenListItem({
  id,
  tokenCnt,
  reason,
  createdDate,
}: TokenItemProps): JSX.Element {
  return (
    <div className="px-3 py-5 cursor-pointer border-b-[1px] border-[gray] mt-8">
      {/* profile */}
      {/* body */}
      <div className="pt-2 pb-2">
        <h3 className={cls("py-2 text-xl text-deepBlack", "sm:py-3")}>
          {id} 번 사용내역
        </h3>
        <p className="min-h-[2.5rem] text-black sm:min-h-[3.5rem]">{reason}</p>
      </div>
      {/* icons */}
      <div
        className={cls("flex justify-between mr-3 mt-1", "sm:mr-10 sm:mt-0")}
      >
        <span className="text-deepGray">{createdDate.split("T")[0]}</span>
        <div className={cls("flex space-x-3", "sm:space-x-5")}>
          토큰 이력: {tokenCnt}
        </div>
      </div>
    </div>
  );
}
