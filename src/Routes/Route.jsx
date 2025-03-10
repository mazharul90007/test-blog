import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/Home/Home";
import MainLayout from "../Pages/LayOut/MainLayout";
import About from "../Pages/About/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <HomePage></HomePage>
        },
        {
            path: '/about',
            element: <About/>
        },
      ]
    },
  ]);

export default router;