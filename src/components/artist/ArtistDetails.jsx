import React from 'react'
import "./style.css"
import {MdVerified} from "react-icons/md"
import SearchSongRow from '../search/SearchSongRow'

const ArtistDetails = ({artistDetails}) => {

    const color = artistDetails?.data?.artist?.visuals?.avatarImage?.extractedColors?.colorRaw?.hex;

  return (
    <div>
    
    {/* upper section */}
      <div className="artist-details-upper flex gap-x-5 bg-[rgba(76, 147, 241, 0.69)] rounded-md ml-3 mt-3 w-[97%] p-5 bg-opacity-60 ">
        
        <img src={artistDetails?.data?.artist?.visuals?.avatarImage?.sources[0]?.url || "https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg="} alt="" 
        className='h-[200px] w-[200px] aspect-square rounded-full shadow-2xl'
        />

        <div className='flex flex-col gap-y-3 items-baseline justify-between'>
            <div>{artistDetails?.data?.artist?.profile?.verified ? (<p className='text-white items-center justify-center flex gap-x-3'><MdVerified className='text-[#0c67d3]' />Verified Artist</p>) : (<></>)}</div>
            <p className='text-3xl font-[circular] text-white  drop-shadow-2xl '>{artistDetails?.data?.artist?.profile?.name}</p>
            <div>
                <div className='text-[#a8e22b] drop-shadow'>{artistDetails?.data?.artist?.stats?.followers} followers</div>
                <div className='text-[#ff69b4] drop-shadow'>{artistDetails?.data?.artist?.stats?.monthlyListeners} monthly Listener</div>
            </div>
        </div>

      </div>

    {/* TOP Tracks */}
      <div>
        {
            artistDetails?.data?.artist?.discography?.topTracks && (
                <div>
                    <p className='text-white text-[30px] font-[circular] w-full pl-5 py-3'>Top Tracks</p>
                    {
                        artistDetails?.data.artist?.discography?.topTracks?.items.map((item,index)=>{
                            return(
                                <SearchSongRow item={item.track} />
                            )
                        })
                    }
                </div>
            )
        }
      </div>

    {/* ABOUT artist */}
      <div  className={`artist-details-upper flex gap-x-5 bg-[rgba(76, 147, 241, 0.69)] rounded-md ml-3 mt-3 w-[97%] p-5 bg-opacity-60  `}>
        <div className='text-white' >
            <p className='text-white font-[circular]'>About</p>
            {artistDetails?.data?.artist?.profile?.biography?.text ? (artistDetails?.data?.artist?.profile?.biography?.text ) : (<p>No details found</p>)}
        </div>
      </div>

    </div>
  )
}

export default ArtistDetails
