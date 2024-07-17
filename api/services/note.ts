import mongoose from "mongoose";
import { Note } from "../models/index.js";
import { Note as INote } from "../interfaces/note.js";

export const noteService = {
  async getAllNotes() {
    const notes = await Note.find();
    return notes;
  },

  async getNoteById(noteId: string) {
    const objectId = new mongoose.Types.ObjectId(noteId);
    const note = await Note.findOne({ _id: objectId });
    return note ? note : null;
  },

  async createNote(note: INote) {
    const newNote = await Note.create(note);
    return newNote;
  },

  async updateNote(noteId: string, updatedNote: INote) {
    const objectId = new mongoose.Types.ObjectId(noteId);
    const result = await Note.updateOne(
      { _id: objectId },
      { $set: updatedNote }
    );
    return result.modifiedCount === 1 ? updatedNote : null;
  },

  async deleteNote(noteId: string) {
    const objectId = new mongoose.Types.ObjectId(noteId);
    await Note.deleteOne({ _id: objectId });
    return objectId;
  },
};
