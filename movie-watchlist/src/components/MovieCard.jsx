import React from "react";

function MovieCard(props) {
  let { movie, addMovie, removeMovie, list } = props;
  let inWatchList = list.filter((mov) => {
    return mov.id === movie.id;
  });

  const button = inWatchList.length === 0 ? (
    <button onClick={() => addMovie(movie)}>Add to List</button>
    ) :(
    <button onClick={() => removeMovie(movie)}>Remove</button>
    )

  return (
    <div className="movie-card">
      <div>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
        <h3>{movie.original_title}</h3>
      </div>
      {button}
    </div>
  );
}

export default MovieCard;
