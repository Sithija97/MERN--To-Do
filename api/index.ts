// Import modules
import express from "express";
import cors from "cors";

// Create an Express application
const app = express();

// Set the port number for the server
const port = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Middleware to enable Cross-Origin Resource Sharing (CORS) for all origins
app.use(cors({ origin: "*" }));

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${port}`);
});
