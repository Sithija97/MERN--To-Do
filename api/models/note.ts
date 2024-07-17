import { model, Schema, Types } from "mongoose";

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
      default: new Types.ObjectId("6697603dc38ac0c2eba9fda2"),
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
