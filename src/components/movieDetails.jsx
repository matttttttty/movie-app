import React from "react";

const MovieDetail = ({ match }) => {
  console.log(match.params.id);
  return (
    <div>
      <h1>movie id: {match.params.id}</h1>
    </div>
  );
};

export default MovieDetail;
