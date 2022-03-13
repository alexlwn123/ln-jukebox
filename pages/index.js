import Head from 'next/head'
// import { requestInvoice } from '../serviceRequests/Voltage'
import { MusicNoteIcon } from '@heroicons/react/outline'
import PlebPartyLogo from '../components/PlebPartyLogo';
import React from "react";
import styles from '../styles/Home.module.scss'
import InputText from "../components/InputText";
import SearchResult from "../components/SearchResult";
import Button from "../components/Button";


export default function Home() {
  const [searchActive, setSearchActive] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState([]);
  
  function handleSearchChange(e){
    if(e.length > 0) setSearchActive(true)
    else setSearchActive(false)
    setSearchResults([
      {
        artist: 'Rage Against the Machine',
        song: 'Freedom'
      },
      {
        artist: 'Rage Against the Machine',
        song: 'Freedom (Live in Mexico City)'
      },
      {
        artist: 'Zac Brown Band',
        song: 'Free'
      },
      {
        artist: 'D-Steez',
        song: 'Free'
      },
      {
        artist: 'H.E.R.',
        song: 'Free'
      },
    ]);
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
          
          <div className="space-y-2">
            <label className="uppercase tracking-widest text-white text-xs">Search for a Song</label>
            
            <InputText
              placeholder="Bitcoin Killed the Fiat Star&hellip;"
              parentCallback={handleSearchChange}
            />
          </div>
  
          {!searchActive ?
          <ol className="list-decimal text-white space-y-4 ml-4">
            <li>Select your song</li>
            <li>Pay for it with bitcoin</li>
            <li>Outbid other plebs to send your song to the top of the queue</li>
          </ol>
          : ''}
  
          {!searchActive ?
          <Button text="Song Queue" icon="MusicNoteIcon" />
          : ''}
        </div>

        {searchActive ?
        <div>
          {searchResults.map((result, index) => (
            <SearchResult key={index} artist={result.artist} song={result.song} />
          ))}
        </div>
        : ''}
      </main>
    </div>
  )
}
