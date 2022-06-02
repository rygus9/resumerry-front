import { useCallback, useEffect, useState } from "react";
import { ResumeMainCommentElemResult } from "util/api/comment";
import { groupBy } from "util/utils";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { ResumeIndexChat } from "./ResumeIndexChat";
import { useSetRecoilState } from "recoil";
import { commentLenState } from "recoil/commentLen";

export default function ResumeChat({
  inputChatData,
  path,
}: {
  inputChatData: ResumeMainCommentElemResult[];
  path: string;
}) {
  const totalChatLen: number = inputChatData.length;
  const setCommentLen = useSetRecoilState(commentLenState);
  setCommentLen(totalChatLen);

  const [chatData, setChatData] = useState<
    [string, ResumeMainCommentElemResult[]][]
  >(Object.entries(groupBy(inputChatData, "yPath")));

  useEffect(() => {
    setChatData(Object.entries(groupBy(inputChatData, "yPath")));
  }, [setChatData, inputChatData]);

  const [subChatOpen, setSubChatOpen] = useState<
    { yPath: string; state: boolean }[]
  >(
    chatData.map((elem) => {
      return { yPath: elem[0], state: false };
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
        subChatOpen
          .map((elem) => {
            return { ...elem, state: false };
          })
          .concat({ yPath: e.nativeEvent.offsetY + "", state: true })
      );
    },
    [chatData, setChatData, setSubChatOpen, subChatOpen]
  );

  const pdfWorkerUrl = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.13.216/pdf.worker.js`;

  return (
    <div className="w-full  m-auto flex items-stretch justify-center">
      <div className="w-full border-2 border-gray">
        <Worker workerUrl={pdfWorkerUrl}>
          <Viewer fileUrl={path} defaultScale={1.4} />
        </Worker>
      </div>
      <div className="basis-[20rem] min-w-[20rem] bg-pink-50 relative pt-10">
        <div className="h-full w-2 bg-gray" onClick={clickEvent}>
          {chatData &&
            chatData.map((elem: any, index: any) => (
              <div key={index}>
                {elem[1].length === 0 ? (
                  <ResumeIndexChat
                    key={`${index}}index`}
                    yPath={elem[0]}
                    chatList={elem[1]}
                    isOpen={true}
                    subChatOpen={subChatOpen}
                    setSubChatOpen={setSubChatOpen}
                    setChatData={setChatData}
                  />
                ) : (
                  <ResumeIndexChat
                    key={`${index}}index`}
                    yPath={elem[0]}
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
