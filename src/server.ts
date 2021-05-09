import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';
import formidableMiddleware from 'express-formidable';
import session from 'express-session';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

express() // You can also use Express
	.use(
		formidableMiddleware(),
		compression({ threshold: 0 }),
		
		sirv('static', { dev }),
		sapper.middleware(
			session({
				secret: 'sshhhhh',
				resave: true,
				saveUninitialized: true,
			  })
		)
	)
	.listen(PORT);
