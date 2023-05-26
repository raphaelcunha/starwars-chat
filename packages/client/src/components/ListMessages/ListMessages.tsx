import ReceiveMessage from "components/ReceiveMessage";
import SentMessage from "components/SentMessage";
import {
  memo,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import IMessage from "types/messages";

const mockUseLogged = {
  id: 2,
  name: "Luke Skywalker",
};

interface IListMessages {
  side?: number;
  search: string;
  messages?: IMessage[];
  onProcessing: (isPending: boolean) => void;
}

const ListMessages = ({
  side,
  search,
  messages,
  onProcessing,
}: IListMessages) => {
  const endOfList = useRef<any>(null);
  const [isPending, startTransition] = useTransition();
  const [filteredMessages, setFilteredMessages] = useState<
    IMessage[] | undefined
  >();

  useLayoutEffect(() => {
    if (endOfList) endOfList.current.scrollIntoView();
  }, [filteredMessages]);

  useEffect(() => {
    startTransition(() => {
      const messagesFiltered: IMessage[] | undefined = messages?.filter(
        (message: IMessage) => {
          const hasMessage = message.userName
            .toLowerCase()
            .includes(search.toLowerCase());

          if (side) return message.userId === side && hasMessage;
          return hasMessage;
        }
      );
      setFilteredMessages(messagesFiltered);
    });
  }, [side, search, messages]);

  useEffect(() => {
    if (onProcessing) onProcessing(isPending);
  }, [isPending]);

  if (!messages) return <div>Not found messages</div>;

  return (
    <div className="row-span-5 overflow-y-auto pr-4 my-2 mt-3 mb-4">
      {filteredMessages?.map((message: any) => (
        <div key={message.id}>
          {message.userId === mockUseLogged.id ? (
            <SentMessage message={message} />
          ) : (
            <ReceiveMessage message={message} />
          )}
        </div>
      ))}
      <div ref={endOfList} />
    </div>
  );
};

export default memo(ListMessages);
