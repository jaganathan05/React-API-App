import React from 'react';

import classes from './Movie.module.css';
import { Button } from 'react-bootstrap';

const Movie = (props) => {

  const deletemovie = async(id)=>{
    console.log(`https://crudcrud.com/api/98f1e542235b42ce91590b12cb4d721f/movies/${id}`)
    const response = await fetch (`https://crudcrud.com/api/98f1e542235b42ce91590b12cb4d721f/movies/${id}`,
  {
    method: 'DELETE'

  })
  if (response){
    props.onClick()
  }
  }
  return (

    <li key={props.id} className={classes.movie} >
      {console.log(props)}
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <Button className='btn-danger' onClick={deletemovie.bind(null,props.id)}>Delete</Button>
    </li>
  );
};

export default Movie;