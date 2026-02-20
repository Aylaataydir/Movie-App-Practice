import React, { useContext } from 'react'
import MovieContext from '../context/MovieContext'
import MovieCard from './MovieCard'

const HomeMovieList = () => {

  const { movies } = useContext(MovieContext)

  const filteredMovies = movies?.filter(m => m.backdrop_path !== null)

  return (
    <div className={`grid grid-cols-1 justify-center gap-10 md:grid-cols-3 lg:grid-cols-4 w-4/5 mx-auto border border-black/60 dark:border-white/10 p-10 rounded-lg  `}>
      {filteredMovies.map(movie => {
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