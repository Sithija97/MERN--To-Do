import { PlusIcon, Search } from "lucide-react";
import { Input } from "../attoms/ui/input";
import { Button } from "../attoms/ui/button";

type IProps = {
  openAddNote: () => void;
};

export const SearchInput = ({ openAddNote }: IProps) => {
  return (
    <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <form>
        <div className="relative">
          <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground bg-white" />
          <Input placeholder="Search" className="pl-8" />
        </div>
      </form>

      <Button
        variant={"secondary"}
        className="mt-2 w-full"
        onClick={openAddNote}
      >
        <PlusIcon className="mr-2 h-4 w-4" /> Add Notes
      </Button>
    </div>
  );
};
