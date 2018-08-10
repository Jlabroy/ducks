import path from 'path';
import Koa from 'koa';
import Serve from 'koa-static-plus';
import Router from 'koa-router';
import React from 'react';
import Loadable from "react-loadable";
import renderPage from "./render-page";

const app = new Koa();
const router = new Router();

router.get('/', ctx => {
  ctx.body = renderPage(ctx.url);
});

router.get('/create', ctx => {
  ctx.body = renderPage(ctx.url, {
    todos: {
      error: 'hello world',
      data: [],
      isLoading: false
    }
  });
});

app.use(router.routes()).use(router.allowedMethods());

app.use(Serve(
  path.resolve(__dirname, '..', 'build', 'static'),
  {
    pathPrefix: '/ducks/static'
  }
));

Loadable.preloadAll().then(() => {
  app.listen(3000);
  console.log('Server running on port 3000');
});
