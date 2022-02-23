import React from "react";
import css from "./Input.module.css";

const Input = (props) => {
  return (
    <>
      <input
        className={css.input}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        readOnly={props.readOnly}
      >
        {props.children}
      </input>
    </>
  );
};

export default Input;
