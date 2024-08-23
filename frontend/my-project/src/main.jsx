import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.css";
import Register from "./pages/register";
import Login from "./pages/login";
import Dashboards from "./pages/dashboards";
import Skill from "./pages/skill";
import Project from "./pages/project";
import Users from "./pages/user";
import Contact from "./pages/contact";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/dashboards",
    element: <Dashboards></Dashboards>,
  },
  {
    path: "/user",
    element: <Users></Users>,
  },
  {
    path: "/project",
    element: <Project></Project>,
  },
  {
    path: "/skill",
    element: <Skill></Skill>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
