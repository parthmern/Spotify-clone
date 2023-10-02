import React, { useContext, useEffect, useRef, useState } from 'react'
import fetchApi from '../utils/api'
import { AppContext } from '../../context/AppContext';
import InfiniteScroll from 'react-infinite-scroll-component';

const Search = () => {

  const {search,setSearch} = useContext(AppContext);
  console.log("SEARCHING...",search);

  const [data, setData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);

  // async function getSearchData(query,page){

  //   if(search===""){

  //   }
  //   else{
  //     const search = await fetchApi("search",`?q=${query}&type=tracks&offset=0&limit=10&numberOfTopResults=5`);
  //     // setSearch("");
  //     setResult(search);
  //   }
    
  // }

  
  // console.log(result);

  // useEffect(()=>{
  //   getSearchData(search);
  // },[search])

  // async function fetchData(){
  //   setPage((state)=>state+1);
  //   console.log("page no",page);
  //   const search = await fetchApi("search",`?q=${search}&type=tracks&offset=${page}&limit=10&numberOfTopResults=5`);
  //   setResult((prev)=>{
  //     return (
  //       [...prev,search]
  //     )
  //   });
  // }

  // useEffect(()=>{
  //   fetchData();
  // },[])


  const fetchInitialData = () => {
        setLoading(true);
        fetchApi("search",`?q=${search}&type=tracks&offset=${pageNum}&limit=10&numberOfTopResults=5`).then(
            (res) => {
                setData(res?.tracks?.items);
                setPageNum((prev) => prev + 10);
                setLoading(false);
            }
        );
    };

    console.log("data",data);

    const fetchNextPageData = () => {
      console.log("next page data fetching");
      fetchApi("search",`?q=${search}&type=tracks&offset=${pageNum}&limit=10&numberOfTopResults=5`).then(
          (res) => {
              if (data) {
                  setData((prev)=>{
                    return(
                      
                        [prev].push(res?.tracks?.items)
                      
                    )
                  });
              } else {
                  setData(res?.tracks?.items);
              }
              setPageNum((prev) => prev + 10);
          }
      );
  };

  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
}, [search]);
console.log("Data length:", data?.tracks?.items.length);

const handleScroll = () => {
  console.log("Scrolling...");
};

useEffect(() => {
  const parentContainer = document.getElementById("parent-container");

  const handleScroll = () => {
    console.log("Scrolling...");
  };

  parentContainer.addEventListener("scroll", handleScroll);

  return () => {
    parentContainer.removeEventListener("scroll", handleScroll);
  };
}, []);



  const target = useRef();
  return (
    <div id='parent-container' ref={target} className='parent-container w-[80%] right-0   fixed overflow-y-auto border-0  h-[400px] '>
      Search
      <InfiniteScroll 
      dataLength={data?.tracks?.items.length || 0}
      next={fetchNextPageData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      onScroll={handleScroll} 
      scrollableTarget="target"
      >
      
      {
        data.map((item,index)=>{
          return(
            <div key={index} className='p-10'>{item?.data?.name}</div>
          )
        })
      }

      </InfiniteScroll>

      
    </div>
  )
}

export default Search
