import React from 'react'

const MovieCard = () => {
    return (
        <div className="card bg-base-100 w-35 md:w-40 lg:w-50  shadow-xl group border border-base-200">
            <figure className="relative overflow-hidden">
                <img
                    src="https://img.haber3.com/rcman/Cw681h850q95gc/storage/files/images/2022/12/08/3-CBUB.jpg"
                    alt="Movie"
                    className="transition-transform duration-300 group-hover:scale-105 "
                />

                {/* Sağ Üst İkon Grubu */}
                <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                    {/* Watchlist İkonu (Ekleme/Kaydetme) */}
                    <button className="btn btn-circle btn-xs bg-black/60 border-none text-white hover:bg-orange-500 tooltip tooltip-left" data-tip="Add to Watchlist">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                    </button>

                    {/* Watched İkonu (Check/Tamamlandı) */}
                    <button className="btn btn-circle btn-xs bg-black/60 border-none text-white hover:bg-green-500 tooltip tooltip-left" data-tip="Mark as Watched">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </button>

                    {/* Favorite İkonu (Kalp) */}
                    <button className="btn btn-circle btn-xs bg-black/60 border-none text-white hover:bg-red-500 tooltip tooltip-left" data-tip="Favorite">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                </div>
            </figure>

            <div className="card-body p-4">
                <h2 className="card-title text-sm font-bold truncate">Inception</h2>
                <div className="flex justify-between items-center mt-1">
                    <span className="text-xs text-gray-400">2010 • Sci-Fi</span>
                    <div className="badge badge-outline badge-sm text-orange-400 border-orange-400">8.8</div>
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