import React from "react";
import { Route, withRouter, BrowserRouter, StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/configure-store";
import Layout from "./views/layouts/base";
import routes from "./routing";
import "./styles.css";

const Routes = withRouter(() => (
  <Layout>
    {routes.map(({ path, ...rest }) => (
      <Route
        path={path}
        key={`route-${path}`}
        {...rest}
      />
    ))}
  </Layout>
));

export const Client = ({ initialState }) => (
  <Provider store={configureStore(initialState)}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
);

export const Server = ({ location }) => (
  <Provider store={configureStore()}>
    <StaticRouter context={{}} location={location}>
      <Routes />
    </StaticRouter>
  </Provider>
);
