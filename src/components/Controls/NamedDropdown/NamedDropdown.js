import React from "react";
import styles from "./NamedDropdown.module.css";
import { Arrow } from "../../../assets/icons";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

let options = [];

const NamedDropdown = (props) => {
  if (props.options && props.options) {
    options = props.options;
  }

  const defaultValue = props.options[0];
  return (
    <div className={styles.NamedDropdown}>
      {props.name && <span className={styles.Name}>{props.name + " :"}</span>}
      <Dropdown
        disabled={
          props.isEditModeAllowed !== undefined
            ? !props.isEditModeAllowed
            : false
        }
        onChange={props.onChange}
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
          props.chosenValue
            ? props.chosenValue + ""
            : props.description
            ? props.description
            : defaultValue
        }
        placeholder=". . ."
      />
    </div>
  );
};

export default NamedDropdown;
