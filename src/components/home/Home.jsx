import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom';
import SongRow from '../songRow/SongRow';
import Skeleton from 'react-loading-skeleton' ;
import 'react-loading-skeleton/dist/skeleton.css' ;


const Home = ({songs,loading,setLoading}) => {

    const navigate = useNavigate();
    console.log("LOADING-->",loading);

    const {playing,setPlaying,playingTrack,setPlayingTrack} = useContext(AppContext);


    useEffect(()=>{
      setPlayingTrack(()=>{
        return songs?.filter((index)=>index<50)
      });
    },[songs])

    function clickHandler(e){
        setLoading(true);
        console.log(e.target.id);
        setPlaying(e.target.id);
        // console.log(e.target.url);
        //setPlaying(e.target.url);
        //console.log(playing);
    }

    function trackHandler(e){
        navigate(`/detail/${e.target.id}`);
    }
    
    //console.log(loading);
  return (

    <div className='w-[80%]  right-0  fixed '>
    {
      !loading ? (<div className='home bg-[#121212] pb-10 overflow-y-auto w-[80%] border-0  right-0 h-[calc(100%-130px)] fixed '>
      { 
        songs?.map((item,index)=>{
            //console.log(item?.track?.name);
            if(index<50){
                return(
                
                    <div key={index} >
                        <SongRow item={item} index={index} />
                    </div>
                )
            }
            
        })
      }
    </div>) : (<Skeleton className='ml-2 mr-5 bg-[#121212] w-[98%] mx-auto' count={5} height="10px" />)
    }
    </div>

    
  )
}

export default Home
