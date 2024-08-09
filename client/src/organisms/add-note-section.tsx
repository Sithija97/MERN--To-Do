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
import { useEffect, useState } from "react";
import { useAuth, useClerk } from "@clerk/clerk-react";
import {
  useAddNewNoteMutation,
  useUpdateNoteMutation,
} from "../store/notes-slice";
import { AddNoteModalType } from "../enums";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import { clearNote } from "../store/base-slice";
import { format } from "date-fns";
import { toast } from "../attoms/ui/use-toast";
import { useGetFiltersQuery } from "../store/filter-slice";
import { ToggleGroup, ToggleGroupItem } from "../attoms/ui/toggle-group";
import { Filter } from "../types";

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
  const { data: filters } = useGetFiltersQuery({});

  const { selectedNote } = useAppSelector(
    (state: RootState) => state.baseState
  );

  type IState = {
    title: string;
    content: string;
    categoryId: string;
    userId: string | null | undefined;
    userName: string | null | undefined;
    filters: string[] | any;
  };

  const initialState: IState = {
    title: "",
    content: "",
    categoryId: "66b111f33123378832c2a3b2",
    userId,
    userName: user?.fullName,
    filters: [],
  };

  const [formData, setFormData] = useState(initialState);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    setFormData({
      title: type === AddNoteModalType.EDIT ? selectedNote.title : "",
      content: type === AddNoteModalType.EDIT ? selectedNote.content : "",
      categoryId:
        type === AddNoteModalType.EDIT
          ? selectedNote.categoryId._id
          : "66b111f33123378832c2a3b2",
      userId,
      userName: user?.fullName,
      filters:
        type === AddNoteModalType.EDIT
          ? selectedNote.filters.map((filter) => filter._id)
          : [],
    });

    return () => {
      setFormData(initialState);
    };
  }, [selectedNote._id]);

  const handleToggle = () => {
    setIsChecked((prevState) => !prevState);
  };

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

  const handleCategoryChange = (categoryId: string) => {
    setFormData((prevData) => ({
      ...prevData,
      categoryId,
    }));
  };

  const handleToggleGroupChange = (value: string[]) => {
    setFormData((prevData) => ({
      ...prevData,
      filters: value,
    }));
  };

  const handleAddNote = async (
    e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (!isAddNoteDisabled) {
      await addNewNote(formData);
      dispatch(clearNote());
      setFormData(initialState);
      toast({
        title: "Note has been successfully created.",
        description: format(new Date(), "EEEE, MMMM do, yyyy 'at' h:mm a"),
        duration: 1500,
      });
      setIsChecked(false);
      onClose();
    }
  };

  const handleUpdateNote = async (
    e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (!isAddNoteDisabled) {
      const updatedNote = {
        ...selectedNote,
        title: formData.title,
        content: formData.content,
        categoryId: formData.categoryId,
        filters: formData.filters,
      };

      await updateNote(updatedNote);
      dispatch(clearNote());
      toast({
        title: "Note has been successfully updated.",
        description: format(new Date(), "EEEE, MMMM do, yyyy 'at' h:mm a"),
        duration: 1500,
      });
      setIsChecked(false);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md xl:max-w-fit min-w-[700px] max-h-[600px]">
        <DialogHeader>
          <DialogTitle>{`${
            type === AddNoteModalType.NEW ? "Add" : "Edit"
          } Note`}</DialogTitle>
          <DialogDescription>
            Quickly jot down your thoughts and ideas for easy reference.
          </DialogDescription>
        </DialogHeader>
        <div className="p-4">
          <div className="grid gap-4 overflow-y-auto">
            <div className="flex items-center gap-2">
              <Input
                placeholder="Title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
              <CategoryDropDown
                category={formData.categoryId}
                setCategory={handleCategoryChange}
              />
            </div>

            <Textarea
              className="p-4 min-h-60"
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
                <Switch
                  id="mute"
                  aria-label="Mute thread"
                  checked={isChecked}
                  onCheckedChange={handleToggle}
                />
                Add filters to the note
              </Label>
            </div>

            {isChecked && (
              <ToggleGroup
                type="multiple"
                value={formData.filters}
                onValueChange={handleToggleGroupChange}
              >
                {filters.map((filter: Filter) => (
                  <ToggleGroupItem
                    key={filter._id}
                    value={filter._id}
                    aria-label="Toggle bold"
                    className="px-2 h-6"
                    aria-pressed={formData.filters.includes(filter._id)}
                  >
                    {filter.title}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            )}
          </div>
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
