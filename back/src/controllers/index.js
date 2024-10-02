const basicController = (req, res) => {
  res
    .status(200)
    .send("Se hizo peticion GET a ninguna direccion en particular");
};

export { basicController };
