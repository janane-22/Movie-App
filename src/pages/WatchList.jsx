import React, { useContext, useState } from 'react'
import GenreFilter from './GenreFilter'
import MovieCard from './MovieCard'
import { WatchListContext } from '../context/WatchListContext'

const WatchList = () => {
  const { watchList,genreList} = useContext(WatchListContext)
  const[search,setSearch]=useState("")
  const[selectedGenre,setSelectedGenre]=useState("")
  const filteredMovies = watchList.filter((movie)=>
    movie.title.toLowerCase().includes(search.toLowerCase()))
  .filter((movie)=>{
    return !selectedGenre || movie.genre_ids.includes(Number(selectedGenre))
  });

  return (
    <div className='p-4 pt-16' >
      <input type="text" className='p-2 border w-3/4 md:w-1/2 rounded-lg
        border-gray-800 bg-gray-900 opacity-60 text-white backdrop-blur-md 
        fixed top-16 left-1/2 transform -translate-x-1/2 z-10'
        placeholder='Search Movie...'
        onChange={(e)=>setSearch(e.target.value)} />

      <div className='mt-16 flex justify-center'>
        <GenreFilter genreList={genreList} 
        setSelectedGenre={setSelectedGenre}/>
      </div>
      <div className="movie-container grid grid-cols-1
          md:grid-cols-3 lg:grid-cols-4 mt-16 gap-4 ">

        {filteredMovies.map(movie => {
          return (
            <MovieCard key={movie.id} movie={movie} />
          )
        })}

      </div>

    </div>

  )
}

export default WatchList