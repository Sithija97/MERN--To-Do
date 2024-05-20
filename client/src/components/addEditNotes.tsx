import { FC, useState } from "react";
import { TagInput } from "./tagInput";
import { MdClose } from "react-icons/md";

type IProps = {
  // noteData
  type: string;
  close: () => void;
};
export const AddEditNotes: FC<IProps> = ({ type, close }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const addNewNote = async () => {};

  const editNote = async () => {};

  const handleAddNote = () => {
    if (!title) {
      setError("Please enter the title");
      return;
    }

    if (!content) {
      setError("Please enter the content");
      return;
    }

    setError("");

    if (type === "edit") {
      editNote();
    } else {
      addNewNote();
    }
  };

  return (
    <div className="relative">
      <button
        className="w-10 h-10 rounded-md flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50"
        onClick={close}
      >
        <MdClose className="text-xl text-slate-400" />
      </button>

      <div className="flex flex-col gap-2">
        <label className="input-label">title</label>
        <input
          type="text"
          placeholder="Complete Notes App Development"
          className="text-2xl text-slate-950 outline-none"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">content</label>
        <textarea
          rows={10}
          placeholder="Content"
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
          value={content}
          onChange={({ target }) => setContent(target.value)}
        ></textarea>
      </div>

      <div className="mt-3">
        <label className="input-label">tags</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>

      {error && <p className="text-red-500 text-xs pt-4">{error}</p>}

      <button
        className="btn-primary font-medium mt-5 p-3"
        onClick={handleAddNote}
      >
        Add
      </button>
    </div>
  );
};
