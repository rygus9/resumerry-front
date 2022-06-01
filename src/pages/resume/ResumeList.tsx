import Category from "components/molcular/category/SearchCategory";
import FloatingButton from "components/molcular/common/FloatingButton";
import LoadingUI from "components/molcular/common/LoadingUI";
import ResumeListItem from "components/molcular/resume/ResumeListItem";
import ResumeModal from "components/molcular/resume/ResumeModal";
import ResumeSearch from "components/molcular/resume/ResumeSearch";
import WrapContent from "pages/common/WrapContent";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { openState } from "recoil/openState";
import { cls } from "util/utils";
import { useResumeList } from "./hooks/useResumeList";

export default function Resume() {
  const open = useRecoilValue(openState);
  const location = useLocation();
  const queryPath = location.search;
  const { data, fetchNextPage, isLoading, isFetching } =
    useResumeList(queryPath);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (!data) return;

    const pageLastIdx = data.pages.length - 1;
    const isLast = data?.pages[pageLastIdx].isLast;

    if (!isLast && inView) fetchNextPage();
  }, [inView]);

  return (
    <>
      <div
        className={cls(
          "bg-resume-image h-56 bg-cover bg-center",
          "sm:h-64",
          "lg:h-80"
        )}
      >
        <div
          className={cls(
            "relative px-5 m-auto w-full max-w-[900px] pb-5 h-full",
            "sm:w-4/5 sm:px-0"
          )}
        >
          <h3 className="absolute bottom-12 mb-8 text-2xl text-deepGray font-DoHyean">
            이력서 모아보기
          </h3>
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
              "relative shadow-inner",
              "grid mt-5 bg-stone-50 py-5 px-5 grid-cols-1 gap-8",
              "sm:grid-cols-2 sm:gap-2",
              "md:gap-8",
              "lg:grid-cols-3 lg:gap-3"
            )}
          >
            {isLoading ? (
              <>
                <div className="min-h-[10rem]"></div>
                <div className="absolute w-full top-10">
                  <LoadingUI />
                </div>
              </>
            ) : (
              !isLoading &&
              data &&
              data.pages &&
              data.pages.map((elem, index1) => (
                <>
                  {elem.return.contents.map((elem, index) =>
                    index % 20 === 11 ? (
                      <div key={`${index1}, ${index}`}>
                        <ResumeListItem {...elem} />
                      </div>
                    ) : (
                      <div key={`${index1}, ${index}`} ref={ref}>
                        <ResumeListItem {...elem} />
                      </div>
                    )
                  )}
                </>
              ))
            )}
          </section>
          {!isLoading && isFetching && (
            <div className="bg-stone-50 pb-8">
              <LoadingUI />
            </div>
          )}
          <FloatingButton to="./create" />
        </>
      </WrapContent>
      {open.resumeFilterOpen && <ResumeModal />}
    </>
  );
}
