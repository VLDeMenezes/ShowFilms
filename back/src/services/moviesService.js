import { Movie } from "../models/Movie.js";

export const getMovies = async () => {
  const movies = await Movie.find();
  return movies;
};
export const createMovie = async (movieData) => {
  const movieCreated = await Movie.create(movieData);
  return movieCreated;
};
