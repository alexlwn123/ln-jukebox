import Head from 'next/head'
import React from "react";
import PlebPartyLogo from "../../components/PlebPartyLogo";
import PlaylistItem from "../../components/PlaylistItem";
import SearchResult from "../../components/SearchResult";

export default function Index() {
  const [playlist, setPlaylist] = React.useState([]);

  function updatePlaylist(){
    setPlaylist([
      {
        artist: 'Rage Against the Machine',
        song: 'Freedom',
        album: 'Rage Against the Machine',
        id: 'xxxx-xxxx-xxxx-xxxx',
        amount: 2000
      },
      {
        artist: 'Rage Against the Machine',
        song: 'Freedom (Live in Mexico City)',
        album: 'Rage Against the Machine Live',
        id: 'xxxx-xxxx-xxxx-xxxx',
        amount: 1500
      },
      {
        artist: 'Zac Brown Band',
        song: 'Free',
        album: 'Zac Brown Does America',
        id: 'xxxx-xxxx-xxxx-xxxx',
        amount: 989
      },
      {
        artist: 'D-Steez',
        song: 'Free',
        album: 'Sick album title',
        id: 'xxxx-xxxx-xxxx-xxxx',
        amount: 600
      },
      {
        artist: 'H.E.R.',
        song: 'Free',
        album: "(It's a spoof of H.I.M, I think, but not sure)",
        id: 'xxxx-xxxx-xxxx-xxxx',
        amount: 580
      },
      {
        artist: 'H.E.R.',
        song: 'Free',
        album: "(It's a spoof of H.I.M, I think, but not sure)",
        id: 'xxxx-xxxx-xxxx-xxxx',
        amount: 400
      },
      {
        artist: 'H.E.R.',
        song: 'Free',
        album: "(It's a spoof of H.I.M, I think, but not sure)",
        id: 'xxxx-xxxx-xxxx-xxxx',
        amount: 200
      },
      {
        artist: 'H.E.R.',
        song: 'Free',
        album: "(It's a spoof of H.I.M, I think, but not sure)",
        id: 'xxxx-xxxx-xxxx-xxxx',
        amount: 200
      },
      {
        artist: 'H.E.R.',
        song: 'Free',
        album: "(It's a spoof of H.I.M, I think, but not sure)",
        id: 'xxxx-xxxx-xxxx-xxxx',
        amount: 200
      },
      {
        artist: 'H.E.R.',
        song: 'Free',
        album: "(It's a spoof of H.I.M, I think, but not sure)",
        id: 'xxxx-xxxx-xxxx-xxxx',
        amount: 200
      },
    ]);
  }
  
  if(playlist.length === 0)  updatePlaylist();
  
  return (
    <div className="h-screen">
      <Head>
        <title>PlebFM</title>
        <meta name="description" content="placeholder screen"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className="flex flex-row">
        <div className="basis-6/12 h-screen">
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
          
          {playlist.map((entry, index) => (
            <PlaylistItem key={index} artist={entry.artist} song={entry.song} album={entry.album} id={entry.id} amount={entry.amount} />
          ))}
        </div>
      </main>
    </div>
  )
}