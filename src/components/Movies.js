import React from "react";
import { movies } from "../data";
import { v4 as uuid } from "uuid";

function Movies() {

  const moviesList = movies.map(movie => (
    <div key={uuid()} >{movie.title}{movie.time}
      <ul>
        {movie.genres.map(genre => (
          <li key={uuid()} >{genre}</li>
        ))}
      </ul>
    </div>
  ))

  return <div>
    <h1>Movies Page</h1>
    {moviesList}
  </div>;
}

export default Movies;
