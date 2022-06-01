import ResumeListItem from "components/molcular/resume/ResumeListItem";
import WrapContent from "pages/common/WrapContent";
import { ResumeListType } from "util/api/resume";

export default function Recommend() {
  const data_ResumeSearch: ResumeListType[] = [
    {
      resumeId: "리쥬메ID1",
      title: "당근마켓 지원 이력서",
      contents: "당근마켓 처음 지원했을 때 쓴 이력서입니다. 피드백 부탁드려요.",
      recommendCnt: 15,
      commentCnt: 10,
      viewCnt: 70,
      modifiedDate: "2022-01-18",
      hashtag: ["front", "css", "javascript"],
      memberId: "jungpil",
      imageSrc: "",
      nickname: "Cuzz",
      years: 1,
    },
    {
      resumeId: "리쥬메ID2",
      title: "아주대 링크인턴",
      contents: "아주대 링크인턴 용 자소서입니다. 참고하세요~",
      recommendCnt: 3,
      commentCnt: 5,
      viewCnt: 20,
      modifiedDate: "2022-01-18",
      hashtag: ["front", "css", "javascript"],
      memberId: "jungpil",
      imageSrc: "",
      nickname: "Cuzz",
      years: 1,
    },
  ];

  const result_ResumeSearch: ResumeListType[] = [
    {
      resumeId: "리쥬메ID1",
      title: "당근마켓 이력서",
      contents: "당근마켓을 지망하고 쓴 이력서입니다.",
      recommendCnt: 5,
      commentCnt: 3,
      viewCnt: 20,
      modifiedDate: "2022-01-18",
      hashtag: ["front", "css", "javascript"],
      memberId: "jungpil",
      imageSrc: "",
      nickname: "Cuzz",
      years: 1,
    },
    {
      resumeId: "리쥬메ID2",
      title: "배민 프론트",
      contents: "배민 프론트 합격 이력서 공유합니다.",
      recommendCnt: 35,
      commentCnt: 20,
      viewCnt: 70,
      modifiedDate: "2022-01-18",
      hashtag: ["front", "css", "javascript"],
      memberId: "jungpil",
      imageSrc: "",
      nickname: "Cuzz",
      years: 1,
    },
  ];

  return (
    <WrapContent>
      <>
        <section className="text-center">
          <h1 className="text-3xl pt-5 pb-7 font-medium text-deepBlack">
            이력서 추천 서비스
          </h1>
          <p>
            <h3 className="text-base text-deepGray">
              내 이력서를 분석하여 나와 비슷한 성향의 이력서 중 추천 수가 높은
              이력서를 보여드려요.
            </h3>
            <h3 className="text-sm text-deepGray">
              이력서 추천은 이력서의 유사도를 분석하여 제시됩니다.
            </h3>
          </p>
        </section>
        <section className="mt-16">
          <h2 className="text-xl mb-5 text-deepBlack">내 이력서 선택</h2>
          <div className="border border-gray rounded-xl min-h-[5rem] py-5 px-5 grid grid-cols-3 grid-flow-row gap-4 shadow-inner">
            {data_ResumeSearch.map((elem) => (
              <div
                key={elem.resumeId}
                className="first:p-1 first:ring-2 first:ring-offset-2 first:ring-gray first:rounded-lg"
              >
                <ResumeListItem {...elem} />
              </div>
            ))}
          </div>
        </section>
        <section className="mt-10 bg-deepGray rounded-xl">
          <h2 className="text-xl pl-6 pt-5 text-white">
            비슷한 이력서 추천 결과
          </h2>
          <div className="rounded-xl min-h-[5rem] py-5 px-5 grid grid-cols-3 grid-flow-row gap-4">
            {result_ResumeSearch.map((elem) => (
              <div key={elem.resumeId}>
                <ResumeListItem {...elem} />
              </div>
            ))}
          </div>
        </section>
      </>
    </WrapContent>
  );
}
