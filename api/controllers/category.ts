import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { Category } from "../interfaces/category.js";
import { categoryService } from "../services/category.js";

// Get all categories
export const getCategories = asyncHandler(
  async (req: Request, res: Response) => {
    const categories = await categoryService.getAllCategories();
    res.status(200).json(categories);
  }
);

// Get category by ID
export const getCategoryById = asyncHandler(
  async (req: Request, res: Response) => {
    const categoryId = req.body.categoryId;
    const category = await categoryService.getCategoryById(categoryId);
    if (!category) {
      res.status(404).json({ message: "Category not found" });
      return;
    }
    res.status(200).json(category);
  }
);

// Create category
export const createCategory = asyncHandler(
  async (req: Request, res: Response) => {
    const category: Category = req.body;
    const newCategory = await categoryService.createCategory(category);
    res.status(201);
  }
);

// Update category
export const updateCategory = asyncHandler(
  async (req: Request, res: Response) => {
    const categoryId = req.body.categoryId;
    const updatedCategory = req.body.updatedCategory;
    const category = await categoryService.updateCategory(
      categoryId,
      updatedCategory
    );
    if (!category) {
      res.status(404).json({ message: "Category not found" });
      return;
    }
    res.status(200);
  }
);

// Delete category
export const deleteCategory = asyncHandler(
  async (req: Request, res: Response) => {
    const categoryId = req.body.categoryId;
    if (categoryId === "66967995394fb772e3f6f12e") {
      res
        .status(404)
        .json({ message: "Not allowed to delete General category" });
      return;
    }
    const objectId = await categoryService.deleteCategory(categoryId);
    if (!objectId) {
      res.status(404).json({ message: "Category not found" });
      return;
    }
    res.status(204);
  }
);
