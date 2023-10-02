import React, { useCallback, useContext, useState } from "react";
import {FiSearch} from "react-icons/fi"
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import {GiHamburgerMenu} from "react-icons/gi";
import {IoCloseSharp} from "react-icons/io5"

function Header(){

  const navigate = useNavigate();
  const [query,setQuery] = useState(null);
  const {search,setSearch,hamburger,setHamburger} = useContext(AppContext);
  console.log(query);

  function searchHandler(e){
    setQuery(e.target.value);

    if (e.key === 'Enter'){
      console.log("navigate to search Section");
      setSearch(query);
      navigate(`/search/${query}`);
      e.target.value = "";
    }
  }

    return(
        <div className="header  w-full gap-x-7 border-0 items-center flex justify-between bg-[#212121] ">
          <div>
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
            className="header-logo w-[100%]  cursor-pointer pl-4 mr-auto  h-[70px] object-contain
            md:max-w-[170px] "
            onClick={()=>{navigate("/")}}
            ></img>
          </div>
            <div
            className="header-search min-w-[70px] gap-x-3 w-[800px] mr-6 h-[40px] header_left bg-white text-[#b3b3b3] border rounded-[30px] flex items-center p-[10px] "
            onKeyUp={searchHandler}
            value={query}
            >
                <FiSearch />
                <input type="text"
                className="w-[100%] outline-none border-none"
                placeholder="Search for Songs..." />
            </div>

            <div className="header-hamburger hidden"
            onClick={()=>{setHamburger((prev)=>!prev)}}
            >
            {
              !hamburger ? (<GiHamburgerMenu className="text-white" />) : (<IoCloseSharp className="text-white" />)
            }  
            </div>

            
        </div>
    )
}

export default Header;