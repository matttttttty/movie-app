import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movie extends Component {
  state = { movies: getMovies() };

  handleClick = (movie) => {
    let movies = this.state.movies;
    movies = movies.filter((m) => m !== movie);
    this.setState({ movies });
  };

  renderMovies() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>NumberInStock</th>
            <th>DailyRentalRate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <button
                  onClick={() => this.handleClick(movie)}
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
  }

  render() {
    return (
      <div>
        {this.state.movies.length === 0 ? (
          <h2>there is no movie now.</h2>
        ) : (
          this.renderMovies()
        )}
      </div>
    );
  }
}

export default Movie;
