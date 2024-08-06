import { Tabs, TabsContent, TabsList, TabsTrigger } from "../attoms/ui/tabs";
import { SelectSeparator } from "../attoms/ui/select";
import { NoteList } from "./note-list";
import { SearchInput } from "../molecules";
import { useGetNotesQuery } from "../store/notes-slice";
import { useAuth } from "@clerk/clerk-react";
import { Note } from "../types";
import { AddNoteSection } from "./add-note-section";
import { useState } from "react";

export const NotesSection = () => {
  const { data: notes = [], isSuccess } = useGetNotesQuery({});
  const { userId } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const handleAddNote = () => setIsOpen(!isOpen);

  return (
    <Tabs defaultValue="all">
      <div className="flex items-center px-4 py-2">
        <h1 className="text-xl font-bold">General</h1>
        <TabsList className="ml-auto">
          <TabsTrigger value="all" className="text-zinc-600 dark:text-zinc-200">
            All notes
          </TabsTrigger>
          <TabsTrigger
            value="unread"
            className="text-zinc-600 dark:text-zinc-200"
          >
            My notes
          </TabsTrigger>
        </TabsList>
      </div>
      <SelectSeparator />

      <SearchInput openAddNote={handleAddNote} />

      <AddNoteSection isOpen={isOpen} onClose={handleAddNote} />

      <TabsContent value="all" className="m-0">
        <NoteList items={notes} />
      </TabsContent>
      <TabsContent value="unread" className="m-0">
        <NoteList
          items={
            notes &&
            isSuccess &&
            notes.filter((item: Note) => item.userId === userId)
          }
        />
      </TabsContent>
    </Tabs>
  );
};
