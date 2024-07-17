import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { noteService } from "../services/note.js";
import { Note } from "../interfaces/note.js";

// Get all notes
export const getNotes = asyncHandler(async (req: Request, res: Response) => {
  const notes = await noteService.getAllNotes();
  res.status(200).json(notes);
});

// Get note by ID
export const getNoteById = asyncHandler(async (req: Request, res: Response) => {
  const noteId = req.body.noteId;
  const note = await noteService.getNoteById(noteId);
  if (!note) {
    res.status(404).json({ message: "Note not found" });
    return;
  }
  res.status(200).json(note);
});

// Create note
export const createNote = asyncHandler(async (req: Request, res: Response) => {
  const note: Note = req.body;
  const newNote = await noteService.createNote(note);
  res.status(201);
});

// Update note
export const updateNote = asyncHandler(async (req: Request, res: Response) => {
  const noteId = req.body.noteId;
  const updatedNote = req.body.updatedNote;
  const note = await noteService.updateNote(noteId, updatedNote);
  if (!note) {
    res.status(404).json({ message: "Note not found" });
    return;
  }
  res.status(200);
});

// Delete note
export const deleteNote = asyncHandler(async (req: Request, res: Response) => {
  const noteId = req.body.noteId;
  if (noteId === "66967995394fb772e3f6f12e") {
    res.status(404).json({ message: "Not allowed to delete General note" });
    return;
  }
  await noteService.deleteNote(noteId);
  res.status(204);
});
