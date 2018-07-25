import React from "react";
import Loadable from "react-loadable";

const Loading = () => (
  <div>Loading</div>
);

const routing = [
  {
    path: "/",
    exact: true,
    component: Loadable({
      loader: () => import("./views/pages/home"),
      loading: Loading
    })
  },
  {
    path: "/create",
    component: Loadable({
      loader: () => import("./views/pages/create"),
      loading: Loading
    })
  }
];

export default routing;
