import { useGetNotesQuery } from "../store/notes-slice";
import { TrashTemplate } from "../templates";
import { Note } from "../types";

export const Trash = () => {
  const { data = [] } = useGetNotesQuery({});
  const notes = data?.filter((item: Note) => item.isTrashed);

  return <TrashTemplate notes={notes} />;
};
