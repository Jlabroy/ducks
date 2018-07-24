import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/configure-store";
import routes from "./routing";
import Layout from "./views/layouts/base";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={configureStore}>
    <BrowserRouter>
      <Layout>
        {routes.map(({ path, ...rest }) => (
          <Route
            path={path}
            key={`route-${path}`}
            {...rest}
          />
        ))}
      </Layout>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
