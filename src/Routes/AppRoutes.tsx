
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages";

export const HomeRoutes = {
  element: <HomeLayout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
  ],
};
