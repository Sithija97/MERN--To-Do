import { useGetNotesQuery } from "../store/notes-slice";
import { ArchiveTemplate } from "../templates";
import { Note } from "../types";

export const Archive = () => {
  const { data = [] } = useGetNotesQuery({});
  const notes = data?.filter((item: Note) => item.hasArchived);

  return <ArchiveTemplate notes={notes} />;
};
