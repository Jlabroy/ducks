import path from 'path';
import fs from 'fs';
import ReactDOMServer from "react-dom/server";
import { Server } from "../src/app";
import React from "react";
import store from "../src/redux/configure-store";

const renderPage = (url, initialState) => {
  const html = ReactDOMServer.renderToString(
    <Server
      location={url}
    />
  );

  const filePath = path.resolve(__dirname, '..', 'build', 'index.html');
  const htmlData = fs.readFileSync(filePath, 'utf8');

  return htmlData
    .replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
    )
    .replace(
      '%PRELOADED_STATE%',
      JSON.stringify(store(initialState).getState())
    );
};

export default renderPage;
