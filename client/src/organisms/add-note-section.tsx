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
import { Textarea } from "../attoms/ui/textarea";
import { Switch } from "../attoms/ui/switch";
import { CategoryDropDown } from "../molecules/category-dropdown";
import { useState } from "react";
import { useAuth, useClerk } from "@clerk/clerk-react";
import { useAddNewNoteMutation } from "../store/notes-slice";

type IProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const AddNoteSection = ({ isOpen, onClose }: IProps) => {
  const { userId } = useAuth();
  const { user } = useClerk();

  const [addNewNote] = useAddNewNoteMutation();

  const initialState = {
    title: "",
    content: "",
    category: "general",
    userId,
    userName: user?.fullName,
  };
  const [formData, setFormData] = useState(initialState);

  const isAddNoteDisabled =
    formData.title.trim() === "" || formData.content.trim() === "";

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCategoryChange = (category: string) => {
    setFormData((prevData) => ({
      ...prevData,
      category,
    }));
  };

  const handleAddNote = (
    e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (!isAddNoteDisabled) {
      addNewNote(formData);
      setFormData(initialState);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
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
                <Input
                  placeholder="Title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                />
                <CategoryDropDown
                  category={formData.category}
                  setCategory={handleCategoryChange}
                />
              </div>

              <Textarea
                className="p-4 min-h-80"
                placeholder={`Take a note...`}
                name="content"
                value={formData.content}
                onChange={handleInputChange}
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
            size="sm"
            className="ml-auto"
            type="button"
            onClick={handleAddNote}
            disabled={isAddNoteDisabled}
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
