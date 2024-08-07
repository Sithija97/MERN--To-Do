import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { Category } from "../interfaces/index.js";
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
    const categoryId = req.params.categoryId;
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
    res.status(201).send();
  }
);

// Update category
export const updateCategory = asyncHandler(
  async (req: Request, res: Response) => {
    const categoryId = req.params.categoryId;
    const updatedCategory = req.body;
    const category = await categoryService.updateCategory(
      categoryId,
      updatedCategory
    );
    if (!category) {
      res.status(404).json({ message: "Category not found" });
      return;
    }
    res.status(200).send();
  }
);

// Delete category
export const deleteCategory = asyncHandler(
  async (req: Request, res: Response) => {
    const categoryId = req.params.categoryId;
    if (categoryId === "66b111f33123378832c2a3b2") {
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
    res.status(204).send();
  }
);
