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
import { Textarea } from "../attoms/ui/textarea";
import { Switch } from "../attoms/ui/switch";
import { CategoryDropDown } from "./category-dropdown";

type IProps = {
  triggerButtonContent?: React.ReactNode;
};

export const AddNoteSection = ({ triggerButtonContent }: IProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {triggerButtonContent || <Button variant="outline">Open</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md md:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Add Note</DialogTitle>
          <DialogDescription>
            Quickly jot down your thoughts and ideas for easy reference.
          </DialogDescription>
        </DialogHeader>
        <div className="p-4">
          <form>
            <div className="grid gap-4">
              <div className="flex items-center gap-2">
                <Input placeholder="Title" />
                <CategoryDropDown />
              </div>

              <Textarea
                className="p-4 min-h-80"
                placeholder={`Take a note...`}
              />

              <div className="flex items-center">
                <Label
                  htmlFor="mute"
                  className="flex items-center gap-2 text-xs font-normal"
                >
                  <Switch id="mute" aria-label="Mute thread" /> Mute this thread
                </Label>
              </div>
            </div>
          </form>
        </div>
        <DialogFooter className="sm:justify-start flex items-center">
          <Button
            onClick={(e) => e.preventDefault()}
            size="sm"
            className="ml-auto"
          >
            Add Note
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
