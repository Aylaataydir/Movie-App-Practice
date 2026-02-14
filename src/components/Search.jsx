import React, { useContext } from 'react'
import MovieContext from '../context/MovieContext'
import { CgLayoutGrid } from 'react-icons/cg'

const Search = () => {

    const {setQuery, query} = useContext(MovieContext)

   console.log(query)

    return (
        <div>
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
                <input 
                onChange={(e) => setQuery(e.target.value) }
                type="search" placeholder="Search" />
            </label>
        </div>
    )
}

export default Search