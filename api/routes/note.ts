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
  .post(createNote)
  .patch(updateNote)
  .delete(deleteNote);

noteRouter.route("/:noteId").get(getNoteById);

export { noteRouter };
