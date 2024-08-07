import { Schema } from "mongoose";
import { ReminderStatus } from "../enums/index.js";

export interface Category {
  id: number;
  title: string;
}

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
  isTrashed: boolean;
  hasArchived: boolean;
}
