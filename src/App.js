import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import axios from 'axios';
import AddMovieForm from './components/AddMovieForm';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error,setError] = useState(null)
  const [refresh , setrefresh ] = useState(false);

  const refreshhandler = ()=>{
    setrefresh(true)
  }

  

 const fetchMoviesHandler = useCallback(async ()=> {
    
    try{
      setIsLoading(true);
      setError(null)
      const response = await axios.get('https://crudcrud.com/api/98f1e542235b42ce91590b12cb4d721f/movies'); 
      console.log(response)
      if (!response){
        throw new error('something went wrong')
      }
      const data = response.data
      const transformedMovies = data.map((movieData) => {

        return {
          id: movieData._id,
          title: movieData.title,
          openingText : movieData.openingtext,
          releaseDate:  movieData.releaseDate
        };
      });
      setMovies(transformedMovies);
      setrefresh(false)
  
    }
    catch(error){
      console.log(error)
setError(error.message)
    }
    setIsLoading(false);
  },[error])
    
  useEffect(()=>{fetchMoviesHandler()},[fetchMoviesHandler,refresh])

  return (
    <React.Fragment>
      <section>
        <AddMovieForm/>
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} onClick={refreshhandler}/>}
        {isLoading && <p>Loading....</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App