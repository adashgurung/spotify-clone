export const initialState = {
  // this is just empty data layer initial state
  user: null,
  playlists: [],
  playing: false,
  item: null, // what song are you listening to
  //token: null,
  //remove after finish developing
  /* token:
    "BQDsKHKpwqidaWM9jecndwdtTwHeg5CjxTT0d_qtzk9mnPK1csQWizrPmNzqts0QK58lcyAYRU_o4WotQsHXOYjH3cwWoHiodWLWf1TOtjCfBxRS-ztnZUl4i2EsLm1KGmO2kq-0CVO40LXHwx42jNf5qpoN", */
  spotify: null,
  discover_weekly: null,
  top_artists: null,
};

const reducer = (state, action) => {
  console.log(action);

  //1:55:30
  //Action got dispatched and has 2 things (type, [payload])can be dynamic
  //in this case type of action is set_user and payload is action.user
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state, //return whatevera the current state was + change the playlist to usersplaylists
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    default:
      return state; // always default return state
  }
};
export default reducer;
