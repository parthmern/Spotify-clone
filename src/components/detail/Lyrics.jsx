import React from 'react'

const Lyrics = ({lyrics}) => {
  return (
    <div className='relative'>
      <div className='extra_Grad left-[-40px] w-full  absolute z-30 top-[-30px] '></div>
      <p className='mt-3 mb-2 text-4xl text-white font-[circular]'>Lyrics</p>
      <div className='w-full '>
        {
            lyrics ? 
            (
              lyrics?.map((item,index)=>{
                return (<p className='text-white text-base'  key={index}>{item?.words}</p>)
            })
            ) : 
            (
              <p className='text-white font-sm'>not available</p>
            )
            
        }
      </div>
    </div>
  )
}

export default Lyrics
