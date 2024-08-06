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
import {
  useAddNewNoteMutation,
  useUpdateNoteMutation,
} from "../store/notes-slice";
import { AddNoteModalType } from "../enums";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import { setNote } from "../store/base-slice";
import { format } from "date-fns";
import { toast } from "../attoms/ui/use-toast";

type IProps = {
  type?: AddNoteModalType;
  isOpen: boolean;
  onClose: () => void;
};

export const AddNoteSection = ({
  type = AddNoteModalType.NEW,
  isOpen,
  onClose,
}: IProps) => {
  const { userId } = useAuth();
  const { user } = useClerk();

  const dispatch = useAppDispatch();
  const [addNewNote] = useAddNewNoteMutation();
  const [updateNote] = useUpdateNoteMutation();

  const { selectedNote } = useAppSelector(
    (state: RootState) => state.baseState
  );

  const initialState = {
    title: type === AddNoteModalType.EDIT ? selectedNote.title : "",
    content: type === AddNoteModalType.EDIT ? selectedNote.content : "",
    category:
      type === AddNoteModalType.EDIT
        ? selectedNote.categoryId.title.toLowerCase()
        : "general",
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
      toast({
        title: "Note has been successfully created.",
        description: format(new Date(), "EEEE, MMMM do, yyyy 'at' h:mm a"),
      });
      onClose();
    }
  };

  const handleUpdateNote = (
    e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (!isAddNoteDisabled) {
      const updatedNote = {
        ...selectedNote,
        title: formData.title,
        content: formData.content,
        category: formData.category,
      };

      updateNote(updatedNote);
      dispatch(setNote(updatedNote));
      setFormData(initialState);
      toast({
        title: "Note has been successfully updated.",
        description: format(new Date(), "EEEE, MMMM do, yyyy 'at' h:mm a"),
      });
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md md:max-w-3xl">
        <DialogHeader>
          <DialogTitle>{`${
            type === AddNoteModalType.NEW ? "Add" : "Edit"
          } Note`}</DialogTitle>
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
          {type === AddNoteModalType.EDIT ? (
            <Button
              size="sm"
              className="ml-auto"
              type="button"
              onClick={handleUpdateNote}
              disabled={isAddNoteDisabled}
            >
              Update Note
            </Button>
          ) : (
            <Button
              size="sm"
              className="ml-auto"
              type="button"
              onClick={handleAddNote}
              disabled={isAddNoteDisabled}
            >
              Add Note
            </Button>
          )}
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
