import { Outlet } from "react-router";

import Layout from "./components/Layout";

import Home from "./pages/Home";

import "./index.css";

export default [
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];
