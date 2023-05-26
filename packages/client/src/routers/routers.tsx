import { createBrowserRouter } from "react-router-dom";
import Chat from "pages/Chat";
import Rooms from "pages/Rooms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rooms />,
  },
  {
    path: "/chat/:roomId",
    element: <Chat />,
  },
]);

export default router;
