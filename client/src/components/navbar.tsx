import { useNavigate } from "react-router-dom";
import { ProfileInfo } from "./profileInfo";
import { LOGIN } from "router";
import { Searchbar } from "./searchbar";

export const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate(LOGIN);
  };
  return (
    <>
      <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
        <h2 className="text-xl font-medium text-black py-2">Notes</h2>

        <Searchbar />

        <ProfileInfo logout={logout} />
      </div>
    </>
  );
};
