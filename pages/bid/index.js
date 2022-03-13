import Head from 'next/head'
import Nav from "../../components/Nav";
import InputNumber from "../../components/InputNumber";
import Button from "../../components/Button";
import React from "react";

export default function Index() {
  const [bidDefined, setBidDefined] = React.useState(false);
  
  function handleSatsInput(e){
    if(e.target.value > 0) setBidDefined(true);
  }
  
  return (
    <div className="h-screen w-full">
      <Head>
        <title>Bid - PlebFM</title>
        <meta name="description" content="placeholder screen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center h-full w-full p-8 space-y-16">
        <Nav text="Search" />
        
        <div className="drop-shadow-md space-y-2 w-full text-left">
          <h1 className="text-6xl">Freedom</h1>
          
          <p className="text-2xl font-bold">Rage Against the Machine</p>
          
          <p>Rage Against the Machine</p>
        </div>
        
        <InputNumber value="" parentCallback={handleSatsInput} />
        
        <Button text="Checkout" icon="CartIcon" active={bidDefined} />
      </main>
    </div>
  )
}