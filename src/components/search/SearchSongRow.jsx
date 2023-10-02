import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import {BsPlayCircleFill} from "react-icons/bs";
import fetchApi from '../utils/api';
import { AppContext } from '../../context/AppContext';

const SearchSongRow = ({item}) => {
  const navigate = useNavigate();
  const {playing,setPlaying,setPlayingTrack,setCurrentTrack,setLoading} = useContext(AppContext);

  function trackHandler(e){
    navigate(`/detail/${e.target.id}`);
  }

  function clickHandler(track,playing){
    setPlaying(playing);
    setCurrentTrack(track);
  }

  return (
    <div className='p-5 flex items-center justify-between hover:bg-[#212121] w-full'>
      <div className='flex flex-col'>
      <p 
      id={item?.id}
      className='text-white cursor-pointer hover:text-[#1db954]'
      onClick={trackHandler}
      >{item?.name}</p>
      
      <div className='flex'>{item?.artists?.items.map((item,index)=>{
        return(
          <p key={index} className='text-[#535353] text-[14px]'>{item?.profile?.name}, </p>
        )
      }) }
      </div>
      </div>

      <div id={item?.id}
        
        onClick={async (e)=>{
          //clickHandler(item.track,item.track.preview_url)
          const res = await fetchApi("tracks",`?ids=${item?.id}`).then((res)=>{
            
            clickHandler(res?.tracks[0],res?.tracks[0]?.preview_url)
          })
        }}
        className='mr-3'
        ><BsPlayCircleFill className='text-white scale-[1.7] hover:opacity-60 hover:text-[#1db954]' /></div>
      
    </div>
  )
}

export default SearchSongRow
