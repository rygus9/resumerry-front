import ResumeChatBody from "./ResumeChatBody";

export function ResumeIndexChat({
  yPath,
  chatList,
  subChatOpen,
  setSubChatOpen,
  setChatData,
}: {
  yPath: number;
  chatList: any[];
  isOpen: boolean;
  subChatOpen: any;
  setSubChatOpen: any;
  setChatData: any;
}) {
  return (
    <div
      className="z-10 translate-y-1/2 cursor-pointer flex"
      style={{ position: "absolute", top: `${yPath}px`, left: `0px` }}
      onClick={(e) => {
        e.stopPropagation();
        if (chatList.length === 0) {
          setChatData((elem: any) =>
            elem.filter((elem: any) => elem[0] !== yPath)
          );
          setSubChatOpen(
            subChatOpen.filter((elem: any) => elem.yPath !== yPath)
          );
        }
        setSubChatOpen(
          subChatOpen.map((elem: any) => {
            if (elem.yPath === yPath) {
              return { ...elem, state: !elem.state };
            } else {
              return { ...elem, state: false };
            }
          })
        );
      }}
    >
      <div className="h-10 w-2 bg-lightBlack z-20"></div>
      <div className="text-deepPurple text-2xl border-2 border-deepPurple bg-white w-10 h-10 rounded-full text-center">
        {subChatOpen.filter((elem: any) => elem.yPath === yPath)[0].state
          ? "X"
          : "C"}
      </div>
      {subChatOpen.filter((elem: any) => elem.yPath === yPath)[0].state && (
        <ResumeChatBody chatList={chatList} />
      )}
    </div>
  );
}
