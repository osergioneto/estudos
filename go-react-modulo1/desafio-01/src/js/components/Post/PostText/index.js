import React, { Fragment } from "react";
import PropTypes from "prop-types";

import "./style.css";

const PostText = props => {
  return <p className="postText">{props.postText}</p>;
};

export default PostText;
