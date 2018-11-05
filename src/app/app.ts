import * as Koa from 'koa';
import movieController from '../movie/movie.controller';

const app:Koa = new Koa();

app.use(movieController.routes());
app.use(movieController.allowedMethods());

export default app;
