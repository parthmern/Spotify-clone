import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Search from "./components/search/Search";
import fetchApi from "./components/utils/api";
import { Routes, Route, Link, NavLink} from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./context/AppContext";
import Detail from "./components/detail/Detail";
import Artist from "./components/artist/Artist";
import PageNotFound from "./components/pageNotFound/PageNotFound";

function App() {

  const [trackId,setTrackId] = useState("5nkr80c7lvi5m66AB65boL");
  const [loading,setLoading] = useState(false);

  const {playingTrack,setPlayingTrack} = useContext(AppContext);

  const [songs,setSongs] = useState(null);
  console.log("songggggggggggg",songs);


  async function getData(){
    //setLoading(true);
    //setLoading(true);
    const data = await fetchApi("playlist_tracks",`?id=${trackId}`).then((res)=>{
      setLoading(false);
      setSongs(res);
    })
    //console.log("++++++++",data);
    //setSongs(data);
  }
  

  useEffect(()=>{
    setLoading(true);
    getData();
    //setLoading(false);
  },[trackId])
  
  const playlistArr = [
    {
      id : "5nkr80c7lvi5m66AB65boL" ,
      name : "Arijit Singh",
    },
    {
      id : "1pvu7MovwsGFRAhkEUoAfU" ,
      name : "HipPop",
    },
    {
      id : "37i9dQZF1DWX3SoTqhs2rq",
      name : "1AM feels Hindi ",
    },
    {
      id: "1bE5bKVScqBP9NmpqNjupr",
      name : "created by ParthPatel with 💚"
    },
  ];


  function clickHandler(getId){
    //setLoading(true);
    setTrackId(getId);
    
  }
  console.log(trackId);

  return (

    <div className="app">
      
      <div><Header/></div>
      <div><Sidebar playlistArr={playlistArr} clickHandler={clickHandler} trackId={trackId} /> </div>

      <div>
        <Routes>
          <Route path="/" element={<Home songs={songs?.items} loading={loading} setLoading={setLoading} />} ></Route>
          <Route path="/search/:search" element={<Search/>} ></Route>
          <Route path="/detail/:id" element={<Detail/>} ></Route>
          <Route path="/artist/:artistId" element={<Artist />} ></Route>
          <Route path="*" element={<PageNotFound />} ></Route>
        </Routes>
      </div>

      <div><Footer/></div>
      
    </div>


  
  );
}

export default App;
