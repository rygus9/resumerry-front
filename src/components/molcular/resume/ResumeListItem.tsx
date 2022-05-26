import { Link } from "react-router-dom";
import { ResumeListType } from "util/api/resume";
import { cls } from "util/utils";
import UserInfo from "../common/UserInfo";
import ResumeInfo from "./ResumeInfo";

type Props = ResumeListType;

export default function ResumeListItem({ ...elem }: Props) {
  return (
    <div className="bg-white shadow-lg w-full px-5 py-3 rounded-lg border border-lightGray">
      <Link to={`./${elem.memberId}/${elem.resumeId}`}>
        <h3 className="text-xl text-black">{elem.title}</h3>
      </Link>
      <div className="pt-3 pb-1">
        <UserInfo
          imageSrc={elem.imageSrc}
          nickname={elem.nickname}
          size="sm"
          modifiedDate={
            elem.modifiedDate ? elem.modifiedDate.split("T")[0] : ""
          }
        />
      </div>
      <Link to={`./${elem.memberId}/${elem.resumeId}`}>
        <p className="text-base mt-2 min-h-[4rem] py-2 text-lightBlack">
          {elem.contents}
        </p>
      </Link>

      <ul className="flex list-none pb-2">
        {elem.hashtag &&
          elem.hashtag.map((elem) => (
            <li
              key={elem}
              className={cls(
                "mr-2 cursor-pointer text-lightBlack",
                "hover:text-deepBlack"
              )}
            >
              #{elem}
            </li>
          ))}
      </ul>
      <div className="flex justify-start items-center space-x-3">
        <ResumeInfo
          recommendCnt={elem.recommendCnt}
          viewCnt={elem.viewCnt}
          commentCnt={elem.commentCnt}
        />
      </div>
    </div>
  );
}
