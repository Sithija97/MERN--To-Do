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
  .post(createCategory)
  .patch(updateCategory)
  .delete(deleteCategory);

categoryRouter.route("/:categoryId").get(getCategoryById);

export { categoryRouter };
