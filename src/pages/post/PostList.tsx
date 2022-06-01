import PostListItem from "components/molcular/post/PostListItem";
import PostModal from "components/molcular/post/PostModal";
import PostSearch from "components/molcular/post/PostSearch";
import SearchCategory from "components/molcular/category/SearchCategory";
import FloatingButton from "components/molcular/common/FloatingButton";
import { useRecoilValue } from "recoil";
import { openState } from "recoil/openState";
import { cls } from "util/utils";
import { useLocation } from "react-router-dom";
import WrapContent from "pages/common/WrapContent";
import { usePostList } from "./hooks/usePostList";
import SkeletonPostListItem from "components/molcular/post/SkeletonPostListItem";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function PostList(): JSX.Element {
  const open = useRecoilValue(openState);
  const location = useLocation();
  const queryPath = location.search;
  const { data, fetchNextPage, isLoading, isFetching } = usePostList(queryPath);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (!data) return;

    const pageLastIdx = data.pages.length - 1;
    const isLast = data?.pages[pageLastIdx].isLast;

    if (!isLast && inView) fetchNextPage();
  }, [inView]);

  return (
    <>
      {/* title */}
      <div
        className={cls(
          "bg-question-image h-56 bg-cover bg-center",
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
            취업 관련 질문하기
          </h3>
          <h1 className="absolute bottom-0 mb-8 text-title">질문 게시판</h1>
        </div>
      </div>

      <WrapContent>
        <div className="bg-white">
          <div className={cls("mt-5", "sm:mt-10")}>
            <SearchCategory />
          </div>
          {/* filter */}
          <PostSearch />
          {/* board list */}
          <section className="border-y border-lightGray">
            {isLoading ? (
              <div className="divide-y divide-lightGray">
                <SkeletonPostListItem />
                <SkeletonPostListItem />
                <SkeletonPostListItem />
              </div>
            ) : (
              data &&
              data.pages &&
              data.pages.map((elem, index) => (
                <div key={index} className="divide-y divide-lightGray">
                  {elem.return.contents.map((elem, index) =>
                    index % 20 === 9 ? (
                      <div key={index}>
                        <PostListItem {...elem} />
                      </div>
                    ) : (
                      <div key={index} ref={ref}>
                        <PostListItem {...elem} />
                      </div>
                    )
                  )}
                </div>
              ))
            )}
            {!isLoading && isFetching && <SkeletonPostListItem />}
          </section>
          <FloatingButton to="./create" />
        </div>
      </WrapContent>
      {open.postFilterOpen && <PostModal />}
    </>
  );
}
