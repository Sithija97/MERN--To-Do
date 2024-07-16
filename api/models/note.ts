import { model, Schema, Types } from "mongoose";
import { Reminder } from "./reminder.js";

const noteSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
    default: new Types.ObjectId("66967995394fb772e3f6f12e"),
  },
  filters: {
    type: [String],
  },
  reminder: Reminder,
});

export const Note = model("Note", noteSchema);
