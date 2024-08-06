import { model, Schema, Types } from "mongoose";
import { Note as INote } from "../interfaces/note.js";

const noteSchema = new Schema<INote>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
      default: new Types.ObjectId("66b111f33123378832c2a3b2"),
    },
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    filters: {
      type: [String],
      default: ["general", "work"],
    },
    hasReminder: { type: Boolean, required: true, default: false },
    reminder: { type: Schema.Types.ObjectId, ref: "Reminder" },
    isTrashed: { type: Boolean, required: true, default: false },
    hasArchived: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

export const Note = model("Note", noteSchema);
