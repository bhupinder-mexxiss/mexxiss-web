import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Home from "./Pages/Home.jsx";
import UnderConstruct from "./Pages/UnderConstruct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Ensure Layout is used here, so it gets the Router context
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <UnderConstruct />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
