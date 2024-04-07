import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import Discover from "./pages/Discover/Discover.tsx";
import ComingSoon from "./pages/ComingSoon/ComingSoon.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Discover />,
      },
      {
        path: "/ui-kits",
        element: <ComingSoon />,
      },
      {
        path: "/screens",
        element: <ComingSoon />,
      },
      {
        path: "/ui-kits",
        element: <ComingSoon />,
      },
      {
        path: "/articles",
        element: <ComingSoon />,
      },
      {
        path: "/become-sponsor",
        element: <ComingSoon />,
      },
      {
        path: "/hire",
        element: <ComingSoon />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
