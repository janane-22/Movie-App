import { Children, createContext, useState,useEffect } from "react";

export const WatchListContext = createContext()

export const WatchListProvider = ({children})=>{
    const[watchList, setWatchList]= useState([])
    const[genreList,setGenreList] = useState([])
     useEffect(() => {
        let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=3d13f1f07f84cd447abf66f28916a006`

        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            setGenreList(data.genres || [])
          })
      }, [])
    
    const toggleWatchList = (movie)=>{
        const index=watchList.findIndex((m) => m.id === movie.id)
        if(index === -1){
            setWatchList([...watchList,movie])
        } else {
            setWatchList([...watchList.slice(0, index),...
                watchList.slice(index +1)])
        }
        }
    
    return(
        <WatchListContext.Provider value={{watchList,
        toggleWatchList , genreList}}>
            {children}
        </WatchListContext.Provider>
    )
}