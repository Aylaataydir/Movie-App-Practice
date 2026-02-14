import React, { useContext } from 'react'
import MovieCard from '../components/MovieCard'
import HomeMovieList from '../components/HomeMovieList'
import Search from '../components/Search'
import MovieContext from '../context/MovieContext'

const Home = () => {

    const { movies } = useContext(MovieContext)

    return (
        <div>
            <div className='text-center mt-10 mb-15'>
                <Search />
            </div>
            <div>
                {movies.lengtg > 0 &&
                    <HomeMovieList />
                }
            </div>

        </div>
    )
}

export default Home