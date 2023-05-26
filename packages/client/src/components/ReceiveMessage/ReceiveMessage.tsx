import React, { memo } from "react";
import PictureDarthVader from "assets/avatars/darth-vader.png";
import type IMessage from "types/messages";

function ReceiveMessage({ message }: { message: IMessage }) {
  const { userName, message: msg, createdAt } = message;

  // timezone format time HH:mm - pt-BR
  const time = new Date(createdAt).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Sao_Paulo",
  });

  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={PictureDarthVader} />
        </div>
      </div>
      <div className="chat-header mb-1">
        {userName}
        <time className="text-xs opacity-50 ml-2">{time}</time>
      </div>
      <div className="chat-bubble">{msg}</div>
      <div className="chat-footer opacity-50">Recebido</div>
    </div>
  );
}
export default memo(ReceiveMessage);
