import express from "express";
import {
  createNote,
  updateNote,
  deleteNote,
  getNoteById,
  getNotes,
} from "../controllers/note.js";
import { protect } from "../middleware/auth.js";

const noteRouter = express.Router();

noteRouter.route("/").get(protect, getNotes).post(protect, createNote);

noteRouter
  .route("/:noteId")
  .get(protect, getNoteById)
  .patch(protect, updateNote)
  .delete(protect, deleteNote);

export { noteRouter };
