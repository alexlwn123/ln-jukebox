import React from "react";
import Link from "next/link";

export default function SearchResult(props) {
  const [value, setValue] = React.useState(props.value ? props.value : '');
  
  function handleChange(e){
    setValue(e.target.value);
    props.parentCallback(e.target.value);
  }

  return (
    <Link
      href={{
        pathname: "/bid",
        query: {
          song: props.song,
          artist: props.artist,
          album: props.album,
          id: props.id,
          songUri: props.songUri,
          songFullName: props.songFullName
        }
      }}
      passHref
    >
      <div className="bg-gradient-to-b from-lnj-purple to-lnj-purple-dark w-full text-white text-md p-4">
        <p className="drop-shadow-md">{props.song} - {props.artist}</p>
      </div>
    </Link>
  )
}