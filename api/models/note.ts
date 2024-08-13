import { model, Schema, Types } from "mongoose";
import { Note as INote } from "../interfaces/index.js";
import { NoteStatus } from "../enums/index.js";

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
      type: [Schema.Types.ObjectId],
      ref: "Filter",
      default: [],
    },
    hasReminder: { type: Boolean, required: true, default: false },
    reminder: { type: Schema.Types.ObjectId, ref: "Reminder" },
    isTrashed: { type: Boolean, required: true, default: false },
    hasArchived: { type: Boolean, required: true, default: false },
    priority: { type: String, required: true, default: NoteStatus.IDLE },
  },
  {
    timestamps: true,
  }
);

noteSchema.pre("save", async function (next) {
  if (!this.filters.length) {
    this.filters.push(
      new Types.ObjectId(
        "66b3934cb22961bc84b9e3df"
      ) as unknown as Schema.Types.ObjectId
    );
  }
  next();
});

export const Note = model("Note", noteSchema);
