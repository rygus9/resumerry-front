import { useParams } from "react-router-dom";
import { useMypageResumeQuery } from "./hooks/useMypageResume";
import { useMypagePostQuery } from "./hooks/useMypagePost";
import ResumeMypageListItem from "components/molcular/mypage/MypageResume";
import { useMypageScrapQuery } from "./hooks/useMypageScrap";
import { useMypageTokenQuery } from "./hooks/useMypageToken";
import SkeletonPostListItem from "components/molcular/post/SkeletonPostListItem";
import PostListItem from "components/molcular/post/PostListItem";
import TokenListItem from "./MypageToken";
import ScrapMypageListItem from "components/molcular/mypage/MypageScrap";

export interface MypageProps {
  mode: string;
}

export default function MypageContents({ mode }: MypageProps): JSX.Element {
  const params = useParams();
  const post_data = useMypagePostQuery(params.userId!);
  const resume_data = useMypageResumeQuery(params.userId!);
  const scrap_data = useMypageScrapQuery(params.userId!);
  const token_data = useMypageTokenQuery(params.userId!);

  console.log(scrap_data);

  switch (mode) {
    case "post":
      return (
        <>
          <section className="border-y border-lightGray pl-8 pr-8 h-fit bg-white rounded-b-3xl min-h-[25rem] divide-y divide-gray py-4">
            {post_data.data &&
              post_data.data.map((elem) => (
                <div key={elem.postId} className="max-w-[40rem] w-full">
                  <PostListItem {...elem} />
                </div>
              ))}
            {post_data.data && post_data.data.length === 0 && (
              <div className="text-xl text-center mt-20 text-deepGray">
                작성한 포스트가 없습니다.
              </div>
            )}
          </section>
        </>
      );
    case "resume":
      return (
        <>
          <section className="border-y border-lightGray pl-8 pr-8 h-fit bg-white rounded-b-3xl min-h-[25rem] divide-y divide-gray py-4">
            {resume_data.data &&
              resume_data.data.map((elem) => (
                <div key={elem.resumeId} className="max-w-[40rem] w-full">
                  <ResumeMypageListItem {...elem} />
                </div>
              ))}
            {resume_data.data && resume_data.data.length === 0 && (
              <div className="text-xl text-center mt-20 text-deepGray">
                작성한 이력서가 없습니다.
              </div>
            )}
          </section>
        </>
      );
    case "scrap":
      return (
        <>
          <section className="border-y border-lightGray pl-8 pr-8 h-fit bg-white rounded-b-3xl min-h-[25rem] divide-y divide-gray py-4">
            {scrap_data.data &&
              scrap_data.data.map((elem, index) => (
                <div
                  key={`${elem.resumeId} ${index}`}
                  className="max-w-[40rem] w-full"
                >
                  <ScrapMypageListItem {...elem} />
                </div>
              ))}
            {scrap_data.data && scrap_data.data.length === 0 && (
              <div className="text-xl text-center mt-20 text-deepGray">
                스크랩한 이력서가 없습니다.
              </div>
            )}
          </section>
        </>
      );
    case "token":
      return (
        <>
          <section className="border-y border-lightGray pl-8 pr-8 h-fit bg-white rounded-b-3xl min-h-[25rem] divide-y divide-gray py-4">
            {token_data.data &&
              token_data.data.map((elem) => (
                <div key={elem.id} className="max-w-[40rem] w-full">
                  <TokenListItem {...elem} />
                </div>
              ))}
            {token_data.data && token_data.data.length === 0 && (
              <div className="text-xl text-center mt-20 text-deepGray">
                토큰 이력이 없습니다.
              </div>
            )}
          </section>
        </>
      );

    default:
      return (
        <div>
          <SkeletonPostListItem />
          <SkeletonPostListItem />
          <SkeletonPostListItem />
        </div>
      );
  }
}
