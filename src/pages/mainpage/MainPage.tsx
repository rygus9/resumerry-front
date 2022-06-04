import PostListItem from "components/molcular/post/PostListItem";
import { cls } from "util/utils";
import WrapContent from "pages/common/WrapContent";
import ResumeListItem from "components/molcular/resume/ResumeListItem";
import { useMainPost } from "./hook/ussMainPost";
import { useMainResume } from "./hook/useMainResume";
import { Link } from "react-router-dom";
import LoadingUI from "components/molcular/common/LoadingUI";

export default function Mainpage(): JSX.Element {
  const { data: postData } = useMainPost();
  const { data: ResumeData } = useMainResume();

  return (
    <WrapContent>
      <>
        <div className="pt-16 pb-8">
          <h3 className="text-2xl text-deepGray font-DoHyean">
            이력서 첨삭 커뮤니티
          </h3>
          <h1 className="text-title">Resumerry</h1>
        </div>
        <>
          <div className="bg-stone-50 ">
            <div
              className={cls(
                "flex items-center bg-purple-300 text-white font-bold text-[0.95rem]"
              )}
            >
              <div className="flex-1 text-center select-none py-1">
                Resumerry Pick's
              </div>
              <Link to="/resume">
                <div className="text-right mr-4">
                  more <span> {">"} </span>
                </div>
              </Link>
            </div>
            {ResumeData && (
              <section
                className={cls(
                  "grid py-5 px-5 grid-cols-1 gap-8 shadow-inner max-h-[280px] h-[280px]",
                  "sm:grid-cols-2 sm:gap-x-2 overflow-hidden",
                  "md:gap-8",
                  "lg:grid-cols-3 lg:gap-3"
                )}
              >
                {ResumeData.map((elem: any) => (
                  <div key={elem.resumeId}>
                    <ResumeListItem {...elem} />
                  </div>
                ))}
              </section>
            )}
            {!ResumeData && (
              <div className="w-full">
                <LoadingUI />
              </div>
            )}
          </div>
        </>
        <div className="bg-white">
          <div className={cls("mt-5", "sm:mt-10")}></div>
          <div className="flex items-center bg-purple-300 text-white font-bold text-base py-1">
            <div className="flex-1 text-center select-none">
              Resumerry Question
            </div>
            <Link to="/resume">
              <div className="text-right mr-8">
                more <span> {">"} </span>
              </div>
            </Link>
          </div>
          {/* board list */}
          <section className="divide-y divide-lightGray border-y border-lightGray">
            {postData &&
              postData.map((elem: any) => (
                <div key={elem.postId}>
                  <PostListItem isAnonymous={false} {...elem} />
                </div>
              ))}
          </section>
        </div>
      </>
    </WrapContent>
  );
}
