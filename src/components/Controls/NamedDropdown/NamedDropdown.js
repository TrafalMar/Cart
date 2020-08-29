import React from "react";
import styles from "./NamedDropdown.module.css";
import { Arrow } from "../../../assets/icons";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const NamedDropdown = (props) => {
  const {
    isEditModeAllowed,
    name,
    options,
    onChange,
    description,
    chosenValue,
  } = props;

  const defaultValue = options[0];
  return (
    <div className={styles.NamedDropdown}>
      {name && <span className={styles.Name}>{name + " :"}</span>}
      <Dropdown
        disabled={isEditModeAllowed !== undefined ? !isEditModeAllowed : false}
        onChange={onChange}
        className={styles.Root}
        controlClassName={styles.Control}
        placeholderClassName={styles.Placeholder}
        // arrowClassName={styles.Arrow}
        menuClassName={styles.Menu}
        arrowOpen={
          <span
            className={styles.Arrow}
            style={{ transform: "rotate(180deg)", transition: "0.4s" }}
          >
            {Arrow}
          </span>
        }
        arrowClosed={
          <span
            className={styles.Arrow}
            style={{ transform: "rotate(0deg)", transition: "0.4s" }}
          >
            {Arrow}
          </span>
        }
        options={options}
        value={
          chosenValue
            ? chosenValue + ""
            : description
            ? description
            : defaultValue
        }
        placeholder=". . ."
      />
    </div>
  );
};

export default NamedDropdown;
