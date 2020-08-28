import React from "react";
import styles from "./UnderlinedButton.module.css";

const UnderlinedButton = (props) => {
  let position = "";
  let marginTop = "";

  switch (props.position) {
    case "right":
      position = styles.Right;
      break;
    default:
      position = styles.Left;
      break;
  }
  if (props.margin) {
    marginTop = styles.MarginTop;
  }

  return (
    <button
      className={[styles.UnderlinedButton, position, marginTop].join(" ")}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default UnderlinedButton;
