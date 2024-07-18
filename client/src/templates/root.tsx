import { cn } from "../lib/utils";
import { NotesSection, SideNavBar } from "../organisms";
import img from "../assets/Emails-rafiki.svg";

export const RootLayout = () => {
  return (
    <section className={cn("min-h-screen w-full flex")}>
      {/* sidebar */}
      <div className=" bg-slate-800">
        <SideNavBar />
      </div>

      {/* main page */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="h-screen border-r bg-slate-50">
            {/* <Outlet /> add note section - molecule*/}
            <NotesSection />
          </div>
          <div className="w-full col-span-2 flex items-center justify-center">
            <img
              src={img}
              alt="bg-image"
              className="h-[50%] w-[50%] rounded-full opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
