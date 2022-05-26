// Core viewer
import { Viewer, Worker } from "@react-pdf-viewer/core";

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { IndexChat } from "./IndexChat";
import { groupBy } from "util/utils";
import { useCallback, useEffect, useState } from "react";

interface TestChat {
  top: number;
}

const inputChatData = [
  {
    top: 450,
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
    memberId: 3,
  },
  {
    top: 450,
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
    top: 450,
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
    top: 800,
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
    top: 800,
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
    top: 600,
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

export default function Test() {
  const [chatData, setChatData] = useState<[string, TestChat[]][]>(
    Object.entries(groupBy(inputChatData, "top"))
  );

  const [subChatOpen, setSubChatOpen] = useState<
    { top: string; state: boolean }[]
  >(
    chatData.map((elem) => {
      return { top: elem[0], state: false };
    })
  );

  const clickEvent = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      setChatData(
        chatData
          .filter((elem) => elem[1].length !== 0)
          .concat([[e.nativeEvent.offsetY + "", []]])
      );
      setSubChatOpen(
        subChatOpen.concat({ top: e.nativeEvent.offsetY + "", state: true })
      );
    },
    [chatData, setChatData, setSubChatOpen, subChatOpen]
  );

  const pdfVersion = "2.14.305";
  const pdfWorkerUrl = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfVersion}/pdf.worker.js`;

  return (
    <div className="w-full  m-auto flex items-stretch justify-center">
      <div className="w-[48rem] border-2 border-gray">
        <Worker workerUrl={pdfWorkerUrl}>
          <Viewer
            fileUrl="https://resume-file-storage.s3.ap-northeast-2.amazonaws.com/2022/04/01/JUNGPIL_LEE_.pdf"
            defaultScale={1.4}
          />
        </Worker>
      </div>
      <div className="basis-[20rem] min-w-[20rem] bg-slate-100 relative pt-10">
        <div className="h-full w-2 bg-gray" onClick={clickEvent}>
          {chatData &&
            chatData.map((elem: any, index: any) => (
              <div key={index}>
                {elem[1].length === 0 ? (
                  <IndexChat
                    key={`${index}}index`}
                    top={elem[0]}
                    chatList={elem[1]}
                    isOpen={true}
                    subChatOpen={subChatOpen}
                    setSubChatOpen={setSubChatOpen}
                    setChatData={setChatData}
                  />
                ) : (
                  <IndexChat
                    key={`${index}}index`}
                    top={elem[0]}
                    chatList={elem[1]}
                    isOpen={false}
                    subChatOpen={subChatOpen}
                    setSubChatOpen={setSubChatOpen}
                    setChatData={setChatData}
                  />
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
