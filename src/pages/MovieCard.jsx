import React, { useContext } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { WatchListContext } from '../context/WatchListContext'


const MovieCard = ({ movie }) => {
  const { toggleWatchList, watchList } = useContext(WatchListContext)
  const inWatchList = watchList.some((m)=>m.id === movie.id)
  return (
    <div className='bg-gray-800 p-2 text-white 
    rounded-lg shadow-md relative'>
      {/* <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  */}
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className='w-full h-80 object-contain rounded-sm' />

      <h2 className='text-lg font-bold mt-4'>{movie.title}</h2>
      <p className='text-sm text-gray-400'>{movie.release_date}</p>
      <button className='absolute top-2 right-2 text-xl text-red-500'
        onClick={() => toggleWatchList(movie)}>
        {inWatchList? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  )
}

export default MovieCard