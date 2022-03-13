import { WebPlayback } from "../components/spotify_player";
import qs from 'qs';
import axios from 'axios';
import { getTopTracks } from '../lib/spotify';
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";


// export const getServerSideProps = async (context) => {
//   var clientId = '11c8f8b9406d4ced992462b21ad42e02';
//   var clientSecret = '9ac97717ceb74c0a903a6ca9c388e70e';

//   const headers = {
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     auth: {
//       username: clientId,
//       password: clientSecret,
//     },
//   };
//   const data = {
//     grant_type: 'client_credentials',
//   };

//   const spotify = await axios.post(
//     'https://accounts.spotify.com/api/token',
//     qs.stringify(data),
//     headers
//   ).then(response => {
//     return response.data;
//   })
//   return {
//     props: {
//       token: spotify
//     }
//   }

// }
const tracks = [
  {
    url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
    title: "Madza - Chords of Life",
    tags: ["house"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
    title: "Madza - Late Night Drive",
    tags: ["dnb"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
    title: "Madza - Persistence",
    tags: ["dubstep"],
  },
];
export default function Auction() {
  return (
    <div>
      <Player trackList={tracks} />
      {/* <WebPlayback token={token} /> */}
    </div>  )
}
