import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";

import AddBoxIcon from "@material-ui/icons/AddBox";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://www.theprp.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} title="Home" />

      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <div className="gap"></div>
      <SidebarOption Icon={AddBoxIcon} title="Create Playlist" />
      <SidebarOption Icon={FavoriteBorderIcon} title="Liked Songs" />

      <hr />
      {/* draw a line */}

      {/* 2:58:58 */}
      {/*  JSX lets you write code inside {} */}
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
      {/*       ? is optional chaining incase the playlists was empyty  */}
    </div>
  );
}

export default Sidebar;
