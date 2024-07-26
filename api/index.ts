import { conncetDB } from "./config/DB.js";
// Import modules
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { logEvents, logger } from "./middleware/logger.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { categoryRouter, noteRouter } from "./routes/index.js";
import { corsOptions } from "./config/cors-options.js";
import {
  ClerkExpressRequireAuth,
  ClerkExpressWithAuth,
} from "@clerk/clerk-sdk-node";
import { protect } from "./middleware/auth.js";

dotenv.config();

// Create an Express application
const app = express();

// Set the port number for the server
const PORT = process.env.PORT || 3000;

// Database connection
conncetDB();

// logger
app.use(logger);

// Middleware to enable Cross-Origin Resource Sharing (CORS) for all origins
// app.use(cors({ origin: "*" }));
app.use(cors(corsOptions));

// Middleware to parse incoming JSON requests
app.use(express.json());

// Routes
app.use("/api/category", categoryRouter);

app.use("/api/note", noteRouter);

// Use the lax middleware that returns an empty auth object when unauthenticated
app.get("/protected-endpoint", protect, (req: any, res) => {
  res.json({ message: "authenticated" });
});

app.use(errorHandler);

// Start the server and listen on the specified port
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log"
  );
});
