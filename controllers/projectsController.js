const projectHome = (req, res) => {
  res.render('index', { pageName: 'Proyectos' });
};

const projectForm = (req, res) => {
  res.render('newProject', { pageName: 'Nuevo Proyecto' });
};

const newProject = (req, res) => {
  // console.log(req.body);
  // validate
  const { name } = req.body;
  let errors = [];
  if (!name) errors.push({ text: 'Agrega un nombre al proyecto' });
  // if there are errors
  if (errors.length)
    res.render('newProject', {
      pageName: 'Nuevo Proyecto',
      errors,
    });
};

module.exports = { projectHome, projectForm, newProject };
