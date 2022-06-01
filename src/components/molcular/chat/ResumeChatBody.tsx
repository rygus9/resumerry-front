import ChatInput from "components/molcular/chat/ChatInput";
import ChatItem from "components/molcular/chat/ChatItem";
import { useRecoilValue } from "recoil";
import { commentLenState } from "recoil/commentLen";

export default function ResumeChatBody({
  chatList,
  yPath,
}: {
  chatList: any[];
  yPath: number;
}) {
  const commentLen = useRecoilValue(commentLenState);

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
          <ChatInput depth={0} group={commentLen} size="sm" yPath={yPath} />
        </div>
      </div>
    </div>
  );
}
