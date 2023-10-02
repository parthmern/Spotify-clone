import React from 'react'

const UpperDetail = ({details}) => {
  const bgSrc =details?.tracks[0].album.images[0].url ;
  console.log(bgSrc);
  return (
    <div className='overflow-x-hidden'>
        <div className="upperDetail-main relative upperPoster flex mx-auto items-center gap-x-4 ">
            <img className='w-[200px] aspect-square h-[200px]' src={details?.tracks[0].album.images[0].url}></img>
            <div>
              <p className='text-small'>Song</p>
              <p className='text-4xl text-white font-[circular]'>{details?.tracks[0].name}</p>
              <p className='text-sm'>Release Date: {details?.tracks[0].album.release_date}</p>
            </div>
        </div>
        <div className='back-poster absolute h-[36vh] left-0 backdrop-blur-sm  w-full overflow-hidden  top-0 z-[-3]'>
          <img src={bgSrc} className=' w-full  blur opacity-50' alt="" />
        </div>
      
    </div>
  )
}

export default UpperDetail
