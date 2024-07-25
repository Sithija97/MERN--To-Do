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

noteRouter
  .route("/")
  .get(protect, getNotes)
  .post(protect, createNote)
  .patch(protect, updateNote)
  .delete(protect, deleteNote);

noteRouter.route("/:noteId").get(getNoteById);

export { noteRouter };
