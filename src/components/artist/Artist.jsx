import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchApi from "../utils/api"
import Skeleton from 'react-loading-skeleton' ;
import ArtistDetails from './ArtistDetails';

const Artist = () => {

    const {artistId} = useParams();
    console.log(artistId);

    const [loading,setLoading] = useState(false);
    const [artistDetails,setArtistDetails] = useState(null);

    async function getArtistDetail (){
        setLoading(true);
        const res = await fetchApi("artist_overview",`?id=${artistId}`)
        .then((res)=>{
            setArtistDetails(res);
            setLoading(false);
        })
        .catch((e)=>{
            console.log("ARTISTDETAIL error=>",e);
        })
    }

    useEffect(()=>{
        getArtistDetail();
    },[artistId]);

  return (
    <div className='artist w-[80%] pb-10 bg-[#121212] h-[calc(100%-130px)] overflow-y-auto right-0  fixed'>
      {
        !loading ? 
        (<ArtistDetails artistDetails={artistDetails} />) : 
        (<Skeleton className='ml-2 mr-5  w-[98%] mx-auto' count={5} height="10px" />)
      }
    </div>
  )
}

export default Artist
