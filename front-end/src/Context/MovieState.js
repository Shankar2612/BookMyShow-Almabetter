import {MovieContext} from "./MovieContext"
import { useState } from "react";

const MovieState = (props) => {

  return (
    <MovieContext.Provider >
      {props.children}
    </MovieContext.Provider>
  )

}
export default MovieState;