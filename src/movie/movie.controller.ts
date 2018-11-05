import * as Koa from 'koa';
import * as Router from 'koa-router';
import { getRepository, Repository } from 'typeorm';
import movieEntity from './movie.entity';
import * as HttpStatus from 'http-status-codes';

const routerOpts: Router.IRouterOptions = {
  prefix: '/movies',
};

const router: Router = new Router(routerOpts);

router.get('/', async (ctx:Koa.Context) => {
  const movieRepo:Repository<movieEntity> = getRepository(movieEntity);

  const movies = await movieRepo.find();

  ctx.body = {
    data: { movies },
  };
});

router.get('/:movie_id', async (ctx:Koa.Context) => {
  const movieRepo:Repository<movieEntity> = getRepository(movieEntity);

  const movie = await movieRepo.findOne(ctx.params.movie_id);

  if (!movie) {
    ctx.throw(HttpStatus.NOT_FOUND);
  }

  ctx.body = {
    data: { movie },
  };
});

router.post('/', async (ctx:Koa.Context) => {
  const movieRepo:Repository<movieEntity> = getRepository(movieEntity);

  const movie: movieEntity = movieRepo.create(ctx.request.body);
  console.log(movie);
  await movieRepo.save(movie);
  ctx.status = HttpStatus.CREATED;
  ctx.body = {
    data: { movie },
  };
});

router.delete('/:movie_id', (ctx:Koa.Context) => {
  ctx.body = `DELETE: SINGLE MOVIE (${ctx.params.movie_id})`;
});

router.patch('/:movie_id', async (ctx:Koa.Context) => {
  const movieRepo:Repository<movieEntity> = getRepository(movieEntity);

  const movie:movieEntity = await movieRepo.findOne(ctx.params.movie_id);

  if (!movie) {
    ctx.throw(HttpStatus.NOT_FOUND, 'Not found');
  }

  const updatedMovie = await movieRepo.merge(movie, ctx.request.body);
  movieRepo.save(updatedMovie);

  ctx.body = {
    data: { movie: updatedMovie },
  };
});

export default router;
