import React from "react";
import '../App.css';
import Bookmark from "./Bookmark";
import Counter from "./Counter";

function MovieItem({movie}){
    return (
        <div className="collection-item">
            <h3>{movie.title}</h3>
            <p>{movie.year} - {movie.language}</p>
            <p><Bookmark /><Counter /></p>
        </div>
    );
}

export default MovieItem;