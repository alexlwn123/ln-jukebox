import {MusicNoteIcon} from "@heroicons/react/outline";
import {CartIcon, CopyIcon, KeyIcon} from "@bitcoin-design/bitcoin-icons-react/outline";
import Icon from "../components/Icon";
import React from "react";

export default function Button(props){
  const components = {
    CartIcon, MusicNoteIcon, CopyIcon, KeyIcon
  }
  
  const ComponentName = components[ props.icon ];
  
  const buildClasses = (size) => {
    let base = "text-white border-solid border-2 border-white  w-full flex flex-row justify-center items-center uppercase tracking-[0.5em]"
    let sizing = size === 'small' ?  "p-3 space-x-2 text-sm" : "p-6 space-x-4"
    return base + " " + sizing
  }
  
  return(
    <div>
      { props.button ?
      <button
        type="button"
        onClick={props.onClick}
        className={buildClasses(props.size)}
      >
        <span>{props.text}</span>
        <ComponentName icon={props.icon} className="w-8 h-8 text-white" />
      </button>
      :
      <a
        className={buildClasses(props.size)}
        href={props.href}
      >
        <span>{props.text}</span>
        <ComponentName icon={props.icon} className="w-8 h-8 text-white" />
      </a>
      }
    </div>
  )
}