const projectHome = (req, res) => {
  res.render('index', { pageName: 'Proyectos' });
};

const projectForm = (req, res) => {
  res.render('newProject', { pageName: 'Nuevo Proyecto' });
};

module.exports = { projectHome, projectForm };
