export const AddEditNotes = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <label className="input-label">title</label>
        <input
          type="text"
          placeholder="Complete Notes App Development"
          className="text-2xl text-slate-950 outline-none"
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">content</label>
        <textarea
          rows={10}
          placeholder="Content"
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
        ></textarea>
      </div>

      <div className="mt-3">
        <label className="input-label">tags</label>
      </div>
    </div>
  );
};
