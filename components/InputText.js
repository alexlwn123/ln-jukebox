import React from "react";
import styles from "../styles/InputText.module.scss";

export default function InputText(props) {
  const [value, setValue] = React.useState(props.value ? props.value : '');
  
  function handleChange(e){
    setValue(e.target.value);
    props.parentCallback(e.target.value);
  }

  return (
    <input
      type="text"
      placeholder={props.placeholder ? props.placeholder : ''}
      value={value}
      onChange={handleChange}
      className="p-4 w-full bg-white/[0.1] border-solid border-2 border-white text-white focus:outline-none focus:border-lnj-orange focus:text-lnj-orange"
    />
  )
}