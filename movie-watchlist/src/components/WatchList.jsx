import React from "react";
import MovieCard from "./MovieCard";

function WatchList(props) {
  let { list, removeMovie } = props;

  const movieDisplay = list.map((movie, index) => {
    return <MovieCard movie={movie} removeMovie={removeMovie} list={list} />;
  });

  return (
    <div className="watchlist">
      <h1>My WatchList</h1>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
}

export default WatchList;
