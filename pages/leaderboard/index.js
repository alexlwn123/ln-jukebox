import Head from 'next/head'
import React from "react";
import PlebPartyLogo from "../../components/PlebPartyLogo";
import PlaylistItem from "../../components/PlaylistItem";
import SearchResult from "../../components/SearchResult";
import Button from '../../components/Button';

export default function Index() {
  const [playlist, setPlaylist] = React.useState([]);
  const [spotifyToken, setSpotifyToken] = React.useState('');
  const [showAdminTray, setShowAdminTray] = React.useState(false);

  React.useEffect( async ()=> {
    if(playlist.length === 0) {
      fetch('/api/db/song/list')
        .then(async (response) => {
          const res = await response.json()
          console.log(res)
          setPlaylist(res)
          console.log('playlist is')
          console.log(playlist)
        });
    }
    return ()=>{}
  }, [playlist]);

  function playBtn(e){
    const spotify = document.getElementById('spotify')

    let message = {
      action: 'play'
    }
    
    spotify.contentWindow.postMessage(message, '*')
    return ()=>{}
  }
  
  function addAuth(){
    const spotify = document.getElementById('spotify')
    let message = {
      action: 'addAuth',
      access_token: sessionStorage.getItem('spotify_access_token')
    }
    spotify.contentWindow.postMessage(message, '*')
  }
  
  function handleAdminBtn(){
    let hidden = showAdminTray;
    setShowAdminTray( !hidden );
  }
  
  React.useEffect(()=> {
    const spotify = document.getElementById('spotify')
    
    const isEmpty = (value) => [null, undefined, 'undefined', 'NaN', '', NaN].includes(expiry);

    // Check for outdated token
    let expiry = sessionStorage.getItem('spotify_token_expiry');
    expiry = isEmpty(expiry) ? parseInt(expiry) : expiry;
    let time = new Date();

    if (time.getTime() > expiry) {
      alert('time is ' + time.getTime() + '. expiry is ' + expiry)
      window.location = '/api/spotify/refresh_token?refresh_token=' + sessionStorage.getItem('spotify_refresh_token')
    }

    if(!isEmpty(sessionStorage.getItem('spotify_access_token'))) {
      setSpotifyToken(sessionStorage.getItem('spotify_access_token'))
    }
    return ()=>{}
  });
  
  return (
    <div className="h-screen">
      <Head>
        <title>PlebFM</title>
        <meta name="description" content="placeholder screen"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className="flex flex-row">
        <div className="basis-6/12 h-screen">
          <div className="bg-none absolute top-4 left-4 flex flex-col items-center justify-center space-y-2 w-32">
            <p className="drop-shadow-md">Add your song</p>
            <img src="pleb-fm-qr.png" alt="QR for pleb.fm" className="drop-shadow-md rounded-lg" />
            <p className="drop-shadow-md">pleb.fm</p>
          </div>
          
          <video className="w-full h-screen object-cover" loop autoPlay muted>
            <source src="ln-jukebox-hero.mp4" type="video/mp4" />
          </video>

          <iframe src="spotify-player.html" className="w-md h-md absolute bottom-0 left-0 hidden" id="spotify" />
          
          <div className="absolute bottom-2 left-2">
            {showAdminTray ?
              <div className="flex flex-row space-x-2">
                <Button text="Play" button icon="PlayIcon" onClick={playBtn} size="sm"/>
                <Button text="Auth" button icon="ArrowUpIcon" onClick={addAuth} size="sm"/>
                <Button text="Login" icon="KeyIcon" href="/api/spotify/auth/" size="sm" />
                <Button text="" button icon="ArrowLeftIcon" onClick={handleAdminBtn} size="sm" />
              </div>
            :
              <div>
                <Button text="" button icon="ArrowRightIcon" onClick={handleAdminBtn} size="xs" />
              </div>
            }
          </div>
          
        </div>
        
        <div className="basis-6/12 flex flex-col overflow-y-scroll h-screen">
          <header className="bg-gradient-to-b from-lnj-purple to-lnj-purple-dark p-4">
            <div className="max-w-[200px]">
              <PlebPartyLogo />
            </div>
          </header>
          
          {playlist.length > 0 ?
            playlist.map((entry, index) => {
              let [artist, song] = entry.songName.split('_');
              artist = artist.replaceAll('-', ' ');
              song = song.replaceAll('-', ' ')||song;
              return <PlaylistItem key={index} artist={artist} song={song} album={entry.album}
                                   id={entry.id} amount={entry.amount}/>
            })
          :''}
        </div>
      </main>
    </div>
  )
}