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

export default function PostList(): JSX.Element {
  const open = useRecoilValue(openState);
  const location = useLocation();
  const queryPath = location.search;

  const { data, isLoading } = usePostList(queryPath);

  console.log(data);

  return (
    <>
      {/* title */}
      <div
        className={cls(
          "bg-question-image h-56 bg-cover bg-center",
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
          <section className="divide-y divide-lightGray border-y border-lightGray">
            {isLoading ? (
              <div>
                <SkeletonPostListItem />
                <SkeletonPostListItem />
                <SkeletonPostListItem />
              </div>
            ) : (
              data &&
              data.map((elem) => (
                <div key={elem.postId}>
                  <PostListItem {...elem} />
                </div>
              ))
            )}
          </section>
          <FloatingButton to="./create" />
        </div>
      </WrapContent>
      {open.postFilterOpen && <PostModal />}
    </>
  );
}
