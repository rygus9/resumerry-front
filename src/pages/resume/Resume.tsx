import UserInfo from "components/molcular/common/UserInfo";
import { cls } from "util/utils";
import { useRecoilState } from "recoil";
import { openState } from "recoil/openState";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useResume } from "./hooks/useResume";
import LoadingUI from "components/molcular/common/LoadingUI";
import NormalButton from "components/atom/button/NormalButton";
import ResumeDeleteModal from "./ResumeDeleteModal";
import { useResumeRecommmend } from "./hooks/useResumeRecommend";
import { useResumeScrap } from "./hooks/useResumeScrap";
import { useComment } from "./hooks/useResumeComment";
import ResumeInfo from "components/molcular/resume/ResumeInfo";
import LoadingText from "components/molcular/common/LoadingText";
import ResumeChat from "components/molcular/chat/ResumeChat";
import { ResumeMainCommentElemResult } from "util/api/comment";
import WrapContent from "pages/common/WrapContent";

export default function Resume() {
  const inputChatData: ResumeMainCommentElemResult[] = [
    {
      yPath: 450,
      isRecommend: true,
      isDelete: "N",
      imageSrc: null,
      recommendCnt: 5,
      commentDepth: 0,
      isAnonymous: false,
      contents:
        "기술 스택 부분에서 자바만 적으셨는데 혹시 따로 사용하시는 프레임워크 있으신가요?",
      isOwner: false,
      nickname: "cuzz",
      memberId: 10,
      modifiedDate: "2022-05-19T06:04:33",
      commentId: 1,
      commentGroup: 1,
      isBanned: false,
      childComments: [
        {
          isRecommend: false,
          isDelete: "N",
          imageSrc: null,
          recommendCnt: 0,
          commentDepth: 0,
          isAnonymous: false,
          contents:
            "Spring을 써보긴 했는데 그럴 듯한 프로젝트가 없어서 적진 않았습니다.",
          isOwner: true,
          nickname: "Junpil",
          modifiedDate: "2022-05-19T06:12:51",
          commentId: 2,
          commentGroup: 1,
          isBanned: false,
          banCnt: 1,
          memberId: 3,
        },
        {
          isRecommend: true,
          isDelete: "N",
          imageSrc: null,
          recommendCnt: 1,
          commentDepth: 0,
          isAnonymous: false,
          contents: "그래도 면접 자신 있으면 적어보심이 좋지 않을까 싶습니다.",
          isOwner: false,
          nickname: "cuzz",
          modifiedDate: "2022-05-19T06:13:03",
          commentId: 3,
          commentGroup: 1,
          isBanned: true,
          banCnt: 1,
          memberId: 3,
        },
        {
          isRecommend: true,
          isDelete: "Y",
          imageSrc: null,
          recommendCnt: 1,
          commentDepth: 1,
          isAnonymous: true,
          contents: "그치",
          isOwner: true,
          nickname: "cuzz",
          modifiedDate: "2022-05-19T06:32:02",
          commentId: 6,
          commentGroup: 1,
          isBanned: true,
          banCnt: 1,
          memberId: 3,
        },
      ],
      banCnt: 1,
    },
    {
      yPath: 450,
      isRecommend: false,
      isDelete: "N",
      imageSrc: null,
      recommendCnt: 0,
      commentDepth: 0,
      isAnonymous: false,
      contents: "되려나\n",
      isOwner: true,
      nickname: "cuzz",
      modifiedDate: "2022-05-20T03:23:12",
      commentId: 16,
      commentGroup: 4,
      isBanned: false,
      childComments: [
        {
          isRecommend: false,
          isDelete: "N",
          imageSrc: null,
          recommendCnt: 0,
          commentDepth: 1,
          isAnonymous: false,
          contents: "정말 힘드네요.",
          isOwner: true,
          nickname: "cuzz",
          modifiedDate: "2022-05-25T07:28:26",
          commentId: 19,
          commentGroup: 4,
          isBanned: false,
          banCnt: 0,
          memberId: 3,
        },
      ],
      banCnt: 0,
      memberId: 3,
    },
    {
      yPath: 450,
      isRecommend: false,
      isDelete: "N",
      imageSrc: null,
      recommendCnt: 0,
      commentDepth: 0,
      isAnonymous: true,
      contents: "되려나\n",
      isOwner: true,
      nickname: "cuzz",
      modifiedDate: "2022-05-20T03:23:24",
      commentId: 17,
      commentGroup: 5,
      isBanned: false,
      childComments: [],
      banCnt: 0,
      memberId: 3,
    },
    {
      yPath: 800,
      isRecommend: true,
      isDelete: "Y",
      imageSrc: null,
      recommendCnt: 1,
      commentDepth: 0,
      isAnonymous: false,
      contents: "안녕하세요.",
      isOwner: true,
      nickname: "cuzz",
      modifiedDate: "2022-05-19T06:25:45",
      commentId: 4,
      commentGroup: 3,
      isBanned: true,
      childComments: [
        {
          isRecommend: true,
          isDelete: "Y",
          imageSrc: null,
          recommendCnt: 1,
          commentDepth: 1,
          isAnonymous: false,
          contents: "당연히 리애긑ㅈ뵤\n",
          isOwner: true,
          nickname: "cuzz",
          modifiedDate: "2022-05-19T06:31:41",
          commentId: 5,
          commentGroup: 3,
          isBanned: true,
          banCnt: 1,
          memberId: 3,
        },
        {
          isRecommend: true,
          isDelete: "Y",
          imageSrc: null,
          recommendCnt: 1,
          commentDepth: 1,
          isAnonymous: false,
          contents: "뭐죠?",
          isOwner: true,
          nickname: "cuzz",
          modifiedDate: "2022-05-20T02:11:05",
          commentId: 11,
          commentGroup: 3,
          isBanned: true,
          banCnt: 1,
          memberId: 3,
        },
        {
          isRecommend: true,
          isDelete: "N",
          imageSrc: null,
          recommendCnt: 1,
          commentDepth: 1,
          isAnonymous: false,
          contents: "최적화가 뭐예요..",
          isOwner: true,
          nickname: "cuzz",
          modifiedDate: "2022-05-20T02:27:15",
          commentId: 12,
          commentGroup: 3,
          isBanned: false,
          banCnt: 0,
          memberId: 3,
        },
      ],
      banCnt: 1,
      memberId: 3,
    },
    {
      yPath: 800,
      isRecommend: true,
      isDelete: "Y",
      imageSrc: null,
      recommendCnt: 1,
      commentDepth: 0,
      isAnonymous: false,
      contents: "안녕하세요",
      isOwner: true,
      nickname: "cuzz",
      modifiedDate: "2022-05-20T01:28:19",
      commentId: 8,
      commentGroup: 6,
      isBanned: true,
      childComments: [
        {
          isRecommend: false,
          isDelete: "Y",
          imageSrc: null,
          recommendCnt: 0,
          commentDepth: 1,
          isAnonymous: false,
          contents: "대댓글 테스트\n",
          isOwner: true,
          nickname: "cuzz",
          modifiedDate: "2022-05-20T01:43:13",
          commentId: 9,
          commentGroup: 6,
          isBanned: false,
          banCnt: 0,
          memberId: 3,
        },
      ],
      banCnt: 1,
      memberId: 3,
    },
    {
      yPath: 600,
      isRecommend: false,
      isDelete: "N",
      imageSrc: null,
      recommendCnt: 0,
      commentDepth: 0,
      isAnonymous: false,
      contents: "뭐지",
      isOwner: true,
      nickname: "cuzz",
      modifiedDate: "2022-05-20T03:12:32",
      commentId: 15,
      commentGroup: 10,
      isBanned: false,
      childComments: [],
      banCnt: 0,
      memberId: 3,
    },
  ];

  const [open, setOpen] = useRecoilState(openState);
  const [scrap, setScrap] = useState<boolean | null>(null);

  const params = useParams();
  const navigate = useNavigate();

  const { isLoading, data: resumeData } = useResume(
    params.userId!,
    params.resumeId!
  );

  useEffect(() => {
    if (resumeData) setScrap(resumeData?.isScrap);
  }, [resumeData]);

  const onUpdate = useCallback(() => {
    navigate("./update");
  }, []);

  const onDelete = useCallback(() => {
    setOpen({ ...open, resumeDeleteOpen: true });
  }, []);

  const { isLoading: isRecommendLoading, mutate: recommendMutate } =
    useResumeRecommmend();

  const { isLoading: isScrapLoading, mutate: scrapMutate } =
    useResumeScrap(setScrap);

  const { isLoading: CommentLoading, data: commentData } = useComment(
    params.userId!,
    params.resumeId!
  );

  return (
    <>
      <div
        className={cls(
          "max-w-[1200px] m-auto mt-5 w-full px-5 pb-10",
          "sm:w-4/5 sm:px-0 sm:mt-8"
        )}
      >
        <div className={cls("flex-auto w-full")}>
          {isLoading && !resumeData ? (
            <div className="mt-10">
              <LoadingUI />
            </div>
          ) : (
            <>
              {resumeData && (
                <article>
                  <div className="flex items-end space-x-8">
                    <h1
                      className={cls(
                        "mt-2 text-3xl text-deepBlack",
                        "sm:text-4xl sm:mt-4"
                      )}
                    >
                      {resumeData.title}
                    </h1>
                    {scrap && (
                      <span className="text-base text-pink-600">MyPick</span>
                    )}
                  </div>
                  <div className="pb-3 pt-8 w-fit">
                    <UserInfo
                      modifiedDate={resumeData.modifiedDate}
                      nickname={resumeData.nickname}
                      imageSrc={resumeData.imageLink}
                    />
                  </div>
                  {resumeData.isOwner && (
                    <div className="flex items-center space-x-2">
                      <NormalButton type="button" onClick={onUpdate}>
                        수정
                      </NormalButton>
                      <NormalButton type="button" onClick={onDelete}>
                        삭제
                      </NormalButton>
                    </div>
                  )}
                  <p className="pt-10 text-lg text-black min-h-[5rem]">
                    {resumeData.contents}
                  </p>
                  <div
                    className={cls(
                      "flex py-2 justify-between mt-8",
                      "lg:mt-16"
                    )}
                  >
                    <div className="flex space-x-2">
                      {scrap ? (
                        <NormalButton
                          type="button"
                          color="normalColor"
                          onClick={() => {
                            scrapMutate();
                          }}
                        >
                          {isScrapLoading ? <LoadingText /> : "스크랩취소"}
                        </NormalButton>
                      ) : (
                        <NormalButton
                          type="button"
                          onClick={() => {
                            scrapMutate();
                          }}
                        >
                          {isScrapLoading ? <LoadingText /> : "스크랩하기"}
                        </NormalButton>
                      )}
                    </div>
                    <div className="space-x-4 flex">
                      <ResumeInfo
                        recommendCnt={resumeData.recommendCnt}
                        viewCnt={resumeData.viewCnt}
                        commentCnt={resumeData.commentCnt}
                      />
                    </div>
                  </div>
                  <ResumeChat
                    path={`https://resume-file-storage.s3.ap-northeast-2.amazonaws.com${resumeData.fileLink}`}
                    inputChatData={inputChatData}
                  />
                </article>
              )}
            </>
          )}
        </div>
      </div>
      {open.resumeDeleteOpen && <ResumeDeleteModal />}
    </>
  );
}
