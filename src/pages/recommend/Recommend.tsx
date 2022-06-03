import ResumeMypageListItem from "components/molcular/mypage/MypageToken";
import WrapContent from "pages/common/WrapContent";
import { ResumeMypageSearchResult } from "util/api/resume";
import RecommendListItem from "./RecommendList";
import { useRecommendQuery } from "pages/recommend/hooks/useRecommend";
import { useMypageResumeQuery } from "pages/mypage/hooks/useMypageResume";
import { useState } from "react";
import LoadingUI from "components/molcular/common/LoadingUI";

export default function Recommend() {
  const userId = localStorage.getItem("myMemberId");
  //const recommend_data:Promise<RecommendListSearchApiResult>=;
  const resume_data = useMypageResumeQuery(userId!);
  const [resumeid, setResumeid] = useState(
    resume_data.data &&
      resume_data.data.length !== 0 &&
      resume_data.data[0].resumeId
  );
  const { isLoading, data: recommend_data } = useRecommendQuery(
    userId!,
    resumeid! as string
  );
  const handleClick = (e: any, data: ResumeMypageSearchResult) => {
    setResumeid(data.resumeId);
  };
  return (
    <WrapContent>
      <>
        <section className="text-center">
          <p className="text-3xl pt-5 pb-7 font-medium text-deepBlack">
            이력서 추천 서비스
          </p>
          <h3 className="text-base text-deepGray">
            내 이력서를 분석하여 나와 비슷한 성향의 이력서 중 추천 수가 높은
            이력서를 보여드려요.
          </h3>
          <h3 className="text-sm text-deepGray">
            이력서 추천은 이력서의 유사도를 분석하여 제시됩니다.
          </h3>
        </section>
        <section className="mt-16">
          <h2 className="text-xl mb-5 text-deepBlack">내 이력서 선택</h2>
          <div className="border border-gray rounded-xl min-h-[5rem] py-5 px-5 grid grid-flow-col gap-4 shadow-inner overflow-auto">
            {resume_data.data &&
              resume_data.data.map((elem) => (
                <div
                  key={elem.resumeId}
                  className="hover:p-1 hover:ring-2 hover:ring-offset-2 hover:ring-gray hover:rounded-lg focus:p-1 focus:ring-2 focus:ring-offset-2 focus:ring-gray focus:rounded-lg"
                  onClick={(e) => handleClick(e, elem)}
                >
                  <ResumeMypageListItem {...elem} />
                </div>
              ))}
          </div>
        </section>
        <section className="mt-10 bg-deepGray rounded-xl">
          <h2 className="text-xl pl-6 pt-5 text-white">
            비슷한 이력서 추천 결과
          </h2>
          <div className="rounded-xl min-h-[5rem] py-5 px-5 grid grid-cols-3 grid-flow-row gap-4">
            {isLoading && !recommend_data ? (
              <LoadingUI />
            ) : (
              recommend_data &&
              recommend_data.map((elem) => (
                <div key={elem.id}>
                  <RecommendListItem {...elem} />
                </div>
              ))
            )}
          </div>
        </section>
      </>
    </WrapContent>
  );
}
