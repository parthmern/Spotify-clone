import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchApi from '../utils/api';
import UpperDetail from './UpperDetail';
import Lyrics from './Lyrics';
import Artist from './Artist';
import Skeleton from 'react-loading-skeleton';

const Detail = () => {

    const {id} = useParams();

    const [detailId,setDetailId] = useState(id);
    const [details,setDetails]= useState(null);
    const [lyrics,setLyrics] = useState(null);
    const [loading,setLoading] = useState(false);
    console.log(loading);

    async function detailsHandler(){
      setLoading(true);
      const req = await fetchApi("tracks",`?ids=${detailId}`).then((req)=>{setDetails(req)}).catch("error");
      const lyr = await fetchApi("track_lyrics",`?id=${detailId}`).then((lyr)=>{setLyrics(lyr)}).catch("erreo");
      
    }
     

    useEffect(()=>{
      detailsHandler();
      
    },[detailId])

    useEffect(()=>{
      if(details !== null && lyrics !== null ){
        console.log("details chck");
        setLoading(false);
      }
    },[details,lyrics])

  return (
    <div className='detail overflow-y-auto pb-10 bg-[#282828] overflow-x-hidden w-[80%] border-0 mb-[200px] right-0 h-[calc(100%-160px)] fixed'>
        {
      loading ? 
      
      (<div className='ml-[20%] mx-auto w-full'><Skeleton count={10} className='fixed right-0 mt-6 mr-9 w-[70%] m-auto' /></div>) 
      
      : (
        <div className='detailUnder w-[80%] overflow-y-auto p-4 border-0right-0 h-[calc(100%-160px)] fixed '>
        
        <div className='upper '> 
            <div className='poster h-[33vh]'>
                {
                  details ? (<UpperDetail details={details} />) : <></>
                }
            </div>
  
            <div className='lyrics'>
                {
                  lyrics ? (<Lyrics lyrics={lyrics?.lyrics?.lines} />) : <></>
                }
            </div>
  
            <div className='artist'>
                {
                  details ? (<Artist artist={details?.tracks[0]?.artists} />) : <></>
                }
            </div>
            
  
        </div>
      </div>
      )
    }
    </div>
    
  )
}

export default Detail
