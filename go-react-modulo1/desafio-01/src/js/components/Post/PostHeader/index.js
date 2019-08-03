import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./style.css";

const PostHeader = props => {
  return (
    <div className="postHeader-container">
      <div className="postHeader-profile">
        <img srcSet={props.picture} />
      </div>
      <div className="postHeader-details">
        <h3 className="postHeader-name" children={props.name} />
        <p className="postHeader-timepost" children={props.timePost} />
      </div>
    </div>
  );
};

export default PostHeader;
