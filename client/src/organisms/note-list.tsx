import { ScrollArea } from "../atoms/ui/scroll-area";
import { Note } from "../types";
import { useAppDispatch, useAppSelector } from "../store/store";
import { selectedNote, setNote } from "../store/base-slice";
import { NoteCard, SkeletonCard } from "../molecules";

type NoteListProps = {
  isLoading: boolean;
  isFetching: boolean;
  items: Note[];
};

export function NoteList({ isLoading, isFetching, items }: NoteListProps) {
  const dispatch = useAppDispatch();
  const note = useAppSelector(selectedNote);

  const setSelectedMail = (item: Note) => {
    dispatch(setNote({ ...item }));
  };

  return (
    <ScrollArea className="h-[calc(100vh-185px)]">
      <div className="flex flex-col gap-2 p-4 pt-0">
        {isLoading || isFetching
          ? Array.from({ length: 8 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : items.map((item: Note) => (
              <NoteCard
                item={item}
                note={note}
                setSelectedMail={setSelectedMail}
              />
            ))}
      </div>
    </ScrollArea>
  );
}
