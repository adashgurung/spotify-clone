import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi(); //use for spotifywebapi

function App() {
  //2:05:00
  const [{ user, token }, dispatch] = useDataLayerValue(); //pull information//dispatch
  //State is short term memory store if refreshed we loose value
  //const [token, setToken] = useState(null);

  //useEffect hook
  //1:12:00
  useEffect(() => {
    //useEffect run code based on given condition
    const hash = getTokenFromUrl();
    window.location.hash = ""; //for security reason. to remove the access token
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      // setToken(_token);
      spotify.setAccessToken(_token); //gives access token to spotify-web-api which allows to spotify to communicate with react
      //setAccessToken(_token) puts the key inside spotify api

      spotify.getMe().then((user) => {
        //GET USER
        //console.log("👨🏻‍💻", user);//
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          //GET USER PLAYLISTS
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      //GETTING DISCOVER WEEKLY INFO
      spotify.getPlaylist("37i9dQZEVXcOWSxRtqCC0w").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }

    //console.log("i have the token 🙋🏻‍♂️ ", token);
  }, []); //leave [] empty if we want it to run once
  //if some variable inside [name, age] run once aswell as when the variable inside [] changes

  //console.log("👨🏻‍💻", user);
  //console.log("I have the tokennnnn 🙋🏻‍♂️ ", token);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
      {/* JSX javascript inside return 
    if there is token available render the <Player/> (this is : turnery operator) else render <Login/> page */}
    </div>
  );
}

export default App;
