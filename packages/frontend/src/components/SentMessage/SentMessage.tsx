import PictureObiWan from "assets/avatars/obi-wan.png";
import { memo, useId } from "react";
import type IMessage from "types/messages";

function SentMessage({ message }: { message: IMessage }) {
  const { message: msg, userName, status, createdAt } = message;

  // format time HH:mm
  const time = new Date(createdAt).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Sao_Paulo",
  });

  const statusIcon: { [key: string]: string } = {
    pending: "🕑",
    success: "✅",
    error: "❌",
  };

  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={PictureObiWan} />
        </div>
      </div>
      <div className="chat-header mb-1">
        {userName}
        <time className="text-xs opacity-50 ml-2">{time}</time>
      </div>
      <div className="chat-bubble">{msg}</div>
      <div className="chat-footer opacity-50">
        {statusIcon[status]} {status}{" "}
      </div>
    </div>
  );
}

export default memo(SentMessage);
