import React from "react";

import css from "./Button.module.css";

const Button = (props) => {
  const classHandler = (clName) => {
    if (clName === "primary") {
      const buttonStyle = css.primaryButton;
      return buttonStyle;
    } else if (clName === "secondary") {
      const buttonStyle = css.secondaryButton;
      return buttonStyle;
    } else if (clName === "outline") {
      const buttonStyle = css.outlineButton;
      return buttonStyle;
    } else if (clName === "salmon") {
      const buttonStyle = css.salmonButton;
      return buttonStyle;
    }
  };
  return (
    <>
      <button
        type={props.type}
        onClick={props.onClick}
        className={classHandler(props.className)}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
