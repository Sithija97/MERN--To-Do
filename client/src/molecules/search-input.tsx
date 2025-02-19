import { PlusIcon, Search, X } from "lucide-react";
import { Input } from "../atoms/ui/input";
import { Button } from "../atoms/ui/button";

type IProps = {
  search: string;
  openAddNote: () => void;
  clearSearch: () => void;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput = ({
  search,
  openAddNote,
  clearSearch,
  handleSearch,
}: IProps) => {
  return (
    <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <form>
        <div className="relative">
          <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground bg-white" />
          <Input
            placeholder="Search"
            className="pl-8"
            value={search}
            onChange={handleSearch}
          />
          {search && (
            <X
              className="absolute right-2 top-3 h-3 w-3 text-muted-foreground cursor-pointer"
              onClick={clearSearch}
            />
          )}
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
