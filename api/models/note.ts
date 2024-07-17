import { model, Schema, Types } from "mongoose";
import { Reminder } from "./reminder.js";

const noteSchema = new Schema(
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
      default: new Types.ObjectId("669725e79303e35d5490ab95"),
    },
    filters: {
      type: [String],
    },
    reminder: Reminder,
  },
  {
    timestamps: true,
  }
);

export const Note = model("Note", noteSchema);
