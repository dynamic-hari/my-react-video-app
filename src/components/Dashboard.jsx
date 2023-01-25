import React from "react";
import MovieList from "./MovieList";
import { MOVIES } from "../data/movies";
const Dashboard = () => {
  return (
    <div className="container">
      <div className="movieListContainer">
        {MOVIES.map((movie) => {
          return <MovieList key={movie.id} movies={movie} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
