import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/rootLayout";
import NotFound from "./components/common/notFound";
import Home from "./components/home";
import Services from "./components/services";
import Pricing from "./components/pricing";
import Testimonials from "./components/testimonials";
import About from "./components/about";

const App = () => {
  const routers = createBrowserRouter([
    {
      index: "/",
      element: <RootLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/pricing",
          element: <Pricing />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/testimonials",
          element: <Testimonials />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
};

export default App;
