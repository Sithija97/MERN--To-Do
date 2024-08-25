import { Tabs, TabsContent, TabsList, TabsTrigger } from "../atoms/ui/tabs";
import { SelectSeparator } from "../atoms/ui/select";
import { NoteList } from "./note-list";
import { SearchInput } from "../molecules";
import { useGetNotesQuery } from "../store/notes-slice";
import { useAuth } from "@clerk/clerk-react";
import { Note } from "../types";
import { AddNoteSection } from "./add-note-section";
import { useState } from "react";

export const NotesSection = () => {
  const {
    data: notes = [],
    isSuccess,
    isLoading,
    isFetching,
  } = useGetNotesQuery({});
  const { userId } = useAuth();
  console.log(userId);

  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddNote = () => setIsOpen(!isOpen);
  const clearSearch = () => setSearchQuery("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredItems = notes.filter(
    (note: Note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.filters.some((filter) =>
        filter.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

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

      <SearchInput
        openAddNote={handleAddNote}
        search={searchQuery}
        clearSearch={clearSearch}
        handleSearch={handleSearchChange}
      />

      <AddNoteSection isOpen={isOpen} onClose={handleAddNote} />

      <TabsContent value="all" className="m-0">
        <NoteList
          items={filteredItems}
          isLoading={isLoading}
          isFetching={isFetching}
        />
      </TabsContent>
      <TabsContent value="unread" className="m-0">
        <NoteList
          items={
            notes &&
            isSuccess &&
            filteredItems.filter((item: Note) => item.userId === userId)
          }
          isLoading={isLoading}
          isFetching={isFetching}
        />
      </TabsContent>
    </Tabs>
  );
};
