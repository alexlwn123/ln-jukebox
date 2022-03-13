import Head from 'next/head'
import Nav from "../../components/Nav";
import Button from "../../components/Button";
import React from "react";
import {MusicNoteIcon} from "@heroicons/react/outline";
import {useRouter} from "next/router";

export default function Index(props) {
  const {query} = useRouter();
  
  const [checkoutComplete, setCheckoutComplete] = React.useState(false);
  
  const [songsAhead, setSongsAhead] = React.useState(0);
  
  const [invoice, setInvoice] = React.useState('');

  React.useEffect(() => {
    if(query && query.amount) {
      fetch('/api/lnd/makeInvoice/' + query.amount)
        .then(response => response.text())
        .then(newInvoice => setInvoice(newInvoice));
    }
    return () => {
      
    }
  }, [query])

  function copyInvoice() {
    navigator.clipboard.writeText(invoice).then(
      ()=>{
        console.log("Copied to clipboard")
      },
      err=>{
        console.log("An error occurred copying to clipboard")
      }
    )
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
        <Nav text="Bid Details" href="/bid" />

        <div className="drop-shadow-md space-y-2 w-full text-left">
          <h1 className="text-6xl">{query.song}</h1>

          <p className="text-2xl font-bold">{query.artist}</p>

          <p>{query.album}</p>
        </div>

          <p className="text-4xl text-left w-full">{query.amount} sats</p>
        
        <p className="font-mono text-2xl text-left w-full wrap">
          {!invoice ? 'One moment...' : invoice.substring(0,8) + ' ... ' + invoice.substring(invoice.length, invoice.length-8)}
        </p>

        <Button text="Copy Invoice" button icon="CopyIcon" onClick={copyInvoice} />
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