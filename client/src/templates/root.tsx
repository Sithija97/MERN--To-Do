import { cn } from "../lib/utils";
import { NotesSection, SideNavBar } from "../organisms";
import img from "../assets/Emails-rafiki.svg";
import { MailDisplay } from "../molecules/mail-display";
import { mails } from "../data";
import useMail from "../utils";

export const RootLayout = () => {
  const [mail] = useMail();
  const isEmpty = mails.length === 0;
  return (
    <section className={cn("h-full w-full flex")}>
      {/* sidebar */}
      <div className=" bg-slate-800">
        <SideNavBar />
      </div>

      {/* main page */}
      <div className="w-full h-full">
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
              <MailDisplay
                mail={mails.find((item) => item.id === mail.selected) || null}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
