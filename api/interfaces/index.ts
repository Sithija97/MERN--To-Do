import { Schema } from "mongoose";
import { ReminderStatus } from "../enums/index.js";

export interface Category {
  id: number;
  title: string;
}

export interface Filter {
  id: number;
  title: string;
  userId: string;
}

export interface Note {
  id: number;
  title: string;
  content: string;
  categoryId: Schema.Types.ObjectId;
  userId: String;
  userName: String;
  filters: Schema.Types.ObjectId[];
  hasReminder: boolean;
  reminder: {
    dateTime: Date;
    status: ReminderStatus;
  };
  isTrashed: boolean;
  hasArchived: boolean;
  priority: string;
}
