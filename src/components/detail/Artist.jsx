import React from 'react'
import fetchApi from '../utils/api'
import ArtistRow from './ArtistRow'

const Artist = ({artist}) => {

    // async function getArtist(id){
    //     const art = await fetchApi("artists",`?ids=${id}`);
    // }

  return (
    <div className='mt-5'>
      
      {
        artist?.map( (item,index)=>{

            return(
                <div key={item?.id} >
                    <ArtistRow id={item?.id} name={item?.name} />
                </div>
            )
        })
      }
    </div>
  )
}

export default Artist
