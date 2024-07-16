import mongoose from "mongoose";
import { Category } from "../interfaces/category.js";

const categoryCollection = mongoose.connection.collection("categories");

export const categoryService = {
  async getAllCategories() {
    const categories = await categoryCollection.find().toArray();
    return categories;
  },

  async getCategoryById(categoryId: string) {
    const objectId = new mongoose.Types.ObjectId(categoryId);
    const category = await categoryCollection.findOne({ _id: objectId });
    return category ? category : null;
  },

  async createCategory(category: Category) {
    const newCategory = await categoryCollection.insertOne(category);
    return category;
  },

  async updateCategory(categoryId: string, updatedCategory: Category) {
    const objectId = new mongoose.Types.ObjectId(categoryId);
    const result = await categoryCollection.updateOne(
      { _id: objectId },
      { $set: updatedCategory }
    );
    return result.modifiedCount === 1 ? updatedCategory : null;
  },

  async deleteCategory(categoryId: string) {
    const objectId = new mongoose.Types.ObjectId(categoryId);
    await categoryCollection.deleteOne({ _id: objectId });
    return objectId;
  },
};
