import React, { useContext } from 'react'
import MovieContext from '../context/MovieContext'
import MovieCard from '../components/MovieCard'

const Favorites = () => {

  const { favorites } = useContext(MovieContext)

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-10 w-4/5 mx-auto border border-white/10 p-10 rounded-lg'>
      {favorites?.map(movie => (
        <MovieCard movie={movie} />
      ))
      }
    </div>
  )
}

export default Favorites