import PostListItem from "components/molcular/post/PostListItem";
import PostModal from "components/molcular/post/PostModal";
import PostSearch from "components/molcular/post/PostSearch";
import SearchCategory from "components/molcular/category/SearchCategory";
import FloatingButton from "components/molcular/common/FloatingButton";
import { useRecoilValue } from "recoil";
import { openState } from "recoil/openState";
import { cls } from "util/utils";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { PostListSearchApi } from "util/api/post";
import WrapContent from "pages/common/WrapContent";

const data = [
  {
    postId: "게시글ID1",
    memberId: "유저1",
    title: "경력 부분 작성 팁 부탁드립니다!",
    contents:
      " 제가 살면서 방황을 많이 해가지고 이런 저런 경험이 많습니다. 이런 부분은 어떻게 이력서에 반영하면 되는지 여쭤보고 싶습니다.",
    commentCnt: 10,
    viewCnt: 20,
    isAnnonymous: true,
    imageSrc: null,
    nickname: "Cuzz",
    modifiedDate: "2022-02-02",
  },
  {
    postId: "게시글ID2",
    memberId: "유저2",
    title: "경력 부분 작성 팁 부탁드립니다!",
    contents:
      " 제가 살면서 방황을 많이 해가지고 이런 저런 경험이 많습니다. 이런 부분은 어떻게 이력서에 반영하면 되는지 여쭤보고 싶습니다.",
    commentCnt: 10,
    viewCnt: 20,
    isAnnonymous: true,
    imageSrc: null,
    nickname: "Cuzz",
    modifiedDate: "2022-02-02",
  },
  {
    postId: "게시글ID3",
    memberId: "유저3",
    title: "경력 부분 작성 팁 부탁드립니다!",
    contents:
      " 제가 살면서 방황을 많이 해가지고 이런 저런 경험이 많습니다. 이런 부분은 어떻게 이력서에 반영하면 되는지 여쭤보고 싶습니다.",
    commentCnt: 10,
    viewCnt: 20,
    isAnnonymous: true,
    imageSrc: null,
    nickname: "Cuzz",
    modifiedDate: "2022-02-02",
  },
];

export default function PostList(): JSX.Element {
  const open = useRecoilValue(openState);

  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const title = searchParams.get("title");
  const sort = searchParams.get("sort");

  const {
    data: postData,
    isLoading,
    error,
  } = useQuery(["posts", category, title, sort], PostListSearchApi);

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
            {data.map((elem) => (
              <div key={elem.postId}>
                <PostListItem {...elem} />
              </div>
            ))}
          </section>
          <FloatingButton to="./create" />
        </div>
      </WrapContent>
      {open.postFilterOpen && <PostModal />}
    </>
  );
}
