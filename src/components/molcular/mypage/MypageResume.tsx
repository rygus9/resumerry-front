import IconNumber from "components/atom/common/IconNumber";
import ChatIcon from "components/atom/icons/chatIcon/ChatIcon";
import GoodIcon from "components/atom/icons/chatIcon/GoodIcon";
import ViewIcon from "components/atom/icons/chatIcon/ViewIcon";
import { Link } from "react-router-dom";
import { ResumeMypageSearchResult } from "util/api/resume";
import { cls } from "util/utils";
import UserInfo from "../common/UserInfo";

type Props = ResumeMypageSearchResult;

export default function ResumeMypageListItem({ ...elem }: Props) {
  return (
    <div className="bg-white border-b-[1px] border-x-lightBlack w-full px-5 py-3 mt-8">
      <Link to={`/resume/${elem.memberId}/${elem.resumeId}`}>
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
      <Link to={`/resume/${elem.memberId}/${elem.resumeId}`}>
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
      <div className="flex justify-end items-center space-x-3">
        <IconNumber
          number={elem.recommendCnt}
          icon={<GoodIcon />}
          iconSize="sm"
        />
        <IconNumber number={elem.viewCnt} icon={<ViewIcon />} iconSize="sm" />
        <IconNumber
          number={elem.commentCnt}
          icon={<ChatIcon />}
          iconSize="sm"
        />
      </div>
    </div>
  );
}
