import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import Root from "./pages/Root";
import Serves from "./pages/Serves";
import ServesOne from "./pages/ServesOne";
import Blog from "./pages/Blog";
import BlogOne from "./pages/BlogOne";
import Index from "./pages/Index";
import NotFoundPage from "./pages/NotFoundPage";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [{ index: true, element: <Index /> }],
  },
  {
    path: "/serves",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <Serves /> },
      {
        path: "/serves/:servesId",
        element: <ServesOne />,
      },
    ],
  },
  {
    path: "/blog",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <Blog /> },
      {
        path: "/blog/:blogId",
        element: <BlogOne />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// ([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <NotFoundPage />,
//     children: [
//       { index: true, element: <Index /> },

//       {
//         path: "/serves",
//         element: <Root />,
//         children: [
//           { index: true, element: <Serves /> },

//           {
//             path: "/serves/:servesId",
//             element: <Serves />,
//           },
//         ],
//       },
//       {
//         path: "/blog",
//         element: <Root />,
//         errorElement: <NotFoundPage />,
//         children: [
//           { index: true, element: <Blog /> },
//           {
//             path: "/blog/:blogId",
//             element: <BlogOne />,
//           },
//         ],
//       },
//     ],
//   },
// ])
