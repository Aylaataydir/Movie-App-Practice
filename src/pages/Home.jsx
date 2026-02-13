import React from 'react'
import MovieCard from '../components/MovieCard'
import HomeMovieList from '../components/HomeMovieList'

const Home = () => {
    return (
        <div>
            <div className='text-center mt-10 mb-5'>
                <label className="input focus-within:outline-0">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" placeholder="Search" />
                </label>
            </div>
            <div className='mx-auto'>
                <HomeMovieList />
            </div>

        </div>
    )
}

export default Home