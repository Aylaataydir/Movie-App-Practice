import React, { useContext, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import MovieContext from '../context/MovieContext'

const MovieDetails = () => {

  const { category, title } = useParams()
  const { movies, watched, watchlist, favorites, videoUrl } = useContext(MovieContext)
  
  const location = useLocation()


  let targetList = []

  switch (category) {
    case "watched": targetList = watched
      break;
    case "watchlist": targetList = watchlist
      break;
    case "favorites": targetList = favorites
      break;
    case "home": targetList = movies
      break;

    default:
      break;
  }


  const movie = targetList.find(m => m.title === title)


  return (
    <div className='space-y-10 mt-12 w-3/4 mx-auto'>
      <div className='flex gap-6 border-b border-white/20 pb-8'>
        <img className='rounded-lg' src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" width={400} />
        <div>
          <h3 className='font-bold mb-3 text-xl text-orange-400'>{movie.title}</h3>
          <p>{movie.overview}</p>
        </div>
      </div>
      <div className='text-center my-10 text-red-800 font-semibold text-2xl'>
      <div className='w-3/4 mx-auto'>
          <iframe className='w-full aspect-video rounded-xl shadow-2xl' src={`https://www.youtube.com/embed/${videoUrl}`} ></iframe>
        </div>
        
      </div>


    </div>
  )
}

export default MovieDetails