import ChatInput from "components/molcular/chat/ChatInput";
import ChatItem from "components/molcular/chat/ChatItem";

export default function ResumeChatBody({ chatList }: { chatList: any[] }) {
  return (
    <div
      className="absolute w-64 bg-white top-0 left-14 rounded-2xl border-2 px-2 border-lightGray"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="divide-y divide-lightGray">
        {chatList.map((elem, index) => (
          <ChatItem key={`mainChat${index}`} {...elem} size="sm" />
        ))}
        <div className="pb-3">
          <ChatInput depth={0} group={0} size="sm" yPath={chatList[0].yPath} />
        </div>
      </div>
    </div>
  );
}
