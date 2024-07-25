import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryById,
  updateCategory,
} from "../controllers/category.js";
import { protect } from "../middleware/auth.js";

const categoryRouter = express.Router();

categoryRouter
  .route("/")
  .get(protect, getCategories)
  .post(protect, createCategory)
  .patch(protect, updateCategory)
  .delete(protect, deleteCategory);

categoryRouter.route("/:categoryId").get(getCategoryById);

export { categoryRouter };
