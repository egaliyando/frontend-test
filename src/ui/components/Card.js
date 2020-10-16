import React from "react";

const Card = (props) => {
  return <div className={props.className}>{props.content}</div>;
};

export default Card;
