import React from "react";
import { Link } from "react-router-dom";
import "../styles/MovieList.css";

const MovieList = ({ movies }) => {
  return (
    <div className="movieContainer">
      <Link to={`/${movies.title}/details`}>
        <div className="coverImage">
          <img
            src={movies.poster}
            width="420px"
            height="420px"
            alt={movies.title}
          />
        </div>
      </Link>
      <p className="movieName"> {movies.title}</p>
      <div className="infoColum">
        <span className="movieInfo">Year: {movies.year}</span>
        <span className="movieInfo">Run time: {movies.runtime}</span>
        <span className="movieInfo">Rating: {movies.rating}</span>
      </div>
    </div>
  );
};

export default MovieList;
