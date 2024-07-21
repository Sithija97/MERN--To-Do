import mongoose from "mongoose";
import { Note } from "../models/index.js";
import { Note as INote } from "../interfaces/note.js";

export const noteService = {
  async getAllNotes() {
    const notes = await Note.find({}, { __v: 0 });
    return notes;
  },

  async getNoteById(noteId: string) {
    const objectId = new mongoose.Types.ObjectId(noteId);
    const note = await Note.findOne({ _id: objectId }, { __v: 0 });
    if (!note) {
      throw new Error("Note not found");
    }
    return note;
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
    if (result.modifiedCount !== 1) {
      throw new Error("Category update failed.");
    }
    return updatedNote;
  },

  async deleteNote(noteId: string) {
    const objectId = new mongoose.Types.ObjectId(noteId);
    await Note.deleteOne({ _id: objectId });
    return objectId;
  },
};
