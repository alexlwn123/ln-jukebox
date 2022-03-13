import AudioPlayer from "react-h5-audio-player";
export default function Player (props) {
  return (
      <div className={style.cplayer}>
        <AudioPlayer
          autoPlay
          src={props.song.src}
          onPlay={(e) => console.log("onPlay")}
          // other props here
          showSkipControls
          autoPlayAfterSrcChange
        />
      </div>
 )
}