import express from "express";
import {
  createNote,
  updateNote,
  deleteNote,
  getNoteById,
  getNotes,
} from "../controllers/note.js";

const noteRouter = express.Router();

noteRouter
  .route("/")
  .get(getNotes)
  .get(getNoteById)
  .post(createNote)
  .patch(updateNote)
  .delete(deleteNote);

export { noteRouter };
