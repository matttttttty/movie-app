import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movie extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    currentGenre: "AllGenres",
    sortColumn: { path: "title", order: "asc" },
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

  handleAddNewMovie = () => {
    console.log("adding");
    this.props.history.push("/movie");
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  getData = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      currentGenre,
      sortColumn,
    } = this.state;
    const filteredMovies =
      currentGenre === "AllGenres"
        ? allMovies
        : allMovies.filter((m) => m.genre.name === currentGenre);
    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );
    const movies = paginate(sortedMovies, currentPage, pageSize);
    return { movies, filteredMovies };
  };

  render() {
    const genres = [{ _id: "", name: "AllGenres" }, ...this.state.genres];
    const { pageSize, currentPage, sortColumn } = this.state;

    const { movies, filteredMovies } = this.getData();

    return (
      <div className="container">
        <div className="row">
          <div className="col-xm m-3">
            <ListGroup
              onItemChange={this.handleGenreChange}
              selectItem={this.state.currentGenre}
              items={genres}
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
                  onSort={this.handleSort}
                  sortColumn={sortColumn}
                />
              )}
            </div>
            <div>
              <Pagination
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
                pages={Math.ceil(filteredMovies.length / pageSize)}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleAddNewMovie}
            >
              New Movie
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
