import React from "react";

import { ROUTES } from "../helpers/RoutePaths";
const Dashboard = React.lazy(() => import("../views/pages/dashboard"));

const routes = [
  {
    path: ROUTES.dashboard,
    exact: true,
    name: "Dashboard",
    component: Dashboard,
  },
];

export default routes;
