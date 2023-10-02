import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import AudioPlayer from './AudioPlayer';
import Player from './Player';

const Footer = () => {

  const {playing,currentTrack} = useContext(AppContext);
  const [audioUrl,setAudioUrl] = useState(playing);
  
  useEffect(()=>{
    console.log("playing change");
    setAudioUrl(playing);
  },[playing])

  return (
    <div className='footer pt-1 flex w-full h-[90px] bg-[#212121] border-yellow-700 fixed bottom-0 '>
      <div className='footer-left flex items-center justify-center gap-x-2 pr-0 w-[200px]'>
                
              <img className='footer-img h-[50px] ml-2 w-[50px]' src={currentTrack?.album?.images[0]?.url}  />
              <p className='footer-text text-white my-auto'>{currentTrack?.album?.name.split("(")[0]}</p>
      </div>

      <div className='w-full align-middle mx-auto'>
      {
        playing ? <Player src={audioUrl}/> : <Player />
      }
      </div>
      
    </div>
  )
}

export default Footer
