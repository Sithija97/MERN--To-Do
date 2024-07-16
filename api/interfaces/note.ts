import { ReminderStatus } from "../enums/index.js";
import { Category } from "./category.js";

export interface Note {
  id: number;
  title: string;
  content: string;
  timestamp: Date;
  categoryId: number;
  category: Category;
  filters: string[];
  reminder: {
    dateTime: Date;
    status: ReminderStatus;
  };
}
