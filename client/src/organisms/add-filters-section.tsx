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

type IProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const AddFiltersSection = ({ isOpen, onClose }: IProps) => {
  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-md" onClick={onClose}>
        <DialogHeader>
          <DialogTitle>Apply Filters</DialogTitle>
          <DialogDescription>
            Narrow down your search results by selecting specific criteria.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" placeholder="Add your category" />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <Button
            type="button"
            variant="default"
            className="ml-auto"
            onClick={onClose}
          >
            Add
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary" onClick={onClose}>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
