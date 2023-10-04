import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import ErrorRoute from "../Layout/ErrorRoute";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import AuthProvider from "../Components/AuthProvider";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <AuthProvider>
            <Home />
          </AuthProvider>
        ),
        loader: () => fetch("news.json"),
      },
      {
        path: "/login-form",
        element: <Login />,
      },
      {
        path: "/signup-form",
        element: <SignUp />,
      },
      {
        path: "/news-details-page/:id",
        element: (
          <PrivateRoute>
            <NewsDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("../../news.json"),
      },
    ],
    errorElement: <ErrorRoute />,
  },
]);
