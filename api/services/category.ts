import mongoose from "mongoose";
import { Category } from "../models/index.js";
import { Category as ICategory } from "../interfaces/category.js";

export const categoryService = {
  async getAllCategories() {
    const categories = await Category.find();
    return categories;
  },

  async getCategoryById(categoryId: string) {
    const objectId = new mongoose.Types.ObjectId(categoryId);
    const category = await Category.findById(objectId);
    return category ? category : null;
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
    return result.modifiedCount === 1 ? updatedCategory : null;
  },

  async deleteCategory(categoryId: string) {
    const objectId = new mongoose.Types.ObjectId(categoryId);
    await Category.deleteOne({ _id: objectId });
    return objectId;
  },
};
