//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
//upon clicking on login it redirect to spotify login page and redirects back to hope page

// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "2edf536b880441b995b69e9960c325ee";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
//1:02:00 read again// this code is pulling access token back
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1) //chopping string
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

//50:00... back ticks `` allows javasrcipt and string called string manipulation
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
