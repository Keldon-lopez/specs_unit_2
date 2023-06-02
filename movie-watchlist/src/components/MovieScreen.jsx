import React from 'react';
import MovieCard from './MovieCard';

function MovieScreen(props){
    let {movieList, page, setPage} = props;

    const movieDisplay = movieList.map((movie,index)=>{
        return <MovieCard movie={movie}/>
    });

    return (
        <div className='page'>
            <h1>Keldon's Movie Theatre</h1>
            <h3>Add a movie to your watch list</h3>
            <div className='movie-container'>
                {movieDisplay}
            </div>
        </div>
    )
}

export default MovieScreen