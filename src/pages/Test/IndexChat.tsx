import ChatBody from "./ChatBody";

export function IndexChat({
  top,
  chatList,
  subChatOpen,
  setSubChatOpen,
  setChatData,
}: {
  top: number;
  chatList: any[];
  isOpen: boolean;
  subChatOpen: any;
  setSubChatOpen: any;
  setChatData: any;
}) {
  return (
    <div
      className="z-10 translate-y-1/2 cursor-pointer flex"
      style={{ position: "absolute", top: `${top}px`, left: `0px` }}
      onClick={(e) => {
        e.stopPropagation();
        if (chatList.length === 0) {
          setChatData((elem: any) =>
            elem.filter((elem: any) => elem[0] !== top)
          );
          setSubChatOpen(subChatOpen.filter((elem: any) => elem.top !== top));
        }
        setSubChatOpen(
          subChatOpen.map((elem: any) => {
            if (elem.top === top) {
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
        {subChatOpen.filter((elem: any) => elem.top === top)[0].state
          ? "X"
          : "C"}
      </div>
      {subChatOpen.filter((elem: any) => elem.top === top)[0].state && (
        <ChatBody chatList={chatList} />
      )}
    </div>
  );
}
