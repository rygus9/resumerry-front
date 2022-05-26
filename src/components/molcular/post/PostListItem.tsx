import { Link } from "react-router-dom";
import { cls } from "util/utils";
import UserInfo from "../common/UserInfo";
import PostInfo from "./PostInfo";

export interface PostItemProps {
  postId: string;
  memberId: string;
  title: string;
  contents: string;
  commentCnt: number;
  viewCnt: number;
  isAnonymous: boolean;
  imageSrc: string | null;
  nickname: string;
  modifiedDate: string;
}

export default function PostListItem({
  postId,
  memberId,
  title,
  contents,
  commentCnt,
  viewCnt,
  isAnonymous,
  imageSrc,
  nickname,
  modifiedDate,
}: PostItemProps): JSX.Element {
  return (
    <Link to={`./${memberId}/${postId}`}>
      <div className="px-3 py-5 cursor-pointer">
        {/* profile */}
        <UserInfo
          imageSrc={imageSrc}
          nickname={nickname}
          isAnonymous={isAnonymous}
        />
        {/* body */}
        <div className="pt-2 pb-2">
          <h3 className={cls("py-2 text-xl text-deepBlack", "sm:py-3")}>
            {title}
          </h3>
          <p className="min-h-[2.5rem] text-black sm:min-h-[3.5rem]">
            {contents}
          </p>
        </div>
        {/* icons */}
        <div
          className={cls("flex justify-between mr-3 mt-1", "sm:mr-10 sm:mt-0")}
        >
          <span className="text-deepGray">{modifiedDate.split("T")[0]}</span>
          <div className={cls("flex space-x-3", "sm:space-x-5")}>
            <PostInfo commentCnt={commentCnt} viewCnt={viewCnt} />
          </div>
        </div>
      </div>
    </Link>
  );
}
