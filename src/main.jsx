import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Gezicht from "./Gezicht.jsx";
import Stickers from "./Stickers.jsx";
import Video from "./Video.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/gezicht",
    element: <Gezicht />,
  },
  {
    path: "/stickers",
    element: <Stickers />,
  },
  {
    path: "/video",
    element: <Video />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
