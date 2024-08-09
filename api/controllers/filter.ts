import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { Filter } from "../interfaces/index.js";
import { filterService } from "../services/filter.js";
import jwt from "jsonwebtoken";

// Get all filters
export const getFilters = asyncHandler(async (req: Request, res: Response) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  const decodedToken = jwt.decode(token);
  const userId = decodedToken.sub;

  const filters = await filterService.getAllFilters(userId);
  res.status(200).json(filters);
});

// Get filter by ID
export const getFilterById = asyncHandler(
  async (req: Request, res: Response) => {
    const filterId = req.params.filterId;
    const filter = await filterService.getFilterById(filterId);
    if (!filter) {
      res.status(404).json({ message: "Filter not found" });
      return;
    }
    res.status(200).json(filter);
  }
);

// Create filter
export const createFilter = asyncHandler(
  async (req: Request, res: Response) => {
    const filter: Filter = req.body;
    const newFilter = await filterService.createFilter(filter);
    res.status(201).send();
  }
);

// Update filter
export const updateFilter = asyncHandler(
  async (req: Request, res: Response) => {
    const filterId = req.params.filterId;
    const updatedFilter = req.body;
    const filter = await filterService.updateFilter(filterId, updatedFilter);
    if (!filter) {
      res.status(404).json({ message: "Filter not found" });
      return;
    }
    res.status(200).send();
  }
);

// Delete filter
export const deleteFilter = asyncHandler(
  async (req: Request, res: Response) => {
    const filterId = req.params.filterId;
    if (filterId === "66b3934cb22961bc84b9e3df") {
      res.status(404).json({ message: "Not allowed to delete General filter" });
      return;
    }
    const objectId = await filterService.deleteFilter(filterId);
    if (!objectId) {
      res.status(404).json({ message: "Filter not found" });
      return;
    }
    res.status(204).send();
  }
);
