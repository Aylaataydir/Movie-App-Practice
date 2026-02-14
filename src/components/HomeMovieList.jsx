import React, { useContext } from 'react'
import MovieContext from '../context/MovieContext'
import MovieCard from './MovieCard'

const HomeMovieList = () => {

  const { movies } = useContext(MovieContext)
  console.log(movies)

  return (
    <div className={`grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4 w-4/5 mx-auto border border-white/10 p-10 rounded-lg  `}>
      {movies.map(movie => {
       return (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>

        )

      })}

    </div>
  )
}

export default HomeMovieList