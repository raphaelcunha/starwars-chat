import { ReactComponent as SentIcon } from "assets/icons/sent.svg";
import { useRef } from "react";
import { useMutateMessage } from "hooks/api/useMessages";

function InputMessage() {
  const inputRef = useRef<HTMLInputElement>(null);

  const { mutate } = useMutateMessage();

  async function sendMessage() {
    if (!inputRef.current?.value) {
      console.log("empty message");
      return;
    }

    mutate({
      userId: 2, // HARD CODE USER ID
      message: inputRef.current?.value,
    });

    // clear input
    inputRef.current.value = "";
  }

  return (
    <div className="flex justify-center items-center">
      <div className="form-control w-full flex flex-row">
        <div className="input-group">
          <input
            ref={inputRef}
            type="text"
            placeholder="Enviar mensagem..."
            className="input input-bordered w-full"
          />
          <button className="btn btn-square" onClick={sendMessage}>
            <SentIcon width="24" className="fill-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputMessage;
