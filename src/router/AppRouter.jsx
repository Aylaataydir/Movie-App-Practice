import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Watchlist from '../pages/Watchlist'
import Watched from '../pages/Watched'
import Favorites from '../pages/Favorites'
import { AuthProvider } from "../context/AuthContext"
import Signup from "../pages/Singup"
import Login from '../pages/Login'
import MovieDetails from '../components/MovieDetails'
import PrivateRouter from './PrivateRouter'


const AppRouter = () => {
    
    return (
        <BrowserRouter>
            <AuthProvider>
                <Navbar />
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/watchlist' element={<Watchlist />} />
                    <Route path='/watched' element={<Watched />} />
                    <Route path='/favorites' element={<Favorites />} />
                    <Route path='/signup' element={<Signup/>} />
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/:category/movie-detail/:title' element={<PrivateRouter/>}>
                        <Route path='' element={<MovieDetails/>} />
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default AppRouter