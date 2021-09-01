const express = require('express');
const router = express.Router();
// import controllers
const {
  projectHome,
  nosotrosController,
} = require('../controllers/projectsController');

const routes = () => {
  // module.exports = function () {
  // route to home
  router.get('/', projectHome);
  // route to nosotros
  router.get('/nosotros', nosotrosController);

  return router;
};

module.exports = routes;
