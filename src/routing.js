import Home from "./views/pages/home";
import Welcome from "./views/pages/welcome";

const routing = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/welcome",
    component: Welcome
  }
];

export default routing;
