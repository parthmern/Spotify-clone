import React, { useContext, useEffect, useReducer, useRef, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import fetchApi from '../utils/api';
import { useParams } from 'react-router-dom';
import SongRow from '../songRow/SongRow';
import SearchSongRow from './SearchSongRow';
import Spinner from '../Spinner/Spinner';

const Search = () => {

  const targetedArea = useRef();

  const {search} = useParams();
  const [searched,setSearched] = useState(search);
  console.log(searched);
  
  const {setHamburger} = useContext(AppContext);
  const [loading,setLoading] = useState(false);

  const [offset,setOffset] = useState(0);
  const [data,setData] = useState([]);

  const getInitialData = async () =>{
    setLoading(true);
    const res = await fetchApi("search",`?q=${searched}&type=tracks&offset=${offset}&limit=10&numberOfTopResults=5`)
    .then((res)=>{
      console.log(res?.tracks?.items);
      const newdata = res?.tracks?.items;
      {res !== undefined && setData((prev)=>[...prev, ...newdata]);}
      setLoading(false);
    })
    .catch((error)=>{
      console.log("initalized fetch ERROR");
    })
  }

  useEffect(()=>{
    
    // document.useRef("targetedArea").addEventListener("scroll",handleInfiniteScroll);
    // return () => {document.useRef("targetedArea").addEventListener.removeEventListener("scroll",handleInfiniteScroll)};
  if(targetedArea.current){
    targetedArea.current.addEventListener("scroll",handleInfiniteScroll);
    return () => { if(targetedArea.current){
      targetedArea.current.removeEventListener("scroll",handleInfiniteScroll)
    } };
  }

  },[])

  const handleInfiniteScroll = async () =>{
    console.log("scrollHeight" + document.getElementById("targetedArea").scrollHeight);
    console.log("innerHeight" + window.innerHeight);
    console.log("scrollTop" + document.getElementById("targetedArea").scrollTop);

    if(window.innerHeight + targetedArea.current.scrollTop  >=
    targetedArea.current.scrollHeight + 150 ){
      setOffset((prev)=>prev+10);
    }

  }
  console.log("OFFSET",offset);


  useEffect(()=>{
    getInitialData();
  },[offset]);

  useEffect(()=>{
    console.log("data==0");
    setData([]);
    setOffset(0);
    getInitialData();
  },[searched])

  useEffect(()=>{
    setSearched(search);
  },[search])



  return (
        <div id='targetedArea' className='h-[calc(100%-150px)] pb-10  bg-[#121212]  w-[80%] fixed right-0 overflow-y-scroll' ref={targetedArea}>
        <p className='text-white ml-8 pt-3 align-middle '>Search Results for : {searched}</p>
          {
            data?.length>2 && (
              data?.map((item,index)=>{
                //console.log(item);
                return(
                  <SearchSongRow key={index} item={item.data} />
                )
              })
            )
          }
          <div className='text-white mx-auto  flex items-center justify-center h-7 w-full p-3'>
            {loading ? <Spinner className="h-[20px] w-[20px]" /> : <></>}
          </div>
        
      </div>
    
    
  )
}

export default Search
