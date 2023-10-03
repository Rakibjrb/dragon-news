import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import ErrorRoute from "../Layout/ErrorRoute";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        path: "/news-details-page",
        element: <NewsDetails />,
      },
    ],
    errorElement: <ErrorRoute />,
  },
]);
