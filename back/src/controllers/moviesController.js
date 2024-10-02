import { getMovies, createMovie } from "../services/moviesService.js";

export const getAllMovies = async (req, res) => {
  try {
    const movies = await getMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener datos" });
  }
};
export const postNewMovies = async (req, res) => {
  try {
    console.log(req.body);
    const newMovie = await createMovie(req.body);
    res.status(201).json("Pelicula exitosamente creada ");
    return newMovie;
  } catch {
    res.status(400).json({ error: "Error al crear la pelicula" });
  }
};
export const putAMovie = async (req, res) => {
  res.status(201).send("Pelicula actualizada exitosamente");
};
export const deleteAMovie = async (req, res) => {
  res.status(202).send("Pelicula eliminada exitosamente");
};
