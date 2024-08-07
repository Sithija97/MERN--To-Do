import { model, Schema } from "mongoose";
import { Filter as IFilter } from "../interfaces/index.js";

const filterSchema = new Schema<IFilter>({
  title: {
    type: String,
    required: true,
    unique: true,
  },
});

export const Filter = model("Filter", filterSchema);
