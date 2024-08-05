import { NoteDisplay, NotesSection } from "../organisms";
import { isEmptyString } from "../utils";
import { useAppSelector } from "../store/store";
import { selectedNote } from "../store/base-slice";
import img from "../assets/Emails-rafiki.svg";

export const Home = () => {
  const note = useAppSelector(selectedNote);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="h-screen w-auto border-r bg-slate-50">
        {/* <Outlet /> add note section - molecule*/}
        <NotesSection />
      </div>
      <div className="w-full col-span-2 flex items-center justify-center">
        {isEmptyString(note._id) ? (
          <img
            src={img}
            alt="bg-image"
            className="h-[50%] w-[50%] rounded-full opacity-90"
          />
        ) : (
          <NoteDisplay note={note} />
        )}
      </div>
    </div>
  );
};
