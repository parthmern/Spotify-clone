import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import {BiSolidPlaylist} from "react-icons/bi"
import  {MdPlayArrow} from "react-icons/md"
import "./style.css";
import { AppContext } from '../../context/AppContext';

const Sidebar = ({playlistArr,clickHandler,trackId}) => {

  const [color,setColor] = useState("green");
  const {hamburger,setHamburger} = useContext(AppContext);
  //setHamburger(true);
  console.log("HAMBURGER",hamburger);

  const navigate = useNavigate();

  function newclickHandler(e){
    clickHandler(e.target.id);
    navigate("/");
    if(window.innerWidth < 600){
      setHamburger(false);
    }
  }

  useEffect(()=>{
    console.log("windowInnerwidth",window.innerWidth);
    if(window.innerWidth < 600){
      setHamburger(false);
    }
    else{
      setHamburger(true);
    }
  },[])


  return (
    <>
    {
      hamburger && (
        <div className='sidebar  border-0 pt-3 outline-none h-full border-r-[1px] border-[#1db954] fixed w-[20%] px-3 bg-[#121212] '>
      <div>
      <p className='font-bold text-white text-[13px] mt-2 mb-3 flex'><BiSolidPlaylist className='mr-2 text-[20px]'/>PLAYLISTS</p>
      <hr></hr>
      </div>

      <div>
      {
        playlistArr.map((item,index)=>{
          const id = item.id;
          return(
            
            <div key={item.id} id={item.id}
            onClick={newclickHandler}
            className='flex cursor-pointer items-center py-3 text-white hover:text-[#1db954] gap-x-3 ease-linear duration-500 '
            
            >
            <MdPlayArrow className={id == trackId ? ("active") : ("")} />  {item.name}
            </div>
          )
        })
      }
      </div>
     
    </div>
      )
    }
    </>
  )
}

export default Sidebar
