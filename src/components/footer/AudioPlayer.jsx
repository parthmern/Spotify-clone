import React, { createRef, useEffect, useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const AudioPlayer = ({ audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const {playing} = useContext(AppContext);
  const audioRef = createRef();



  useEffect(()=>{
    setIsPlaying(false);
  },[playing])

  const handleSeek = (e) => {
    const seekTime = e.target.value;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src={audioUrl} onTimeUpdate={handleTimeUpdate}/>
      <button onClick={toggleAudio}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <input
        type="range"
        min={0}
        max={audioRef?.current?.duration || 25}
        value={currentTime}
        onChange={handleSeek}
      />
    </div>
  );
};

export default AudioPlayer;
