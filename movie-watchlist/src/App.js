import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


import Header from './components/Header'
import MovieScreen from './components/MovieScreen';
import WatchList from './components/WatchList';



function App() {
  const [ movieList,setMovieList ] = useState([]);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  const addMovie = (movie) => setList([...list, movie]);

  const getData = () => {
    axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
        .then((res) => {
            setMovieList(res.data.results);
        });
  }

  useEffect(() => {
    getData();
}, [page]);

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <main>
        <MovieScreen 
          addMovie={addMovie}
          movieList={movieList}
          page={page}
          setPage={setPage}
          list={list}
        />
        <WatchList 
          list={list}
        />
      </main>
    </div>
  );
}

export default App;
