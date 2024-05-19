import { useNavigate } from "react-router-dom";
import { ProfileInfo } from "./profileInfo";
import { LOGIN } from "router";
import { Searchbar } from "./searchbar";
import { useState } from "react";

export const Navbar = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {};

  const onClearSearch = () => setSearchQuery("");

  const logout = () => {
    navigate(LOGIN);
  };
  return (
    <>
      <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
        <h2 className="text-xl font-medium text-black py-2">Notes</h2>

        <Searchbar
          value={searchQuery}
          onChange={({ target }) => {
            setSearchQuery(target.value);
          }}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />

        <ProfileInfo logout={logout} />
      </div>
    </>
  );
};
