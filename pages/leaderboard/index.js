import Head from 'next/head'
import React from "react";
import PlebPartyLogo from "../../components/PlebPartyLogo";
import PlaylistItem from "../../components/PlaylistItem";
import SearchResult from "../../components/SearchResult";

export default function Index() {
  const [playlist, setPlaylist] = React.useState([]);
  

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
  
  return (
    <div className="h-screen">
      <Head>
        <title>PlebFM</title>
        <meta name="description" content="placeholder screen"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className="flex flex-row">
        <div className="basis-6/12 h-screen">
          <div className="bg-none">
            <p>Add your song</p>
            <img src="pleb-fm-qr.png" alt="QR for pleb.fm" />
            <p>pleb.fm</p>
          </div>
          
          <video className="w-full h-screen object-cover" loop autoPlay muted>
            <source src="ln-jukebox-hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="basis-6/12 flex flex-col overflow-y-scroll h-screen">
          <header className="bg-gradient-to-b from-lnj-purple to-lnj-purple-dark p-4">
            <div className="max-w-md">
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