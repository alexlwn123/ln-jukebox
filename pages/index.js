import Head from 'next/head';
// import { requestInvoice } from '../serviceRequests/Voltage'
import { MusicNoteIcon } from '@heroicons/react/outline';
import PlebPartyLogo from '../components/PlebPartyLogo';
import React from "react";
import styles from '../styles/Home.module.scss'
import InputText from "../components/InputText";
import SearchResult from "../components/SearchResult";
import Button from "../components/Button";
import {useRouter} from 'next/router';

export default function Home() {
  const [searchActive, setSearchActive] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState([]);
  const [spotifyToken, setSpotifyToken] = React.useState('');
  const {query} = useRouter();
  
  React.useEffect(()=>{
    // Check for auth data in query params
    if(query.auth_result) {
      let json = JSON.parse(query.auth_result)
      sessionStorage.setItem('spotify_access_token', json.access_token)
      sessionStorage.setItem('spotify_refresh_token', json.refresh_token)
      let time = new Date();
      let expiry = new Date(((time.getTime()/1000) + json.expires_in)*1000);
      sessionStorage.setItem('spotify_token_expiry', expiry.getTime())
    }
    
    const isEmpty = (value) => [null, undefined, 'undefined', 'NaN', '', NaN].includes(expiry);

    // Check for outdated token
    let expiry = sessionStorage.getItem('spotify_token_expiry');
    expiry = isEmpty(expiry) ? parseInt(expiry) : expiry;
    let time = new Date();
    
    if(time.getTime() > expiry) {
      window.location = '/api/spotify/refresh_token?refresh_token=' + sessionStorage.getItem('spotify_refresh_token')
    }
    
    if( !isEmpty(sessionStorage.getItem('spotify_access_token')) ) setSpotifyToken(sessionStorage.getItem('spotify_access_token'))
  });
  
  
  function handleSearchChange(e){
    if(e.length > 0) setSearchActive(true)
    else setSearchActive(false)
    
    if(e.length > 2) {
      fetch("/api/spotify/search?q=" + e + "&access_token=" + spotifyToken)
        .then(response => response.text())
        .then(async (result) => {
          const resp = await result;
          setSearchResults(await JSON.parse(resp));
        })
        .catch(error => {
          console.log('error', error)
        });
    }
  }
  
  return (
    <div className="h-screen">
      <Head>
        <title>PlebFM</title>
        <meta name="description" content="placeholder screen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={ !searchActive ? styles.main : styles.searchActive }>
          <PlebPartyLogo className="w-full" />

          {!spotifyToken ?
            <Button text="Spotify Login" icon="KeyIcon" href="/api/spotify/auth/" />
            :
            <div className="space-y-2">
              <label className="uppercase tracking-widest text-white text-xs">Search for a Song</label>

              <InputText
                placeholder="Bitcoin Killed the Fiat Star&hellip;"
                parentCallback={handleSearchChange}
              />
            </div>
          }
  
          {!searchActive ?
          <ol className="list-decimal text-white space-y-4 ml-4">
            <li>Select your song</li>
            <li>Pay for it with bitcoin</li>
            <li>Outbid other plebs to send your song to the top of the queue</li>
          </ol>
          : ''}
  
          {!searchActive ?
          <Button text="Song Queue" icon="MusicNoteIcon" href="/leaderboard" />
          : ''}
        </div>

        {searchActive && searchResults && searchResults.tracks && searchResults.tracks.items ?
        <div>
          {searchResults.tracks.items.map((result, index) => {
            return <SearchResult key={index} artist={result.artists[0].name} song={result.name} album={result.album.name} id={result.id} songUri={result.uri} songFullName={result.name + " - " + result.artists[0].name} />
          })}
        </div>
        : ''}
      </main>
    </div>
  )
}
