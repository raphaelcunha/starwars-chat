import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import React from "react";
// import Chat from "pages/Chat";
// import Rooms from "pages/Rooms";

// lazy load
const Chat = lazy(() => import("pages/Chat"));
const Rooms = lazy(() => import("pages/Rooms"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Suspense fallback={<div>Carregando</div>}>
        <Rooms />
      </React.Suspense>
    ),
  },
  {
    path: "/chat/:roomId",
    element: (
      <React.Suspense fallback={<div>Carregando</div>}>
        <Chat />
      </React.Suspense>
    ),
  },
]);

export default router;
