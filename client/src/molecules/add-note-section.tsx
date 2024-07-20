import { Search } from "lucide-react";
import { Input } from "../components/ui/input";

export const AddNoteSection = () => {
  return (
    <div className="px-8 py-6">
      <div className="pb-4">
        <h1>AddNoteSection</h1>
      </div>
      <p>42 Notes</p>
      <div className="bg-background/95 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <form>
          <div className="relative">
            <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search" className="pl-8" />
          </div>
        </form>
      </div>
    </div>
  );
};
