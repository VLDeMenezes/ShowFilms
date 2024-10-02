import { Router } from "express";
import {
  getAllMovies,
  postNewMovies,
  putAMovie,
  deleteAMovie,
} from "../controllers/moviesController.js";
import { checkData } from "../middlewares/checkData.js";
const moviesRouter = Router();

moviesRouter.get("/", getAllMovies);
moviesRouter.post("/", checkData, postNewMovies);
moviesRouter.put("/", putAMovie);
moviesRouter.delete("/", deleteAMovie);
export { moviesRouter };
