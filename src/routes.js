import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./layout/root";
import ErrorPage from "./components/errorPage";
import { Home } from "./layout/home";
import { Login } from "./layout/Login";
import { Register } from "./layout/register";
import AdminLayout from "./pages/AdminLayout";
import Dashboard from "./layout/Admin/dashboard";
import Absensi from "./layout/Admin/absensi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "admin",
        element: <AdminLayout />,
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "absensi", element: <Absensi /> },
        ],
      },
    ],
  },
]);

export default router;
