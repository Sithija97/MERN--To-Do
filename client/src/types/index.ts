export type Category = {
  _id: string;
  title: string;
};

export type Note = {
  _id: string;
  title: string;
  content: string;
  categoryId: Category;
  userId: string;
  userName: string;
  filters: string[];
  hasReminder: boolean;
  isTrashed: boolean;
  hasArchived: boolean;
  createdAt: string;
  updatedAt: string;
};

export type InitialBaseState = {
  selectedNote: Note;
};
