import NormalButton from "components/atom/button/NormalButton";
import IconNumber from "components/atom/common/IconNumber";
import Chat from "components/molcular/chat/Chat";
import LoadingUI from "components/molcular/common/LoadingUI";
import SideInfo from "components/molcular/common/SideInfo";
import UserInfo from "components/molcular/common/UserInfo";
import WrapContent from "pages/common/WrapContent";
import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { openState } from "recoil/openState";
import { cls } from "util/utils";
import { usePost } from "./hooks/usePost";
import { useComment } from "./hooks/usePostComment";
import PostDeleteModal from "./PostDeleteModal";

export default function Post() {
  const [open, setOpen] = useRecoilState(openState);

  const params = useParams();
  const navigate = useNavigate();

  const { isLoading, data: postData } = usePost(params.userId!, params.postId!);

  const onUpdate = useCallback(() => {
    navigate("./update");
  }, []);

  const onDelete = useCallback(() => {
    setOpen({ ...open, postDeleteOpen: true });
  }, []);

  const { isLoading: CommentLoading, data: commentData } = useComment(
    params.userId!,
    params.postId!
  );

  return (
    <WrapContent>
      <>
        {isLoading && !postData ? (
          <LoadingUI />
        ) : (
          <>
            {postData && (
              <div className="flex">
                <article className={cls("flex-auto w-full", "sm:px-4")}>
                  <h1
                    className={cls(
                      "mt-2 text-3xl text-deepBlack",
                      "sm:text-4xl sm:mt-4"
                    )}
                  >
                    {postData.title}
                  </h1>
                  <div
                    className={cls("py-5 w-36 min-w-fit", "sm:py-8 sm:w-40")}
                  >
                    <UserInfo
                      isAnonymous={postData.isAnonymous}
                      modifiedDate={postData.modifiedDate.split("T")[0]}
                      nickname={postData.nickname}
                      imageSrc={postData.imageSrc}
                    />
                  </div>
                  {postData.isOwner && (
                    <div className="flex items-center space-x-2">
                      <NormalButton type="button" onClick={onUpdate}>
                        수정
                      </NormalButton>
                      <NormalButton type="button" onClick={onDelete}>
                        삭제
                      </NormalButton>
                    </div>
                  )}
                  <p
                    className={cls(
                      "pt-3 text-md text-black w-full",
                      "sm:pt-10 sm:text-lg"
                    )}
                  >
                    {postData.contents.split("\n").map((elem, index) => (
                      <span key={index}>
                        {elem} <br />
                      </span>
                    ))}
                  </p>
                  <div
                    className={cls(
                      "flex py-2 space-x-4 justify-end mt-8",
                      "md:hidden"
                    )}
                  >
                    <IconNumber
                      src="/img/icons/chat.svg"
                      number={postData.commentCnt}
                    />
                    <IconNumber
                      src="/img/icons/view.svg"
                      number={postData.viewCnt}
                    />
                  </div>

                  <div className={cls("mt-2", "md:mt-12")}>
                    <Chat
                      commentCnt={postData.commentCnt}
                      isLoading={CommentLoading}
                      commentData={commentData}
                    />
                  </div>
                </article>
                <SideInfo
                  category={postData.category}
                  commentCnt={postData.commentCnt}
                  viewCnt={postData.viewCnt}
                />
              </div>
            )}
          </>
        )}
        {open.postDeleteOpen && <PostDeleteModal />}
      </>
    </WrapContent>
  );
}
