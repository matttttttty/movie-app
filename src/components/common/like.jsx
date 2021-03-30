import React from "react";

const Like = (props) => {
  return (
    <i
      className={props.liked ? "fa fa-heart" : "fa fa-heart-o"}
      aria-hidden="true"
      onClick={props.onLike}
    ></i>
  );
};

export default Like;
