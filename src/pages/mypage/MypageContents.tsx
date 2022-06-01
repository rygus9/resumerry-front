import { cls } from "util/utils";
import { useParams } from "react-router-dom";
import { useState } from "react";
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

  switch (mode) {
    case "post":
      return (
        <>
          <section className="border-y border-lightGray pl-8 pr-8 h-fit bg-white rounded-b-3xl">
            {post_data.data &&
              post_data.data.map((elem) => (
                <div key={elem.postId} className="max-w-[40rem] w-full">
                  <PostListItem {...elem} />
                </div>
              ))}
          </section>
        </>
      );
    case "resume":
      return (
        <>
          <section className="border-y border-lightGray pl-8 pr-8 h-fit bg-white rounded-b-3xl">
            {resume_data.data &&
              resume_data.data.map((elem) => (
                <div key={elem.resumeId} className="max-w-[40rem] w-full">
                  <ResumeMypageListItem {...elem} />
                </div>
              ))}
          </section>
        </>
      );
    case "scrap":
      return (
        <>
          <section className="border-y border-lightGray pl-8 pr-8 h-fit bg-white rounded-b-3xl">
            {scrap_data.data &&
              scrap_data.data.map((elem, index) => (
                <div
                  key={`${elem.resumeId} ${index}`}
                  className="max-w-[40rem] w-full"
                >
                  <ScrapMypageListItem {...elem} />
                </div>
              ))}
          </section>
        </>
      );
    case "token":
      return (
        <>
          <section className="border-y border-lightGray pl-8 pr-8 h-fit bg-white rounded-b-3xl">
            {token_data.data &&
              token_data.data.map((elem) => (
                <div key={elem.id} className="max-w-[40rem] w-full">
                  <TokenListItem {...elem} />
                </div>
              ))}
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
