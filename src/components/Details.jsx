import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MoviesContext } from "../App";
import { MOVIES } from "../data/movies";
import Player from "./Player";

const Details = () => {
  let { title } = useParams();
  const { onOpenModal } = useContext(MoviesContext);
  const movieDetail = MOVIES.find((obj) => {
    return obj.title === title;
  });
  return (
    <div className="detailsPage">
      <div className="detailImage">
        <img
          src={movieDetail.poster}
          width="500px"
          height="500px"
          alt={movieDetail.title}
        />
      </div>
      <div className="detailButton">
        <button onClick={onOpenModal}>Play Trailer</button>
      </div>
      <Player trailer={movieDetail.trailer} />
    </div>
  );
};

export default Details;
