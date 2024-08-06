import { useEffect } from "react";
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
import { BaseTypes } from "../enums";
import { useDeleteNoteMutation } from "../store/notes-slice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { clearNote } from "../store/base-slice";

type IProps = {
  isOpen: boolean;
  type: BaseTypes;
  onClose: () => void;
};

export const DeleteModal = ({ isOpen, type, onClose }: IProps) => {
  const dispatch = useAppDispatch();
  const { selectedNote } = useAppSelector((state) => state.baseState);
  const [deleteNote] = useDeleteNoteMutation();

  const handleDeleteNote = () => {
    dispatch(clearNote());
    deleteNote(selectedNote);
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-md" onClick={onClose}>
        <DialogHeader>
          <DialogTitle>{`Delete ${type}`}</DialogTitle>
          <DialogDescription>
            {`Are you sure to delete this ${type} permanently?`}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="sm:justify-start">
          <Button
            type="button"
            variant="destructive"
            className="ml-auto"
            onClick={handleDeleteNote}
          >
            Delete
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
