import {MusicNoteIcon} from "@heroicons/react/outline";
import {CartIcon} from "@bitcoin-design/bitcoin-icons-react/outline";
import Icon from "../components/Icon";
import React from "react";

export default function Button(props){
  const components = {
    CartIcon, MusicNoteIcon
  }
  
  const ComponentName = components[ props.icon ];
  
  return(
    <button
      type="button"
      className="text-white border-solid border-2 border-white p-6 w-full flex flex-row justify-center items-center space-x-4 uppercase tracking-[0.5em]"
    >
      <span>{props.text}</span>
      <ComponentName icon={props.icon} className="w-6 h-6 text-white" />
    </button>
  )
}