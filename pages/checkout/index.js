import Head from 'next/head'
import Nav from "../../components/Nav";
import InputNumber from "../../components/InputNumber";
import Button from "../../components/Button";
import React from "react";
import {MusicNoteIcon} from "@heroicons/react/outline";

export default function Index() {
  const [checkoutComplete, setCheckoutComplete] = React.useState(false);
  
  const [songsAhead, setSongsAhead] = React.useState(0);

  function handleSatsInput(e){
    if(e.target.value > 0) setBidDefined(true);
  }

  return (
    <div className="h-screen w-full">
      <Head>
        <title>Checkout - PlebFM</title>
        <meta name="description" content="placeholder screen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      { !checkoutComplete ?
      <main className="flex flex-col items-center h-full w-full p-8 space-y-16">
        <Nav text="Bid Details" />

        <div className="drop-shadow-md space-y-2 w-full text-left">
          <h1 className="text-6xl">Freedom</h1>

          <p className="text-2xl font-bold">Rage Against the Machine</p>

          <p>Rage Against the Machine</p>
        </div>

        <p className="text-4xl text-left w-full">1500 sats</p>
        
        <p className="font-mono text-2xl text-left w-full">lnbc10u ... 0spjazup6</p>

        <Button text="Copy Invoice" icon="CopyIcon" />
      </main>
      :
      <main className="flex flex-col items-center h-full w-full p-8 space-y-16">
        <Nav text="Home" />
        
        <MusicNoteIcon className="w-24 h-24" />
        
        <p className="text-4xl w-full text-center">Payment Complete</p>
        
        <p className="text-xl font-light drop-shadow-md">
          Freedom by Rage Against the Machine has been added to the queue.
          There <span> {songsAhead > 1 || songsAhead === 0 ? 'are' : 'is'} {songsAhead} {songsAhead > 1 || songsAhead === 0 ? 'songs' : 'song'}</span> ahead of it.
        </p>

        <Button text="Song Queue" icon="MusicNoteIcon" />
      </main>
      }
        
    </div>
  )
}