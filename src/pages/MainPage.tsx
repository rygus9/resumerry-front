import PostListItem from "components/molcular/post/PostListItem";
import { cls } from "util/utils";
import WrapContent from "pages/common/WrapContent";
import ResumeListItem from "components/molcular/resume/ResumeListItem";
import { ResumeListSearchApiResult } from "util/api/resume";

const data_ResumeSearch: ResumeListSearchApiResult = [
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
    years: 1,
  },
];
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
export default function Mainpage(): JSX.Element {
  return (
    <>
      {/* title */}
      <WrapContent>
        <>
          <div className="grid bg-stone-50 grid-rows-[10%,90%]">
            <div
              className={cls(
                "grid grid-cols-3 bg-purple-300 text-white font-bold text-[0.95rem]"
              )}
            >
              <div></div>
              <div className="text-center text">Resumerry Pick's</div>
              <div className="text-right mr-4">
                more <span> {">"} </span>
              </div>
            </div>
            <section
              className={cls(
                "grid mt-10 py-5 px-5 grid-cols-1 gap-8",
                "sm:grid-cols-2 sm:gap-x-2 overflow-hidden max-h-[264px] gap-y-16",
                "md:gap-8",
                "lg:grid-cols-3 lg:gap-3"
              )}
            >
              {data_ResumeSearch.map((elem) => (
                <div key={elem.resumeId}>
                  <ResumeListItem {...elem} />
                </div>
              ))}
            </section>
          </div>
        </>
      </WrapContent>
      <WrapContent>
        <div className="bg-white">
          <div className={cls("mt-5", "sm:mt-10")}></div>
          <div className="grid grid-rows-[5%,90%]">
            <div className="grid grid-cols-3 bg-purple-300 text-white font-bold text-[0.95rem]">
              <div></div>
              <div className="text-center">Resumerry Question</div>
              <div className="text-right mr-8">
                more <span> {">"} </span>
              </div>
            </div>
            {/* board list */}
            <section className="divide-y divide-lightGray border-y border-lightGray">
              {data.map((elem) => (
                <div key={elem.postId}>
                  <PostListItem isAnonymous={false} {...elem} />
                </div>
              ))}
            </section>
          </div>
        </div>
      </WrapContent>
    </>
  );
}
