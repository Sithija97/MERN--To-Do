import { useAuth } from "@clerk/clerk-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../attoms/ui/tabs";
import { SelectSeparator } from "../attoms/ui/select";
import { mails } from "../data/mails";
import { MailList } from "./mail-list";
import { SearchInput } from "../molecules";

export const NotesSection = () => {
  const { userId } = useAuth();
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
            Reminders
          </TabsTrigger>
        </TabsList>
      </div>
      <SelectSeparator />

      <SearchInput />

      <TabsContent value="all" className="m-0">
        <MailList items={mails} />
      </TabsContent>
      <TabsContent value="unread" className="m-0">
        {/* <MailList items={mails.filter((item) => !item.read)} /> */}
      </TabsContent>
    </Tabs>
  );
};
