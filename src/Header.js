import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";
import Select from "react-select";

function Header() {
  const [{ user }, dispatch] = useDataLayerValue(); //pull information//dispatch

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />

        <input
          placeholder="Search for Artists, Songs, or Podcasts"
          type="text"
        />
      </div>

      <div className="header__right">
        {/* pulling user image and name */}
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />

        <h4>{user?.display_name}</h4>
        {/*  <Select /> */}
      </div>
    </div>
  );
}

export default Header;
