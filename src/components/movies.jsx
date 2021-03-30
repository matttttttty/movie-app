import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Genres from "./genres";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";

class Movie extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    currentGenre: "AllGenres",
  };

  componentDidMount() {
    const movies = getMovies();
    const genres = getGenres();
    this.setState({ movies, genres });
  }

  handleDelete = (movie) => {
    let movies = this.state.movies;
    movies = movies.filter((m) => m !== movie);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreChange = (genre) => {
    let currentGenre = genre.name;

    this.setState({ currentGenre, currentPage: 1 });
  };

  render() {
    const genres = [{ _id: 0, name: "AllGenres" }, ...this.state.genres];
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      currentGenre,
    } = this.state;
    const filteredMovies =
      currentGenre === "AllGenres"
        ? allMovies
        : allMovies.filter((m) => m.genre.name === currentGenre);
    const movies = paginate(filteredMovies, currentPage, pageSize);

    return (
      <div className="container">
        <div className="row">
          <div className="col-xm m-3">
            <Genres
              onGenreChange={this.handleGenreChange}
              currentGenre={this.state.currentGenre}
              genres={genres}
            />
          </div>
          <div className="">
            <div>
              {this.state.movies.length === 0 ? (
                <h2>there is no movie now.</h2>
              ) : (
                <MoviesTable
                  movies={movies}
                  onLike={this.handleLike}
                  onDelete={this.handleDelete}
                  onLiked={this.handleLike}
                />
              )}
            </div>
            <div>
              <Pagination
                currentPage={this.state.currentPage}
                onPageChange={this.handlePageChange}
                pages={Math.ceil(filteredMovies.length / this.state.pageSize)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
