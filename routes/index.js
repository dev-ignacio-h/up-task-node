const express = require('express');
const router = express.Router();
// import controllers
const {
  projectHome,
  projectForm,
} = require('../controllers/projectsController');

const routes = () => {
  // route to home
  router.get('/', projectHome);
  router.get('/new-project', projectForm);

  return router;
};

module.exports = routes;
