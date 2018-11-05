import * as Koa from 'koa';
import database from './database';

import moviesController from './routes/movies.controller';

const app:Koa = new Koa();
const PORT:number = Number(process.env.PORT) || 3000;

app.use(moviesController.routes());
app.use(moviesController.allowedMethods());

database
  .then(() => {
    app.listen(PORT);
  });
