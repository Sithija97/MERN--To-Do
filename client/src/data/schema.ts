import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  _id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
});

export const noteSchema = z.object({
  _id: z.string(),
  title: z.string(),
  content: z.string().optional(), // optional because not all notes have content
  userId: z.string().optional(), // optional because userId may not be available for all entries
  userName: z.string().optional(), // optional because userName may not be available for all entries
  hasReminder: z.boolean().optional(), // optional because not all entries have reminders
  isTrashed: z.boolean().optional(), // optional because not all entries are trashed
  hasArchived: z.boolean().optional(), // optional because not all entries are archived
  priority: z.enum(["low", "medium", "high"]).optional(), // optional with specific values
  createdAt: z.string().optional(), // ISO date string
  updatedAt: z.string().optional(), // ISO date string
});

export type Task = z.infer<typeof taskSchema>;
export type Note = z.infer<typeof noteSchema>;
