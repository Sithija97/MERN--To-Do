import { FC } from "react";
import { getInitials } from "utils/helper";

type IProps = {
  logout: () => void;
};

export const ProfileInfo: FC<IProps> = ({ logout }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
        {getInitials("Sithija Shehara")}
      </div>

      <div>
        <p className="text-sm font-medium">Sithija</p>
        <button className="text-sm underline text-slate-700" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};
