import {MusicNoteIcon, PlayIcon} from "@heroicons/react/outline";
import {CartIcon, CopyIcon, KeyIcon, ArrowUpIcon, ArrowLeftIcon, ArrowRightIcon} from "@bitcoin-design/bitcoin-icons-react/outline";
import Icon from "../components/Icon";
import React from "react";

export default function Button(props){
  const components = {
    CartIcon, MusicNoteIcon, CopyIcon, KeyIcon, PlayIcon, ArrowUpIcon, ArrowLeftIcon, ArrowRightIcon
  }
  
  const ComponentName = components[ props.icon ];
  
  const buildClasses = (size) => {
    let base = "text-white border-solid border-2 border-white  w-full flex flex-row justify-center items-center uppercase tracking-[0.5em]"
    let sizing = size === 'sm' ?  "p-3 text-sm" : size === 'xs' ?  "p-1 text-xs" : "p-6"
    let spacing = props.text ?  size === 'sm' ?  "space-x-2" : size === 'xs' ?  "space-x-1" : "space-x-4" : ''
    return base + " " + sizing + " " + spacing
  }
  
  return(
    <div>
      { props.button ?
      <button
        type="button"
        onClick={props.onClick}
        className={buildClasses(props.size)}
      >
        <span className={!props.text || props.text === '' ? 'hidden' : props.text}>{props.text}</span>
        <ComponentName icon={props.icon} className="w-8 h-8 text-white" />
      </button>
      :
      <a
        className={buildClasses(props.size)}
        href={props.href}
      >
        <span className={!props.text || props.text === '' ? 'hidden' : props.text}>{props.text}</span>
        <ComponentName icon={props.icon} className="w-8 h-8 text-white" />
      </a>
      }
    </div>
  )
}