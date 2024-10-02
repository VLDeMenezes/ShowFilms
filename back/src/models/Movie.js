import { mongoose } from "mongoose";
import { Schema } from "mongoose";

const movieSchema = new Schema({
  title: String,
  director: String,
  duration: Number,
  genre: [String],
  poster: String,
  year: Number,
  rate: Number,
});

const Movie = mongoose.model("Movie", movieSchema);

export { Movie };
