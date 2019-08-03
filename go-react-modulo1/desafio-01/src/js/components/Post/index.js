import React, { Fragment } from "react";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader";
import PostText from "./PostText";

import "./style.css";

const Post = props => {
  return (
    <div className="postCard">
      <PostHeader
        picture={props.picture}
        name={props.name}
        timePost={props.timePost}
      />
      <PostText postText={props.postText} />
    </div>
  );
};

export default Post;
