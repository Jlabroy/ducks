import Home from "./views/pages/home";
import Create from "./views/pages/create";

const routing = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/create",
    component: Create
  }
];

export default routing;
