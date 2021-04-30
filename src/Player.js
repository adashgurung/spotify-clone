import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
        {/* pass spotify into the body */}
      </div>
      <Footer />
    </div>
  );
}

export default Player;
