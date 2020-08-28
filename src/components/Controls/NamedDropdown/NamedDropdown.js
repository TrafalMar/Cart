import React from "react";
import styles from "./NamedDropdown.module.css";
import { FaAngleDown } from "react-icons/fa";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

let options = [];

const NamedDropdown = (props) => {
  if (props.options && props.options) {
    options = props.options;
  }

  return (
    <div className={styles.NamedDropdown}>
      {props.name && <span className={styles.Name}>{props.name + ":"}</span>}
      <Dropdown
        onChange={props.onChange}
        className={styles.Root}
        controlClassName={styles.Control}
        placeholderClassName={styles.Placeholder}
        // arrowClassName={styles.Arrow}
        menuClassName={styles.Menu}
        arrowOpen={
          <span className={styles.Arrow}>
            <FaAngleDown
              style={{ transform: "rotate(180deg)", transition: "0.4s" }}
            />
          </span>
        }
        arrowClosed={
          <span className={styles.Arrow}>
            <FaAngleDown
              style={{ transform: "rotate(0deg)", transition: "0.4s" }}
            />
          </span>
        }
        options={options}
        value={props.chosenValue && props.chosenValue + ""}
        placeholder=". . ."
      />
    </div>
  );
};

export default NamedDropdown;
