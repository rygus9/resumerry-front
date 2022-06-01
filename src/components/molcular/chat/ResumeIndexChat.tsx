import Heart from "components/atom/icons/Heart";
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
        setChatData((elem: any) =>
          elem.filter((elem: any) => {
            return elem[1].length !== 0;
          })
        );

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
      <div className="w-10 h-10 rounded-full text-center">
        {subChatOpen.filter((elem: any) => elem.yPath === yPath)[0].state ? (
          <Heart color="deep"></Heart>
        ) : (
          <Heart color="light"></Heart>
        )}
      </div>
      {subChatOpen.filter((elem: any) => elem.yPath === yPath)[0].state && (
        <ResumeChatBody chatList={chatList} yPath={yPath} />
      )}
    </div>
  );
}
