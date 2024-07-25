import asyncHandler from "express-async-handler";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

const authMiddleware = ClerkExpressRequireAuth({});

export const protect = asyncHandler(async (req, res, next) => {
  await authMiddleware(req, res, (error) => {
    if (error) {
      // Handle Clerk error (optional: log, etc.)
      console.error("Clerk Authentication Error:", error);
      throw error; // Throw the error to be caught by asyncHandler
    }
    next();
  });
});
