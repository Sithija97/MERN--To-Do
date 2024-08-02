import { MailDisplay, NotesSection } from "../organisms";
// import useMail from "../utils";
import { mails } from "../data/mails";
import img from "../assets/Emails-rafiki.svg";

export const Home = () => {
  // const [mail] = useMail();
  const isEmpty = mails.length === 0;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="h-screen w-auto border-r bg-slate-50">
        {/* <Outlet /> add note section - molecule*/}
        <NotesSection />
      </div>
      <div className="w-full col-span-2 flex items-center justify-center">
        {isEmpty ? (
          <img
            src={img}
            alt="bg-image"
            className="h-[50%] w-[50%] rounded-full opacity-90"
          />
        ) : (
          // <MailDisplay
          //   mail={mails.find((item) => item.id === mail.selected) || null}
          // />
          <p></p>
        )}
      </div>
    </div>
  );
};
