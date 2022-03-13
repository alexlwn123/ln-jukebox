import React from "react";
import styles from "../styles/InputText.module.scss";
import {SatoshiV1Icon} from "@bitcoin-design/bitcoin-icons-react/outline";

export default function InputNumber(props) {
  const [value, setValue] = React.useState(props.value ? props.value : 0);
  
  function handleChange(e){
    setValue(e.target.value);
    props.parentCallback(e.target.value);
  }

  return (
    <div className="relative w-full focus:text-lnj-orange focus-within:lng-orange active:text-lnj-orange">
      <input
        type="number"
        placeholder={props.placeholder ? props.placeholder : 0}
        value={value}
        onChange={handleChange}
        className="p-4 w-full bg-white/[0.1] border-solid border-2 border-white text-white focus:outline-none focus:border-lnj-orange focus:text-lnj-orange"
      />
      <SatoshiV1Icon className="w-8 h-8 absolute right-3.5 top-3.5" />
    </div>
    
  )
}