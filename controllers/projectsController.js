const projectHome = (req, res) => {
  res.send('Index');
};

const nosotrosController = (req, res) => {
  res.send('Nosotros');
};

module.exports = { projectHome, nosotrosController };
