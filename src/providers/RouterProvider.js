import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Units from "../pages/Units";
import UnitDetail from "../pages/UnitDetail";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/units",
    element: <Units />,
  },
  {
    path: "/unit/:id",
    element: <UnitDetail />,
  },
]);

export { router };
