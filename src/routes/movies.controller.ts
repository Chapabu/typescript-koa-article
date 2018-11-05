import * as Koa from 'koa';
import * as Router from 'koa-router';

const routerOpts: Router.IRouterOptions = {
  prefix: '/movies',
};

const router: Router = new Router(routerOpts);

router.get('/', (ctx:Koa.Context, next:Koa.Middleware) => {
  ctx.body = 'GET: MOVIE INDEX';
});

router.get('/:movie_id', (ctx:Koa.Context, next:Koa.Middleware) => {
  ctx.body = `GET: SINGLE MOVIE (${ctx.params.movie_id})`;
});

router.post('/', (ctx:Koa.Context, next:Koa.Middleware) => {
  ctx.body = 'POST: SINGLE MOVIE';
});

router.delete('/:movie_id', (ctx:Koa.Context, next:Koa.Middleware) => {
  ctx.body = `DELETE: SINGLE MOVIE (${ctx.params.movie_id})`;
});

router.patch('/:movie_id', (ctx:Koa.Context, next:Koa.Middleware) => {
  ctx.body = `DELETE: SINGLE MOVIE (${ctx.params.movie_id})`;
});

export default router;
