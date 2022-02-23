import React from "react";
import css from "./Card.module.css";

const Card = (props) => {
  return (
    <>
      <div className={css.container}>{props.children}</div>
    </>
  );
};

export default Card;
