import React from "react";
import { Link } from "react-router-dom";
import Like from "./like";

const Tbody = ({ movies, onLiked, onDelete }) => {
  return (
    <tbody>
      {movies.map((movie) => (
        <tr key={movie._id}>
          <td>
            <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
          </td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td>
            <Like onLike={() => onLiked(movie)} liked={movie.liked} />
          </td>
          <td>
            <button onClick={() => onDelete(movie)} className="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Tbody;
