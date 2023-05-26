async function getMessages() {
  return fetch("http://localhost:3000/chat/messages", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}

async function postMessage(data: { userId: number; message: string }) {
  return fetch("http://localhost:3000/chat/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export default {
  getMessages,
  postMessage,
};
