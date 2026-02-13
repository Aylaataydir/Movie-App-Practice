import React, { createContext, useState } from 'react'

const MovieContext = createContext()

export const MovieContextProvider = ({children}) => {

  const [movies, ]
  const [watched, setWatched] = useState([])
  const [watchlist, setWatchlist] = useState([])
  const [favorites, setFavorites] = useState([])


  return (
    <MovieContext.Provider value={{}}>
    {children}
    </MovieContext.Provider>
  )
}

export default MovieContext