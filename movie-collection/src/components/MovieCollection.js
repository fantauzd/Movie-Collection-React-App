import React from "react";
import MovieItem from "./MovieItem";
// import '../App.css';

function MovieCollection({movies}){
    console.log(movies)
    return (
        <div className="collection-container">
            {movies.map( (movie, i) => <MovieItem movie={movie} key={i} /> )}
        </div>
    );  
}

export default MovieCollection;