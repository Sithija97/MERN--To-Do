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
      default: new Types.ObjectId("6697603dc38ac0c2eba9fda2"),
    },
    userId: {
      type: String,
      required: true,
    },
    filters: {
      type: [String],
    },
    reminder: { type: Schema.Types.ObjectId, ref: "Reminder" },
  },
  {
    timestamps: true,
  }
);

export const Note = model("Note", noteSchema);
