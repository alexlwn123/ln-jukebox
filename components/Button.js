import {MusicNoteIcon} from "@heroicons/react/outline";
import {CartIcon, CopyIcon} from "@bitcoin-design/bitcoin-icons-react/outline";
import Icon from "../components/Icon";
import React from "react";

export default function Button(props){
  const components = {
    CartIcon, MusicNoteIcon, CopyIcon
  }
  
  const ComponentName = components[ props.icon ];
  
  return(
    <div>
      { props.button ?
      <button
        type="button"
        className="text-white border-solid border-2 border-white p-6 w-full flex flex-row justify-center items-center space-x-4 uppercase tracking-[0.5em]"
      >
        <span>{props.text}</span>
        <ComponentName icon={props.icon} className="w-8 h-8 text-white" />
      </button>
      :
      <a
        className="text-white border-solid border-2 border-white p-6 w-full flex flex-row justify-center items-center space-x-4 uppercase tracking-[0.5em]"
        href={props.href}
      >
        <span>{props.text}</span>
        <ComponentName icon={props.icon} className="w-8 h-8 text-white" />
      </a>
      }
    </div>
  )
}