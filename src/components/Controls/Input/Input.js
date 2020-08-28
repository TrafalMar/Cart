import React from "react";
import styles from "./Input.module.css";

const NamedInput = (props) => {
  return (
    <div className={styles.NamedInput}>
      <label>{props.name ? props.name + ":" : null}</label>
      <input {...props} name={props.name} value={props.value} />
    </div>
  );
};

export default NamedInput;
