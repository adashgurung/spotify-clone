import React from "react";
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import SongRow from "./SongRow";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue(); //pull information//dispatch

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong> PLAYLIST </strong>
          <h1>Discover Weekly</h1>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      {/*  <hr /> */}

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />

          <FavoriteIcon fontSize="large" className="favouriteIcon" />

          <MoreHorizIcon className="moreHorizonIcon" />
        </div>

        <hr />

        {/* pull list of songs from using spotify api*/}
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
