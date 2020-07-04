module.exports = {
  showDate: (req, res, next) => {
    const date = new Date();
    console.log(`Año de peticion: ${date.getFullYear()}`);
    next();
  },
};
