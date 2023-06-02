import React from 'react';
import MovieCard from './MovieCard';

function WatchList(props){
    let {list} = props;
    
    const movieDisplay = list.map((movie,index)=>{
        return <MovieCard movie={movie}/>
    });

    return <div className='watchlist'>
        <h1>My WatchList</h1>
        {movieDisplay}
    </div>
}

export default WatchList