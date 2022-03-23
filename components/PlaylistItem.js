import React from "react";
import Link from "next/link";
import {SatoshiV1Icon} from "@bitcoin-design/bitcoin-icons-react/outline";

export default function PlaylistItem(props) {
  const [value, setValue] = React.useState(props.value ? props.value : '');
  
  function handleChange(e){
    setValue(e.target.value);
    props.parentCallback(e.target.value);
  }

  return (
    <div className="bg-gradient-to-b from-lnj-purple to-lnj-purple-dark w-full text-white text-md p-8 flex flex-row">
      <p className="drop-shadow-md text-2xl basis-8/12">{props.song} - {props.artist}</p>
      <p className="basis-4/12 flex flex-row space-x-4 justify-end items-center text-2xl font-bold"><span>{props.amount}</span> <SatoshiV1Icon className="w-8 h-8" /></p>
    </div>
  )
}