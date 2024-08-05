export type Note = {
  _id: string;
  title: string;
  content: string;
  categoryId: string;
  userId: string;
  userName: string;
  filters: string[];
  createdAt: string;
  updatedAt: string;
};

export type InitialBaseState = {
  token: string | null;
  selectedNote: Note;
};
