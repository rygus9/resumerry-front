import Category from "components/molcular/category/SearchCategory";
import FloatingButton from "components/molcular/common/FloatingButton";
import ResumeListItem from "components/molcular/resume/ResumeListItem";
import ResumeModal from "components/molcular/resume/ResumeModal";
import ResumeSearch from "components/molcular/resume/ResumeSearch";
import WrapContent from "pages/common/WrapContent";
import { useRecoilValue } from "recoil";
import { openState } from "recoil/openState";
import { ResumeListSearchResult } from "util/api/resume";
import { cls } from "util/utils";

const data: ResumeListSearchResult[] = [
  {
    resumeId: "리쥬메ID1",
    title: "이력서 제목",
    contents: "이력서 내용",
    recommendCnt: 10,
    commentCnt: 10,
    viewCnt: 20,
    modifiedDate: "2022-01-18",
    hashtag: ["front", "css", "javascript"],
    memberId: "jungpil",
    imageSrc: "",
    nickname: "Cuzz",
    isScrap: true,
    years: 1,
  },
  {
    resumeId: "리쥬메ID2",
    title: "이력서 제목",
    contents: "이력서 내용",
    recommendCnt: 10,
    commentCnt: 10,
    viewCnt: 20,
    modifiedDate: "2022-01-18",
    hashtag: ["front", "css", "javascript"],
    memberId: "jungpil",
    imageSrc: "",
    nickname: "Cuzz",
    isScrap: true,
    years: 1,
  },
  {
    resumeId: "리쥬메ID3",
    title: "이력서 제목",
    contents: "이력서 내용",
    recommendCnt: 10,
    commentCnt: 10,
    viewCnt: 20,
    modifiedDate: "2022-01-18",
    hashtag: ["front", "css", "javascript"],
    memberId: "jungpil",
    imageSrc: "",
    nickname: "Cuzz",
    isScrap: true,
    years: 1,
  },
];

export default function Resume() {
  const open = useRecoilValue(openState);

  return (
    <>
      <div
        className={cls(
          "bg-resume-image h-56 bg-cover bg-right-top",
          "sm:h-64",
          "lg:h-72"
        )}
      >
        <div
          className={cls(
            "relative px-5 m-auto w-full max-w-[900px] pb-5 h-full",
            "sm:w-4/5 sm:px-0"
          )}
        >
          <h1 className="absolute bottom-0 mb-8 text-title">이력서 보기</h1>
        </div>
      </div>
      <WrapContent>
        <>
          <div className={cls("mt-5", "sm:mt-10")}>
            <Category />
          </div>
          <ResumeSearch />
          <section
            className={cls(
              "grid mt-5 bg-stone-50 py-5 px-5 grid-cols-1 gap-8",
              "sm:grid-cols-2 sm:gap-2",
              "md:gap-8",
              "lg:grid-cols-3 lg:gap-3"
            )}
          >
            {data.map((elem) => (
              <div key={elem.resumeId}>
                <ResumeListItem {...elem} />
              </div>
            ))}
          </section>
          <FloatingButton to="./create" />
        </>
      </WrapContent>
      {open.resumeFilterOpen && <ResumeModal />}
    </>
  );
}
