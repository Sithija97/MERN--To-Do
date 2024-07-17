import mongoose from "mongoose";
import { Note } from "../interfaces/note.js";

const noteCollection = mongoose.connection.collection("notes");

export const noteService = {
  async getAllNotes() {
    const notes = await noteCollection.find().toArray();
    return notes;
  },

  async getNoteById(noteId: string) {
    const objectId = new mongoose.Types.ObjectId(noteId);
    const note = await noteCollection.findOne({ _id: objectId });
    return note ? note : null;
  },

  async createNote(note: Note) {
    const newNote = await noteCollection.insertOne(note);
    return note;
  },

  async updateNote(noteId: string, updatedNote: Note) {
    const objectId = new mongoose.Types.ObjectId(noteId);
    const result = await noteCollection.updateOne(
      { _id: objectId },
      { $set: updatedNote }
    );
    return result.modifiedCount === 1 ? updatedNote : null;
  },

  async deleteNote(noteId: string) {
    const objectId = new mongoose.Types.ObjectId(noteId);
    await noteCollection.deleteOne({ _id: objectId });
    return objectId;
  },
};
