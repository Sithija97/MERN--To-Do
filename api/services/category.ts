import mongoose from "mongoose";
import { Category } from "../models/index.js";
import { Category as ICategory } from "../interfaces/index.js";

export const categoryService = {
  async getAllCategories() {
    const categories = await Category.find({}, { __v: 0 }).lean();
    return categories;
  },

  async getCategoryById(categoryId: string) {
    const objectId = new mongoose.Types.ObjectId(categoryId);
    const category = await Category.findById(objectId, { __v: 0 }).lean();
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
    const result = await Category.findByIdAndUpdate(objectId, updatedCategory, {
      new: true,
    });

    return result;
  },

  async deleteCategory(categoryId: string) {
    const objectId = new mongoose.Types.ObjectId(categoryId);
    await Category.deleteOne({ _id: objectId });
    return objectId;
  },
};
