import React, { createContext } from 'react'

const MovieContext = createContext()

export const MovieContextProvider = ({children}) => {
  return (
    <MovieContext.Provider value={{}}>
    {children}
    </MovieContext.Provider>
  )
}

export default MovieContext