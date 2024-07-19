import { model, Schema } from "mongoose";
import { Category as ICategory } from "../interfaces/category.js";

const categorySchema = new Schema<ICategory>({
  title: {
    type: String,
    required: true,
    unique: true,
  },
});

export const Category = model("Category", categorySchema);
