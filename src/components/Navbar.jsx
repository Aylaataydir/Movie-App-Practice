import React from 'react'
import { TiThMenu } from "react-icons/ti";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='mx-2 md:mx-4 lg:mx-8'>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <TiThMenu className='text-2xl' />
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/watchlist">Watchlist</NavLink></li>
                            <li><NavLink to="/watched">Watched</NavLink></li>
                            <li><NavLink to="/favorites">Favorites</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">MOVIE APP</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink
                         className={({isActive}) => isActive ? "border-b-2 border-orange-500" : ""}
                         to="/watchlist ">Watchlist</NavLink></li>
                        <li><NavLink to="/watched">Watched</NavLink></li>
                        <li><NavLink to="/favorites">Favorites</NavLink></li>
                    </ul>
                </div>

                <div className="navbar-end space-x-2 md:space-x-4">
                    <label className="flex cursor-pointer gap-2 scale-75">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>
                    <div className="avatar">
                        <div className="ring- ring-offset-base-100 w-7 rounded-full ring-1 ring-offset-2">
                            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar