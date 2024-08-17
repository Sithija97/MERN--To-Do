import { NotesTemplate } from "../templates";
import { useGetNotesQuery } from "../store/notes-slice";

export const Notes = () => {
  const { data: notes = [] } = useGetNotesQuery({});

  return <NotesTemplate notes={notes} />;
};
