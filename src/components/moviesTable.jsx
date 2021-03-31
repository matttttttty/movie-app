import React, { Component } from "react";
import Tbody from "./common/tbody";
import Thead from "./common/thead";

class MoviesTable extends Component {
  render() {
    const columns = [
      { label: "Title", path: "title" },
      { label: "Genres", path: "genre.name" },
      { label: "NumberInStock", path: "numberInStock" },
      { label: "DailyRentalRate", path: "dailyRentalRate" },
      { key: "like" },
      { key: "Delete" },
    ];
    const { movies, onLiked, onDelete, sortColumn, onSort } = this.props;
    return (
      <table className="table">
        <Thead sortColumn={sortColumn} columns={columns} onSort={onSort} />
        <Tbody movies={movies} onLiked={onLiked} onDelete={onDelete} />
      </table>
    );
  }
}

export default MoviesTable;
