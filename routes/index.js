const express = require('express');
const router = express.Router();
// import controllers
const {
  projectHome,
  nosotrosController,
} = require('../controllers/projectsController');

const routes = () => {
  // route to home
  router.get('/', projectHome);

  return router;
};

module.exports = routes;
