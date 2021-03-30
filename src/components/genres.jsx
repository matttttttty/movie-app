import React from "react";

const Genres = ({
  genres,
  currentGenre,
  valueProperty,
  nameProperty,
  onGenreChange,
}) => {
  return (
    <ul className="list-group">
      {genres.map((g) => (
        <li
          key={g[valueProperty]}
          className={
            g[nameProperty] === currentGenre
              ? "list-group-item active"
              : "list-group-item"
          }
          aria-current="true"
          onClick={() => onGenreChange(g)}
        >
          {g.name}
        </li>
      ))}
    </ul>
  );
};
Genres.defaultProps = {
  valueProperty: "_id",
  nameProperty: "name",
};

export default Genres;
