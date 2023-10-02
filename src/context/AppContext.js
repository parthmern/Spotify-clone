import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider({children}){
    const [loading,setLoading] = useState(false);
    const [playing,setPlaying] = useState(0);
    const [playingTrack,setPlayingTrack] = useState(null);
    const [currentTrack,setCurrentTrack] = useState(null);
    const [search,setSearch] = useState("");
    const [hamburger,setHamburger] = useState(true);
 
    const value = {
        loading,
        setLoading,
        playing,
        setPlaying,
        playingTrack,
        setPlayingTrack,
        currentTrack,
        setCurrentTrack,
        search,
        setSearch,
        hamburger,
        setHamburger,
    }

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )

}

