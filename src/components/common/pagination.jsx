import React from "react";
import _ from "lodash";
import propTypes from "prop-types";

const Pagination = ({ currentPage, onPageChange, pages }) => {
  const items = _.range(1, pages + 1);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {items.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  currentPage: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired,
  pages: propTypes.number.isRequired,
};

export default Pagination;
