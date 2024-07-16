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
});

export const Reminder = model("Reminder", reminderSchema);
