import { createRoot } from "react-dom/client";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import PaidBook from "./components/PaidBook.jsx";
import Register from "./Auth/Register.jsx";
import Contact from "./components/Contact.jsx";
import { AuthProvider, useAuth } from "./Context/AuthProvider.jsx";
import Login from "./Auth/Login.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import { About } from "./components/About.jsx";

const ProtectedRoute = ({ children }) => {
  const [authUser] = useAuth();

  return authUser ? children : <Navigate to="/login" />;
};

const ProtectedRegister = ({ children }) => {
  const [authUser] = useAuth();

  return !authUser ? children : <Navigate to="/" />;
};



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
        path: "Paidbook",
        element: (
          <ProtectedRoute>
            <PaidBook />
          </ProtectedRoute>
        ),
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path:"about",
        element:<About/>
      }
    ],
  },
  {
    path: "register",
    element: (
      <ProtectedRegister>
        <Register />
      </ProtectedRegister>
    ),
  },
  {
    path: "login",
    element:
  (
    <ProtectedRegister>

      <Login />,
    </ProtectedRegister>
  )
  },
  {
    path:"*",
    element:<ErrorPage/>
  }
]);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
