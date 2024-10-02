import { Router } from "express";
import { moviesRouter } from "./moviesRouter.js";
import { basicController } from "../controllers/index.js";
const router = Router();

router.use("/movies", moviesRouter);
router.use("/", basicController);

export { router };
