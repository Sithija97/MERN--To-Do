import { Note } from "../../types";

type IProps = {
  item: Note;
};

export const ActiveIcon = ({ item }: IProps) => {
  const generateColor = (item: Note) => {
    if (item.isTrashed) {
      return "bg-red-500";
    } else if (item.hasArchived) {
      return "bg-yellow-400";
    } else if (item.hasReminder) {
      return "bg-green-400";
    } else {
      return "bg-blue-600";
    }
  };
  return (
    <span className={`flex h-2 w-2 rounded-full ${generateColor(item)}`} />
  );
};
