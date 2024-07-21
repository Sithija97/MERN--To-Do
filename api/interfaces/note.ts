import { Schema } from "mongoose";
import { ReminderStatus } from "../enums/index.js";
import { Category } from "./category.js";

export interface Note {
  id: number;
  title: string;
  content: string;
  categoryId: Schema.Types.ObjectId;
  userId: String;
  userName: String;
  filters: string[];
  hasReminder: boolean;
  reminder: {
    dateTime: Date;
    status: ReminderStatus;
  };
}
