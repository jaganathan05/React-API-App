import React, { useState } from 'react';
import Loader from './UI/Loader';
import MoviesList from './components/MoviesList';
import './App.css';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error,setError] = useState(null)

  async function fetchMoviesHandler() {
    
    try{
      setIsLoading(true);
      setError(null)
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos'); 
      console.log(response)
      if (!response){
        throw new error('something went wrong')
      }
      const data = response.data
      const transformedMovies = data.map((movieData) => {
        return {
          id: movieData.id,
          title: movieData.title
        };
      });
      setMovies(transformedMovies);
      
  
    }
    catch(error){
      console.log(error)
setError(error.message)
    }
    setIsLoading(false);
  }
    

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {isLoading && <p>Loading....</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App