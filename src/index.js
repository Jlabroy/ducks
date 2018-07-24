import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/configure-store";
import routes from "./routing";
import Layout from "./views/layouts/base";
import registerServiceWorker from "./registerServiceWorker";

const App = withRouter(() => (
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

ReactDOM.render(
  <Provider store={configureStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
