import React from "react";
import '../App.css';

function MovieItem({movie}){
    return (
        <li className="collection-item">
            <p>{movie.title} - {movie.year} - {movie.language}</p>
        </li>
    );
}

export default MovieItem;