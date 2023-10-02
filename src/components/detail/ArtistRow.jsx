import React, { useEffect, useState } from 'react'
import fetchApi from '../utils/api'
import { useNavigate } from 'react-router-dom';

const ArtistRow = ({id,name}) => {

    const [img,setImg] = useState("");
    const navigate= useNavigate();

    // const [ide,setIde] = useState(id);

    // async function getArtistImg(){
    //     const artistImg = await fetchApi("artists",`?ids=${id}`);
    //     setImg(artistImg?.artists[0]?.images[0]?.url);
    // }

    // useEffect(()=>{
    //   getArtistImg();
    // },[ide]);

  return (
    <div className='flex mt-2 text-white gap-x-3 bg-[#212121] p-3 cursor-pointer hover:text-[#1db954]'
    id={id}
    onClick={()=>{
      navigate(`/artist/${id}`)
    }}
    >
      <img 
      className='w-[50px] h-[50px] aspect-square rounded-full'
      src={img ?(img) : ("https://icon-library.com/images/no-user-image-icon/no-user-image-icon-0.jpg")} alt="" />
      <div>
      <p className=' text-white font-bold'>Artist</p>
      <p className='font-sm  '>{name}</p>
      </div>
    </div>
  )
}

export default ArtistRow
