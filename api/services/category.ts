import mongoose from "mongoose";
import { Category } from "../models/index.js";
import { Category as ICategory } from "../interfaces/category.js";

export const categoryService = {
  async getAllCategories() {
    const categories = await Category.find().lean();
    return categories;
  },

  async getCategoryById(categoryId: string) {
    const objectId = new mongoose.Types.ObjectId(categoryId);
    const category = await Category.findById(objectId).lean();
    if (!category) {
      throw new Error("Category not found");
    }
    return category;
  },

  async createCategory(category: ICategory) {
    const newCategory = await Category.create(category);
    return newCategory;
  },

  async updateCategory(categoryId: string, updatedCategory: ICategory) {
    const objectId = new mongoose.Types.ObjectId(categoryId);
    const result = await Category.updateOne(
      { _id: objectId },
      { $set: updatedCategory }
    );
    if (result.modifiedCount !== 1) {
      throw new Error("Category update failed.");
    }
    return updatedCategory;
  },

  async deleteCategory(categoryId: string) {
    const objectId = new mongoose.Types.ObjectId(categoryId);
    await Category.deleteOne({ _id: objectId });
    return objectId;
  },
};
