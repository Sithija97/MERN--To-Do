import express from "express";
import { protect } from "../middleware/auth.js";
import {
  createFilter,
  deleteFilter,
  getFilterById,
  getFilters,
  updateFilter,
} from "../controllers/filter.js";

const filterRouter = express.Router();

filterRouter.route("/").get(protect, getFilters).post(protect, createFilter);

filterRouter
  .route("/:filterId")
  .get(protect, getFilterById)
  .patch(protect, updateFilter)
  .delete(protect, deleteFilter);

export { filterRouter };
