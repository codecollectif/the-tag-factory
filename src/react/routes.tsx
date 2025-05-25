import { Suspense } from "react";
import { Outlet } from "react-router";

import { ElementProvider } from "./components/ElementContext";
import Layout from "./components/Layout";

import ElementCreate from "./pages/ElementCreate";
import ElementList from "./pages/ElementList";

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
        path: "/",
        element: (
          <Suspense fallback={<p>loading items...</p>}>
            <ElementProvider>
              <Outlet />
            </ElementProvider>
          </Suspense>
        ),
        children: [
          {
            path: "/elements/new",
            element: <ElementCreate />,
          },
          {
            index: true,
            element: <ElementList />,
          },
        ],
      },
    ],
  },
];
