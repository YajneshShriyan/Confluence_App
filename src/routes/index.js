const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const pageRoute = require('./page.route');
const likeRoute = require('./likes.route');
const friendRoute = require('./friends.route');
const apprRoute = require('./appr.route');
const config = require('../config/envConfig');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/posts',
    route: pageRoute,
  },
  {
    path: '/friends',
    route: friendRoute,
  },
  {
    path: '/likes',
    route: likeRoute,
  },
  {
    path: '/appr',
    route: apprRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
