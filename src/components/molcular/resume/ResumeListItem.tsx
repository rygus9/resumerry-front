import IconNumber from "components/atom/common/IconNumber";
import { Link } from "react-router-dom";
import { ResumeListSearchResult } from "util/api/resume";
import { cls } from "util/utils";
import UserInfo from "../common/UserInfo";

type Props = ResumeListSearchResult;

export default function ResumeListItem({ ...elem }: Props) {
  return (
    <div className="bg-white border-2 border-gray w-full px-5 py-3 rounded-lg">
      <Link to={`./${elem.memberId}/${elem.resumeId}`}>
        <h3 className="text-xl text-deepBlack">{elem.title}</h3>
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
        <p className="text-lg mt-2 min-h-[4rem] py-2 text-black">
          {elem.contents}
        </p>
      </Link>

      <ul className="flex list-none pb-2">
        {/* {elem.hashtag.map((elem) => (
          <li
            key={elem}
            className={cls(
              "mr-2 cursor-pointer text-lightBlack",
              "hover:text-deepBlack"
            )}
          >
            #{elem}
          </li>
        ))} */}
      </ul>
      <div className="flex justify-start items-center space-x-3">
        <IconNumber
          number={elem.recommendCnt}
          src="/img/icons/good.svg"
          iconSize="sm"
        />
        <IconNumber
          number={elem.viewCnt}
          src="/img/icons/view.svg"
          iconSize="sm"
        />
        <IconNumber
          number={elem.commentCnt}
          src="/img/icons/chat.svg"
          iconSize="sm"
        />
      </div>
    </div>
  );
}
