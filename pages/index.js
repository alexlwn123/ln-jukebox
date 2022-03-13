import Head from 'next/head'
// import { requestInvoice } from '../serviceRequests/Voltage'
import { MusicNoteIcon } from '@heroicons/react/outline'
import PlebPartyLogo from '../components/PlebPartyLogo';
//import Butterchurn from '../components/Butterchurn';
import PlayerVisualizer from '../components/Visualizer';
import React from 'react';

export default function Home() {
  return (
    <div className="h-screen">
      <Head>
        <title>Pleb Party</title>
        <meta name="description" content="placeholder screen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center h-full p-8 space-y-16">
        <PlebPartyLogo className="w-full" />
        
        <div className="space-y-2">
          <label className="uppercase tracking-widest text-white text-xs">Search for a Song</label>
          
          <input
            type="text"
            placeholder="Bitcoin Killed the Fiat Star&hellip;"
            className="p-4 w-full bg-white/[0.1] border-solid border-2 border-white text-white"
          />
        </div>
        
        <ol className="list-decimal text-white space-y-4 ml-4">
          <li>Select your song</li>
          <li>Pay for it with bitcoin</li>
          <li>Outbid other plebs to send your song to the top of the queue</li>
        </ol>
        
        <button typeof="button" className="text-white border-solid border-2 border-white p-6 w-full flex flex-row justify-center items-center space-x-4 uppercase tracking-[0.5em]">
          <span>Song Queue</span> <MusicNoteIcon className="w-6 h-6 text-white" />
        </button>
      </main>
    </div>
  )
}
