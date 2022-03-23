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
  
  const [invoiceId, setInvoiceId] = React.useState('');
  
  const [elapsed, setElapsed] = React.useState(1);
  
  const [invoicePaid, setInvoicePaid] = React.useState(false);
  
  // console.log(query.songFullName)
  
  React.useEffect(() => {
    if(query && query.amount) {
      fetch('/api/lnd/makeInvoice/' + query.amount)
        .then(async (response) => {
          const res = await response.json()
          setInvoice( res.request )
          setInvoiceId( res.id )
        });
    }
    return () => {
      
    }
  }, [query])

  React.useEffect(() => {
    console.log('/api/db/queue/add/' + query.song+ '/' + query.amount + '/' + query.songUri);
    if(invoiceId && !checkoutComplete) {
      const timer = setInterval(() => {
        setElapsed(elapsed+1);
        console.log(elapsed);
        console.log(query.songUri)
        fetch('/api/lnd/fetchInvoice/' + invoiceId)
          .then(async (response) => {
            const res = await response.json()
            console.log(typeof res.is_confirmed)
            if(res.is_confirmed) {
              console.log('it is confirmed')
              console.log(typeof res.is_confirmed)
              console.log(res.is_confirmed)
              await setInvoicePaid(true);
              console.log(invoicePaid)
              setCheckoutComplete(true);
            }
          });
      }, 1000);
    }
    else if(invoicePaid) {
      console.log('invoice is paid mofo')
      // /api/db/queue/add/[songName]/[bid]/[uri]
      console.log(`/api/db/queue/add/${query.songFullName}/${query.amount}/${query.songUri}`)
      fetch(`/api/db/queue/add/${query.songFullName}/${query.amount}/${query.songUri}`)
        .then(async (response) => {
          const res = await response.json()
          console.log(res)
        });
      setCheckoutComplete(true);
    }
    
    return () => clearInterval(timer);
  }, [invoiceId, invoicePaid, setCheckoutComplete, elapsed])

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
          {query.song} by {query.artist} has been added to the queue.
          There <span> {songsAhead > 1 || songsAhead === 0 ? 'are' : 'is'} {songsAhead} {songsAhead > 1 || songsAhead === 0 ? 'songs' : 'song'}</span> ahead of it.
        </p>

        <Button text="Song Queue" icon="MusicNoteIcon" href="/leaderboard" />
      </main>
      }
        
    </div>
  )
}