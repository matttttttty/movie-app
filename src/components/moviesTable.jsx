import React from "react";
import Like from "./common/like";

const MoviesTable = (props) => {
  const { movies, onLiked, onDelete } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>NumberInStock</th>
          <th>DailyRentalRate</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like onLike={() => onLiked(movie)} liked={movie.liked} />
            </td>
            <td>
              <button
                onClick={() => onDelete(movie)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
