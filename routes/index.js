const express = require('express');
const router = express.Router();
// import controllers
const {
  projectHome,
  projectForm,
  newProject
} = require('../controllers/projectsController');

const routes = () => {
  // route to home
  router.get('/', projectHome);
  router.get('/new-project', projectForm);
  router.post('/new-project', newProject);

  return router;
};

module.exports = routes;
