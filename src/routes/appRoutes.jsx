import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import List from "../pages/List";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  { path: "/", element: <Root />, errorElement: <ErrorPage /> },
  { path: "/list", element: <List /> },
  { path: "/about", element: <About /> },
]);
