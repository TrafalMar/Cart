import React from "react";
import styles from "./Input.module.css";

const NamedInput = (props) => {
  const { name, value, onChange, isEditModeAllowed } = props;

  return (
    <div className={styles.NamedInput}>
      <label>{name ? name + ":" : null}</label>
      <input
        disabled={isEditModeAllowed !== undefined ? !isEditModeAllowed : false}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default NamedInput;
