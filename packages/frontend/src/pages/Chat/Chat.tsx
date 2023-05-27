import ChooseYourSide from "components/ChooseYourSide";
import InputMessage from "components/InputMessage";
import ListMessage from "components/ListMessages";

import Loading from "components/Loading";
import SearchInput from "components/SearchInput";
import { useGetMessage } from "hooks/api/useMessages";
import { ChangeEvent, useDeferredValue, useEffect, useState } from "react";

function Chat() {
  const { data: messages, isLoading: isLoadingMessages } = useGetMessage();
  const [search, setSearch] = useState<string>("");
  const [side, setSide] = useState<number | undefined>();
  const [isPending, setIsPending] = useState<boolean>(false);
  const deferredValue = useDeferredValue(search);

  function onChangeSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function onSelectSide(value: number | undefined) {
    setSide(value);
  }

  if (isLoadingMessages) return <Loading />;

  return (
    <div className="container mx-auto h-screen flex justify-center p-4">
      <div className="grid grid-rows-6 w-full sm:w-full lg:w-1/2">
        <div className="flex justify-end flex-col pb-4">
          <ChooseYourSide
            side={side}
            onSelect={onSelectSide}
            processing={isPending}
          />
          <SearchInput onChange={onChangeSearch} />
        </div>
        <ListMessage
          side={side}
          search={deferredValue}
          messages={messages}
          onProcessing={setIsPending}
        />
        <InputMessage />
      </div>
    </div>
  );
}

export default Chat;
