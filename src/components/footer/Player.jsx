import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
//import 'react-h5-audio-player/lib/styles.css';
import "./style.css"


const Player = ({src}) => {




  return (
    <div className='w-auto custom-external-component'>
      <AudioPlayer
    autoPlay
    src={src}
    onPlay={e => console.log("onPlay")}
    hasDefaultKeyBindings = "true"
  />
    </div>
  )
}

export default Player
