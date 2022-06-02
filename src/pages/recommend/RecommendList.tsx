import { Link } from "react-router-dom";
import { RecommendSearchApiResult } from "util/api/recommend";
import { cls } from "util/utils";
import ViewIcon from "components/atom/icons/chatIcon/ViewIcon";
import IconNumber from "components/atom/common/IconNumber";

type Props = RecommendSearchApiResult;

export default function RecommendListItem({ ...elem }: Props) {
  return (
    <Link to={`/resume/${localStorage.getItem("myMemberId")}/${elem.id}`}>
      <div className="bg-white shadow-lg w-full px-5 py-3 rounded-lg border border-lightGray">
        <h3 className="text-xl text-black pt-4">{elem.title}</h3>

        <h3 className="text-sm text-black  pb-1">
          조회수: {elem.viewCnt as number}
        </h3>
        <p className="text-base mt-2 min-h-[4rem] py-2 text-lightBlack">
          {elem.contents}
        </p>
        <div className="pb-2 text-sm">
          수정된 날짜: {elem.createdDate ? elem.createdDate.split("T")[0] : ""}
        </div>
        <div
          className={cls("flex justify-center items-center space-x-3")}
        ></div>
      </div>
    </Link>
  );
}
