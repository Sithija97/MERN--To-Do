import { ComponentProps } from "react";
import { ActiveIcon } from "../atoms/ui/active-icon";
import { Badge } from "../atoms/ui/badge";
import { cn } from "../lib/utils";
import { Filter, Note } from "../types";
import { formatDistanceToNow } from "date-fns";

type IProps = {
  item: Note;
  note: Note;
  setSelectedMail: (item: Note) => void;
};
export const NoteCard = ({ item, note, setSelectedMail }: IProps) => {
  return (
    <button
      key={item._id}
      className={cn(
        "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent bg-white",
        note._id === item._id && "bg-muted"
      )}
      onClick={() => setSelectedMail(item)}
    >
      <div className="flex w-full flex-col gap-1">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <div className="font-semibold">{item.title}</div>
            <ActiveIcon item={item} />
          </div>
          <div
            className={cn(
              "ml-auto text-xs",
              note._id === item._id
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            {formatDistanceToNow(new Date(item.updatedAt), {
              addSuffix: true,
            })}
          </div>
        </div>
        <div className="text-xs font-medium">{`by ${item.userName}`}</div>
      </div>
      <div className="line-clamp-2 text-xs text-muted-foreground">
        {item.content.substring(0, 300)}
      </div>
      {item.filters.length ? (
        <div className="grid grid-cols-8 gap-2">
          {item.filters.map((label: Filter) => (
            <Badge
              key={label._id}
              variant={getBadgeVariantFromLabel(label.title.toLowerCase())}
              className="w-fit"
            >
              {label.title.toLowerCase()}
            </Badge>
          ))}
        </div>
      ) : null}
    </button>
  );
};

function getBadgeVariantFromLabel(
  label: string
): ComponentProps<typeof Badge>["variant"] {
  if (["work"].includes(label.toLowerCase())) {
    return "default";
  }

  if (["personal"].includes(label.toLowerCase())) {
    return "outline";
  }

  return "secondary";
}
