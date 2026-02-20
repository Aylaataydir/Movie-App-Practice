import axios from 'axios'
import React, { createContext, use, useEffect, useState } from 'react'

const MovieContext = createContext()

export const MovieContextProvider = ({ children }) => {

  const [movies, setMovies] = useState([])
  const [watched, setWatched] = useState(JSON.parse(localStorage.getItem("watched")) || [])
  const [watchlist, setWatchlist] = useState(JSON.parse(localStorage.getItem("watchlist")) || [])
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || [])
  const [query, setQuery] = useState("")
  const [theme, setTheme] = useState("dark")
  const [videoId, setVideoId] = useState("")
  const [videoUrl, setVideoUrl] = useState()

  const API_KEY = import.meta.env.VITE_API_KEY


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

    const { data } = await axios(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
    setMovies(data.results)

  }


  const getVideo = async () => {
    const videoData = await axios(`https://api.themoviedb.org/3/movie/${videoId}/videos?api_key=${API_KEY}`)
    setVideoUrl(videoData.data.results[0].key)

    console.log(videoData.data.results[0].key)

  }

  const getSearch = async () => {

    const { data } =  await axios(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
    setMovies(data.results)

  }



  useEffect(() => {
    getSearch()
  }, [query])


  useEffect(() => {
    getMovies()
  },[])


  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist))
  }, [watchlist])

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched))
  }, [watched])

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  
  useEffect(() => {
    if (videoId) {
      getVideo();
    }
  }, [videoId])



  return (
    <MovieContext.Provider value={{ movies, watched, watchlist, favorites, query, setQuery, toggleList, setTheme, getVideo, setVideoId }}>
      {children}
    </MovieContext.Provider>
  )
}

export default MovieContext