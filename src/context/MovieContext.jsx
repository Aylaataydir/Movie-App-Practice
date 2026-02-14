import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

const MovieContext = createContext()

export const MovieContextProvider = ({ children }) => {

  const [movies, setMovies] = useState([])
  const [watched, setWatched] = useState(JSON.parse(localStorage.getItem("watched")) || [])
  const [watchlist, setWatchlist] = useState(JSON.parse(localStorage.getItem("watchlist")) || [])
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || [])
  const [query, setQuery] = useState("")



  const toggleList = (movie, listName) => {

    switch (listName) {
      case "watched":
        if (watched.some(m => m.id === movie.id)) {
          setWatched(watched.filter(m => m.id !== movie.id))
        } else {
          setWatched([...watched, movie])
        };
        break;

      case "watchlist":
        if (watchlist.some(m => m.id === movie.id)) {
          setWatchlist(watchlist.filter(m => m.id !== movie.id))
        } else {
          setWatchlist([...watchlist, movie])
        };
        break;
      case "favorites":
        if (favorites.some(m => m.id === movie.id)) {
          setFavorites(favorites.filter(m => m.id !== movie.id))
        } else {
          setFavorites([...favorites, movie])
        };
        break;

      default:
        break;
    }

  }



  const getMovies = async () => {

    const ApiKey = "c51bf062696d28a62cecd62eb0b2faf7"
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}`

    const { data } = await axios(`${url}&query=${query}`)
    setMovies(data.results)
  }


  useEffect(() => {
    getMovies()
  }, [])


  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist))
  }, [watchlist])

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched))
  }, [watched])



  console.log(watchlist)
  return (
    <MovieContext.Provider value={{ movies, watched, watchlist, favorites, query, setQuery, toggleList }}>
      {children}
    </MovieContext.Provider>
  )
}

export default MovieContext