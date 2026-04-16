import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import FriendDetails from "./pages/FriendDetails";

import "./index.css";

// ✅ IMPORT THIS
import { TimelineProvider } from "./context/TimelineContext";
import Timeline from "./pages/Timeline";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/stats",
        element: <h1>Stats Page</h1>,
      },
      {
        path: "/friend/:id",
        element: <FriendDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TimelineProvider>
      <RouterProvider router={router} />
    </TimelineProvider>
  </React.StrictMode>
);