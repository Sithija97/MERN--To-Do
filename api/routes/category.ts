import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryById,
  updateCategory,
} from "../controllers/category.js";

const categoryRouter = express.Router();

categoryRouter
  .route("/")
  .get(getCategories)
  .get(getCategoryById)
  .post(createCategory)
  .patch(updateCategory)
  .delete(deleteCategory);

export { categoryRouter };
