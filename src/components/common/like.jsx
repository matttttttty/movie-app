import React from "react";
import propTypes from "prop-types";

const Like = ({ liked, onLike }) => {
  return (
    <i
      className={liked ? "fa fa-heart" : "fa fa-heart-o"}
      aria-hidden="true"
      onClick={onLike}
    ></i>
  );
};
Like.propTypes = { liked: propTypes.bool, onLike: propTypes.func };

export default Like;
