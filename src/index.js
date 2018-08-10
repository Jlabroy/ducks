import React from "react";
import ReactDOM from "react-dom";
import { Client } from "./app";

const initialState = window.__PRELOADED_STATE__;

ReactDOM.hydrate(
  <Client
    initialState={initialState}
  />,
  document.getElementById("root")
);
