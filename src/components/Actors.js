import React from "react";
import { actors } from "../data";
import { v4 as uuid } from "uuid";

function Actors() {

  const actorsList = actors.map(actor => (
    <div key={uuid()} >{actor.name}
      <ul>
        {
          actor.movies.map(movie => (<li key={uuid()}>{movie}</li>))
        }
      </ul>
    </div>))

  return <div>
    <h1>Actors Page</h1>  
    {actorsList}
  </div>;
}

export default Actors;
