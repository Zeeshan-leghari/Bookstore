import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Course from "./components/Course.jsx";
import Register from "./Auth/Register.jsx";
import Contact from "./components/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Home />, 
    children: [
      {
        index: true, 
        element: <App />,
      },
      {
        path: "course",
        element: <Course />,
      },
      {
        path: "contact",
        element:<Contact/>
      }
    ],
  },
  {
    path: "register", 
    element: <Register />
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
