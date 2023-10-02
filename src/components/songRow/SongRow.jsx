import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext';
import {BsPlayCircleFill} from "react-icons/bs";
import dayjs from 'dayjs';


const SongRow = ({item}) => {

    const date = item?.track?.album?.release_date;
    const mname = item?.track?.name.split("(");
    //console.log(mname[0]);

    const navigate = useNavigate();
    const {playing,setPlaying,setPlayingTrack,setCurrentTrack,setLoading} = useContext(AppContext);

    function clickHandler(track,playing){
        //setLoading(true);
        //console.log(e.target.id);
        setPlaying(playing);
        //console.log(x);
        //setPlayingTrack(track)
        setCurrentTrack(track);
        // console.log(e.target.url);
        //setPlaying(e.target.url);
        //console.log(playing);
    }

    function trackHandler(e){
        navigate(`/detail/${e.target.id}`);
    }
    
  return (
    <div className='hover:bg-[#212121]'>
      {
        item && (
          <div className='flex text-white py-3 px-4 items-center justify-between'>

        <div className='flex  gap-x-3 w-fit'>
          <div>
            <img className='w-[40px]' src={item?.track?.album?.images[0]?.url} />
          </div>
        
          <div>
            <div id={item?.track?.id} onClick={trackHandler}
            className='cursor-pointer hover:text-[#1db954]'
            >
              {mname[0]}
                    
            </div>

            <div className='text-[#b3b3b3] flex gap-x-1 text-[12px]'>
              <p>Release Date:</p>{
                dayjs(date).format('MM-DD-YYYY')
              }
            </div>
          </div>

        </div>


        <div id={item.track.preview_url} 
        track={item.track}
        onClick={(e)=>{
          clickHandler(item.track,item.track.preview_url)
        }}
        className='mr-3'
        ><BsPlayCircleFill className='scale-[1.7] hover:opacity-60 hover:text-[#1db954]' /></div>
        </div>
        )
      }
    </div>

    
  )
}

export default SongRow
