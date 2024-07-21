import { Button } from "../attoms/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../attoms/ui/dialog";
import { Input } from "../attoms/ui/input";
import { Label } from "../attoms/ui/label";

type IProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const AddCategorySection = ({ isOpen, onClose }: IProps) => {
  return (
    <Dialog open={isOpen}>
      {/* <DialogTrigger asChild>{isOpen}</DialogTrigger> */}
      <DialogContent className="sm:max-w-md" onClick={onClose}>
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              className="ml-auto"
              onClick={onClose}
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
