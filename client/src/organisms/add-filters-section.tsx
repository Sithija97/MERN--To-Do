import { useState } from "react";
import { Button } from "../attoms/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../attoms/ui/dialog";
import { Input } from "../attoms/ui/input";
import { Label } from "../attoms/ui/label";
import {
  useAddNewFilterMutation,
  useDeleteFilterMutation,
  useGetFiltersQuery,
} from "../store/filter-slice";
import { toast } from "../attoms/ui/use-toast";
import { Filter } from "../types";
import { isEmptyArray } from "../utils";
import { Badge } from "../attoms/ui/badge";
import { Info, LoaderCircle, X } from "lucide-react";
import { format } from "date-fns";
import { Alert, AlertDescription } from "../attoms/ui/alert";

type IProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const AddFiltersSection = ({ isOpen, onClose }: IProps) => {
  const [addNewFilter] = useAddNewFilterMutation();
  const [deleteFilter] = useDeleteFilterMutation();
  const { data: filters = [] } = useGetFiltersQuery({});

  const initialState = { title: "" };
  const [filter, setFilter] = useState(initialState);
  const [deletingFilterId, setDeletingFilterId] = useState<string | null>(null);

  const isAddFilterDisabled = filter.title.trim() === "";

  const handleAddFilter = async (
    e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (!isAddFilterDisabled) {
      await addNewFilter(filter);
      setFilter(initialState);
      toast({
        title: "Filter has been successfully created.",
        description: format(new Date(), "EEEE, MMMM do, yyyy 'at' h:mm a"),
        duration: 1500,
      });
      // onClose();
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleDeleteFilter = async (filter: Filter) => {
    setDeletingFilterId(filter._id);
    await deleteFilter(filter);
    setDeletingFilterId(null);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md xl:max-w-fit">
        <form onSubmit={handleAddFilter} className="flex flex-col gap-5">
          <DialogHeader>
            <DialogTitle>Apply Filters</DialogTitle>
            <DialogDescription>
              Narrow down your search results by selecting specific criteria.
            </DialogDescription>
          </DialogHeader>

          <Alert className="py-2">
            <AlertDescription className="flex items-center gap-2">
              <Info className="h-4 w-4" />
              Here you get only the filters created by you.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-6 gap-1 w-full">
            {!isEmptyArray(filters) &&
              filters.map((filter: Filter) => (
                <Badge
                  key={filter._id}
                  variant="secondary"
                  className="flex items-center justify-around hover:bg-slate-200"
                >
                  {filter.title}
                  {deletingFilterId !== filter._id ? (
                    <X
                      size="10px"
                      className="cursor-pointer"
                      onClick={() => handleDeleteFilter(filter)}
                    />
                  ) : (
                    <LoaderCircle
                      key={filter._id}
                      size="10px"
                      className="animate-spin-slow"
                    />
                  )}
                </Badge>
              ))}
          </div>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                placeholder="Add your filter"
                name="title"
                value={filter.title}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <Button
              type="submit"
              variant="default"
              className="ml-auto"
              onClick={handleAddFilter}
            >
              Create
            </Button>
            <DialogClose asChild>
              <Button type="button" variant="secondary" onClick={onClose}>
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
