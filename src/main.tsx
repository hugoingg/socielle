import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home.tsx";
import MenuPage from "./pages/menu.tsx";
import AboutUs from "./pages/aboutus.tsx";
import Contacts from "./pages/contacts.tsx";

const router = createBrowserRouter([
  {
    path: "/socielle/",
    element: <App />,
    children: [
      {
        path: "/socielle/",
        element: <HomePage />,
      },
      {
        path: "/socielle/menu",
        element: <MenuPage />,
      },
      {
        path: "/socielle/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/socielle/contacts",
        element: <Contacts />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
