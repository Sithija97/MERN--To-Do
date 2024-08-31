import { model, Schema } from "mongoose";

const reminderSchema = new Schema({
  dateTime: {
    type: Date,
  },
  status: {
    type: String,
    enum: ["PENDING", "COMPLETED"],
    default: "PENDING",
  },
  userId: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  noteId: { type: Schema.Types.ObjectId, ref: "Note" },
});

export const Reminder = model("Reminder", reminderSchema);
