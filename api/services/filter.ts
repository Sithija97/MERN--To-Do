import mongoose from "mongoose";
import { Filter } from "../models/index.js";
import { Filter as IFilter } from "../interfaces/index.js";

export const filterService = {
  async getAllFilters(userId: string) {
    const filters = await Filter.find({ userId }, { __v: 0 }).lean();
    return filters;
  },

  async getFilterById(filterId: string) {
    const objectId = new mongoose.Types.ObjectId(filterId);
    const filter = await Filter.findById(objectId, { __v: 0 }).lean();
    if (!filter) {
      throw new Error("Filter not found");
    }
    return filter;
  },

  async createFilter(filter: IFilter) {
    const newFilter = await Filter.create(filter);
    return newFilter;
  },

  async updateFilter(filterId: string, updatedFilter: IFilter) {
    const objectId = new mongoose.Types.ObjectId(filterId);
    const result = await Filter.findByIdAndUpdate(objectId, updatedFilter, {
      new: true,
    });

    return result;
  },

  async deleteFilter(filterId: string) {
    const objectId = new mongoose.Types.ObjectId(filterId);
    await Filter.deleteOne({ _id: objectId });
    return objectId;
  },
};
