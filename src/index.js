import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NewsTitlePage from "./pages/NewsTitlePage";
import ContactPage from "./pages/ContactPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/news",
        element: <NewsTitlePage />,
        loader: async ({ params }) => {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/`
          );
          const data = await response.json();
          return {
            data: data,
          };
        },
      },
      {
        path: "/news/:id",
        element: <NewsPage />,
        loader: async ({ params }) => {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${params.id}`
          );
          const data = await response.json();

          return {
            id: params.id,
            title: data.title,
            body: data.body,
          };
        },
      },
      {
        path: "/contact",
        element: <ContactPage />,
        action: async ({ request }) => {
          const formData = await request.formData();
          const fullname = formData.get("fullname");
          //   console.log(formData.get("fullname"));
          return {
            id: 1000,
            fullname: fullname,
          };
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
