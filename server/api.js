import express from 'express';
import routesFunc from './lib/routes';

const router = new express.Router();
const routes = routesFunc();

router.post('/polls', routes.polls.create.bind(routes.polls));
router.get('/polls/:id', routes.polls.show.bind(routes.polls));
router.get('/polls/:id/results', routes.polls.result.bind(routes.polls));
router.post('/votes', routes.votes.create.bind(routes.polls));
router.get('/votes/:id', routes.votes.show.bind(routes.polls));

export default router;
