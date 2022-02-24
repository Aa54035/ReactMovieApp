import './App.css';
import React, { useState, useEffect } from 'react';
import MovieDisplay from './components/MovieDisplay';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';


function App() {

  // const [movies, setMovies] = useState(MovieDisplay);  // have Movies as Array instead of scaler values 
  const [movies, setMovies] = useState([]);  // have Movies as Array instead of scaler values 

  console.log(...movies);
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState([]);
  // ?S  is search criteria to check via Movie title 
  const getMovieRequest = async (searchValue) => {
    try {
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=ba643779`;
      const response = await fetch(url);
      const responseJSON = await response.json();

      if (responseJSON.Search) {
        setMovies(responseJSON.Search);
      }

    } catch (error) {

    }
  };

  useEffect(() => {
    getMovieRequest(searchValue)
  }, [searchValue]);

  const saveLocalStorage = (item) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(item));
  }

  
  const addFavMovies = (movie) => {
    const newFavMovielist = [...favourites, movie];
    setFavourites(newFavMovielist);
    saveLocalStorage(newFavMovielist);

  }

  const removeFavMovies = (movienametoremove) => {
    const newFavMovielist = favourites.filter(
      (item) => item.imdbID !== movienametoremove.imdbID
    );
    setFavourites(newFavMovielist);
    saveLocalStorage(newFavMovielist);
  }

  return (

    <div className="container-fluid movie-app">
      <h1><i className="fas fa-wordpress-simple">Movie list  </i></h1>

      <div className="row ds-flex mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}
        ></SearchBox>

      </div>

      <div className="row">
        <MovieList movies={movies} 
        handleFavouritesClick={addFavMovies}
          favComponents={AddFavourites}
        />


      </div>

      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favourits" />
      </div>
      <div className="row">
        <MovieList movies={favourites}
          handleFavouritesClick={removeFavMovies}
          favComponents={RemoveFavourites}

        />
      </div>
    </div >
  );
}

export default App;
