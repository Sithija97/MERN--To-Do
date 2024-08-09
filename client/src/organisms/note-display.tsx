import {
  Archive,
  Clock,
  FilePenLine,
  Forward,
  MoreVertical,
  Reply,
  ReplyAll,
  Trash,
  Trash2,
} from "lucide-react";
import { Separator } from "../attoms/ui/separator";
import { Popover, PopoverContent, PopoverTrigger } from "../attoms/ui/popover";
import { addDays, addHours, format, nextSaturday } from "date-fns";
import { Calendar } from "../attoms/ui/calendar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../attoms/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../attoms/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "../attoms/ui/tooltip";
import { Button } from "../attoms/ui/button";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Note } from "../types";
import { DeleteModal } from "./delete-modal";
import { AddNoteModalType, BaseTypes } from "../enums";
import { useState } from "react";
import { useUpdateNoteMutation } from "../store/notes-slice";
import { RootState, useAppSelector } from "../store/store";
import { AddNoteSection } from "./add-note-section";
import { toast } from "../attoms/ui/use-toast";
import { Input } from "../attoms/ui/input";

type NoteDisplayProps = {
  note: Note;
};

export const NoteDisplay = ({ note }: NoteDisplayProps) => {
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenEditNote, setIsOpenEditNote] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [updateNote] = useUpdateNoteMutation();

  const { selectedNote } = useAppSelector(
    (state: RootState) => state.baseState
  );

  const handleAddNoteModal = () => setIsOpenEditNote(!isOpenEditNote);
  const handleDeleteModal = () => setIsOpenDelete(!isOpenDelete);

  const handleArchiveNote = async () => {
    await updateNote({ ...selectedNote, isTrashed: false, hasArchived: true });
    toast({
      title: "This note has been moved to archived notes",
      description: format(new Date(), "EEEE, MMMM do, yyyy 'at' h:mm a"),
      duration: 1500,
    });
  };

  const handleTrashNote = async () => {
    await updateNote({ ...selectedNote, isTrashed: true, hasArchived: false });
    toast({
      title: "This note has been moved to trash",
      description: format(new Date(), "EEEE, MMMM do, yyyy 'at' h:mm a"),
      duration: 1500,
    });
  };

  return (
    <>
      <div className="flex h-full w-full flex-col">
        <div className="flex items-center p-2">
          <TooltipProvider>
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    disabled={!note}
                    onClick={handleArchiveNote}
                  >
                    <Archive className="h-4 w-4" />
                    <span className="sr-only">Archive</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Archive</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    disabled={!note}
                    onClick={handleTrashNote}
                  >
                    <Trash className="h-4 w-4" />
                    <span className="sr-only">Move to trash</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Move to trash</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    disabled={!note}
                    onClick={handleDeleteModal}
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete permanently</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Delete permanently</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    disabled={!note}
                    onClick={handleAddNoteModal}
                  >
                    <FilePenLine className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Edit</TooltipContent>
              </Tooltip>
              <Separator orientation="vertical" className="mx-1 h-6" />
              <Tooltip>
                <Popover>
                  <PopoverTrigger asChild>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" disabled={!note}>
                        <Clock className="h-4 w-4" />
                        <span className="sr-only">Snooze</span>
                      </Button>
                    </TooltipTrigger>
                  </PopoverTrigger>
                  <PopoverContent className="flex w-auto p-0">
                    <div className="p-2">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                      />
                      <div className="px-4 text-sm font-medium">
                        Snooze time
                      </div>
                      <Input type="time" />
                      <Button variant={"ghost"} className="w-full mt-2">
                        Set Reminder
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
                <TooltipContent>Set Reminder</TooltipContent>
              </Tooltip>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" disabled={!note}>
                    <Reply className="h-4 w-4" />
                    <span className="sr-only">Reply</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Reply</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" disabled={!note}>
                    <ReplyAll className="h-4 w-4" />
                    <span className="sr-only">Reply all</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Reply all</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" disabled={!note}>
                    <Forward className="h-4 w-4" />
                    <span className="sr-only">Forward</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Forward</TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
          <Separator orientation="vertical" className="mx-2 h-6" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" disabled={!note}>
                <MoreVertical className="h-4 w-4" />
                <span className="sr-only">More</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Mark as unread</DropdownMenuItem>
              <DropdownMenuItem>Star thread</DropdownMenuItem>
              <DropdownMenuItem>Add label</DropdownMenuItem>
              <DropdownMenuItem>Mute thread</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Separator />
        {note ? (
          <div className="flex flex-1 flex-col">
            <div className="flex items-start p-4">
              <div className="flex items-start gap-4 text-sm">
                <Avatar>
                  <AvatarImage alt={note.userName} />
                  <AvatarFallback>
                    {note.userName
                      .split(" ")
                      .map((chunk) => chunk[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="font-semibold">{note.title}</div>
                  <div className="line-clamp-1 text-xs">{`Category : ${note.categoryId?.title}`}</div>
                  {/* <div className="line-clamp-1 text-xs">
                  <span className="font-medium">Reply-To:</span> {mail.email}
                </div> */}
                </div>
              </div>
              {note.updatedAt && (
                <div className="ml-auto text-xs text-muted-foreground">
                  {format(new Date(note.updatedAt), "PPpp")}
                </div>
              )}
            </div>
            <Separator />
            <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
              {note.content}
            </div>
          </div>
        ) : (
          <div className="p-8 text-center text-muted-foreground">
            No message selected
          </div>
        )}
      </div>

      <AddNoteSection
        type={AddNoteModalType.EDIT}
        isOpen={isOpenEditNote}
        onClose={handleAddNoteModal}
      />

      <DeleteModal
        isOpen={isOpenDelete}
        type={BaseTypes.NOTE}
        onClose={handleDeleteModal}
      />
    </>
  );
};
