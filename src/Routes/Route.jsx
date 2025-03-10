import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/Home/Home";
import MainLayout from "../Pages/LayOut/MainLayout";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
