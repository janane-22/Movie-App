import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
// import { data } from 'react-router-dom'

export const Home = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")


  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=3d13f1f07f84cd447abf66f28916a006`

    if (search) {
      url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=3d13f1f07f84cd447abf66f28916a006`

    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setMovies(data.results)
      })
  }, [page,search])


  return (
    <div className='p-4 pt-16' >
      <input type="text" className='p-2 border w-3/4 md:w-1/2 rounded-lg
        border-gray-800 bg-gray-900 opacity-60 text-white backdrop-blur-md 
        fixed top-16 left-1/2 transform -translate-x-1/2 z-10'
        placeholder='Search Movie...' 
        onChange={(e)=>setSearch(e.target.value)}/>
      <div className="movie-container grid grid-cols-1
          md:grid-cols-3 lg:grid-cols-4 mt-16 gap-4 ">

        {movies.map(movie => {
          return (
            <MovieCard key={movie.id} movie={movie} />
          )
        })}

      </div>
      <div className="pagination-container flex justify-between mt-5">

        <button disabled={page == 1}
          className='bg-gray-700 p-2 rounded-lg text-white'
          onClick={() =>
            setPage((prev) => prev - 1)}>
          Prev</button>

        <button className='bg-gray-700 p-2 rounded-lg text-white'
          onClick={() =>
            setPage((prev) => prev + 1)}>
          Next</button>
      </div>
    </div>
  )
}
