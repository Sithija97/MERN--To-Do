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
import { BaseTypes } from "../enums";
import { useState } from "react";

type NoteDisplayProps = {
  note: Note;
};

export const NoteDisplay = ({ note }: NoteDisplayProps) => {
  const today = new Date();

  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const handleDeleteModal = () => setIsOpenDelete(!isOpenDelete);

  return (
    <>
      <div className="flex h-full w-full flex-col">
        <div className="flex items-center p-2">
          <TooltipProvider>
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" disabled={!note}>
                    <Archive className="h-4 w-4" />
                    <span className="sr-only">Archive</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Archive</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" disabled={!note}>
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
                  <Button variant="ghost" size="icon" disabled={!note}>
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
                    <div className="flex flex-col gap-2 border-r px-2 py-4">
                      <div className="px-4 text-sm font-medium">
                        Snooze until
                      </div>
                      <div className="grid min-w-[250px] gap-1">
                        <Button
                          variant="ghost"
                          className="justify-start font-normal"
                        >
                          Later today{" "}
                          <span className="ml-auto text-muted-foreground">
                            {format(addHours(today, 4), "E, h:m b")}
                          </span>
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start font-normal"
                        >
                          Tomorrow
                          <span className="ml-auto text-muted-foreground">
                            {format(addDays(today, 1), "E, h:m b")}
                          </span>
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start font-normal"
                        >
                          This weekend
                          <span className="ml-auto text-muted-foreground">
                            {format(nextSaturday(today), "E, h:m b")}
                          </span>
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start font-normal"
                        >
                          Next week
                          <span className="ml-auto text-muted-foreground">
                            {format(addDays(today, 7), "E, h:m b")}
                          </span>
                        </Button>
                      </div>
                    </div>
                    <div className="p-2">
                      <Calendar />
                    </div>
                  </PopoverContent>
                </Popover>
                <TooltipContent>Snooze</TooltipContent>
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
            {/* <Separator className="mt-auto" /> */}
            {/* <div className="p-4">
            <form>
              <div className="grid gap-4">
                <Textarea
                  className="p-4 min-h-80"
                  placeholder={`Reply ${mail.name}...`}
                />
                <div className="flex items-center">
                  <Label
                    htmlFor="mute"
                    className="flex items-center gap-2 text-xs font-normal"
                  >
                    <Switch id="mute" aria-label="Mute thread" /> Mute this
                    thread
                  </Label>
                  <Button
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                    className="ml-auto"
                  >
                    Add Note
                  </Button>
                </div>
              </div>
            </form>
          </div> */}
          </div>
        ) : (
          <div className="p-8 text-center text-muted-foreground">
            No message selected
          </div>
        )}
      </div>
      <DeleteModal
        isOpen={isOpenDelete}
        type={BaseTypes.NOTE}
        onClose={handleDeleteModal}
      />
    </>
  );
};
