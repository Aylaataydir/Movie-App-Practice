import React from 'react'
import MovieCard from '../components/MovieCard'
import HomeMovieList from '../components/HomeMovieList'
import Search from '../components/Search'

const Home = () => {
    return (
        <div>
            <div className='text-center mt-10 mb-15'>
             <Search/>
            </div>
            <div>
                <HomeMovieList />
            </div>

        </div>
    )
}

export default Home