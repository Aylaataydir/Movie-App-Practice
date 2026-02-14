import { useContext } from 'react'
import MovieContext from '../context/MovieContext'

const MovieCard = ({ movie }) => {

    const {toggleList, watched, watchlist, favorites} = useContext(MovieContext)

    const { title, backdrop_path, release_date, vote_average, overview } = movie

    const isWatched = watched.some(m => m.id === movie.id)
    const isInWatchList = watchlist.some(m => m.id === movie.id)
    const isInFavorites = favorites.some(m => m.id === movie.id)

    const year = movie.release_date ? new Date(release_date).getFullYear() : ""

    return (
        <div className="card bg-base-100 w-30 md:w-40 lg:w-50 shadow-xl group border border-base-200 h-full mx-auto">
            <figure className="relative overflow-hidden">
                <img
                    src= {`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                    alt="Movie"
                    className="transition-transform duration-300 group-hover:scale-105 h-30 object-cover "
                />

                {/*icons*/}
                <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                    {/* Watchlist  */}
                    <button 
                    onClick={() => toggleList(movie, "watchlist")}
                    className={`btn btn-circle btn-xs border-none text-white hover:bg-orange-500 tooltip tooltip-left ${isInWatchList ? "bg-orange-500" : " bg-black/60" }`}
                    data-tip={` ${isInWatchList ? "Remove" :  "Watchlist"} `}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                    </button>

                    {/* Watched icon */}
                    <button 
                    onClick={() => toggleList(movie, "watched")}
                    className={`btn btn-circle btn-xs border-none text-white hover:bg-green-500 tooltip tooltip-left ${isWatched ? " bg-green-500" : " bg-black/60"}`} 
                    data-tip={` ${isWatched ? "Remove" :  "Watched"} `}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </button>

                    {/* Favorite icon */}
                    <button 
                    onClick={() => toggleList(movie, "favorites")}
                    className={`btn btn-circle btn-xs border-none text-white hover:bg-red-500 tooltip tooltip-left ${isInFavorites ? "bg-red-500" : " bg-black/60" }`}
                    data-tip={` ${isInFavorites ? "Remove" :  "Favorite"} `}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                </div>
            </figure>

            <div className="card-body p-4">
                <h2 className="card-title text-sm font-semibold ">{title}</h2>
                <div className="flex justify-between items-center mt-1">
                    <span className="text-xs text-gray-400">{year}</span>
                    <div className="badge badge-outline badge-sm text-orange-400 border-orange-400">{vote_average?.toFixed(1) || "0.0"}</div>
                </div>
                <div className="card-actions mt-auto">
                    <button className="mt-1 bg-orange-600/40 w-full py-1 rounded-lg  tracking-wide cursor-pointer hover:bg-black/20 transition-colors duration-300 ease-in-out  ">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MovieCard