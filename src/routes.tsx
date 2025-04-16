import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./features/layout/components/DefaultLayout";
import { lazy } from "react";

const Home = lazy(() => import("./features/home/components/Home"));

const AppRoutes: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: `/`,
      element: <DefaultLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
