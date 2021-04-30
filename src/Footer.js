import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import FavoriteIcon from "@material-ui/icons/Favorite";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="https://upload.wikimedia.org/wikipedia/en/8/85/Adele_-_Hello_%28Official_Single_Cover%29.png"
          alt=""
        />
        <div className="footer__songInfo">
          <h4>Hello</h4>
          <p>Adele</p>
        </div>
        <div>
          <FavoriteIcon className="heart" />
          {/*      <AspectRatioIcon className="screen" /> */}
        </div>
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon
          onClick={<PauseCircleOutlineIcon />}
          //OnClick PAUSE ICON??
          fontSize="large"
          className="footer__icon"
        />

        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
