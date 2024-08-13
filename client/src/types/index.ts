export type Category = {
  _id: string;
  title: string;
};

export type Filter = {
  _id: string;
  title: string;
  userId: string;
};

export type Note = {
  _id: string;
  title: string;
  content: string;
  categoryId: Category;
  userId: string;
  userName: string;
  filters: Filter[];
  hasReminder: boolean;
  isTrashed: boolean;
  hasArchived: boolean;
  priority: string;
  createdAt: string;
  updatedAt: string;
};

export type InitialBaseState = {
  selectedNote: Note;
};
