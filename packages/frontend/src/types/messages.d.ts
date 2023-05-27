export default interface IMessage {
  id: string;
  message: string;
  userName: string;
  userId: number;
  status: "sent" | "success" | "error";
  createdAt: Date;
  updatedAt: Date;
}
