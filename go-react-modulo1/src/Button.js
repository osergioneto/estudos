import React from "react";

const Button = props => {
  return <button onClick={props.onClick}>{props.children}</button>;
};

Button.defaultProps = {
  children: "Salvar"
};

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Button;
