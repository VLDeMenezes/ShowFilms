export const checkData = (req, res, next) => {
  const { title, year, director, duration, genre, rate, poster } = req.body;
  if (!title || !year || !director || !duration || !genre || !rate || !poster) {
    return res.status(400).json({ error: "Faltan datos" });
  }
  if (typeof title !== "string" || typeof director !== "string") {
    return res
      .status(400)
      .json({ error: "Titulo o Director deben ser String" });
  }
  if (
    typeof year !== "number" ||
    typeof duration !== "number" ||
    typeof rate !== "number"
  ) {
    return res
      .status(400)
      .json({ error: "Año, duracion o rate deben ser numeros" });
  }
  if (year < 1800 || year > 3000) {
    return res
      .status(400)
      .json({ error: "Año invalido debe ser entre 1800 y 3000" });
  }
  if (rate < 0 || rate > 10) {
    return res.status(400).json({ error: "Rate debe ser entre 0 y 10" });
  } else {
    next();
  }
};
