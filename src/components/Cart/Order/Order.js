import React from "react";
import styles from "./Order.module.css";

import { FaTimes } from "react-icons/fa";
import { paperClip } from "../../../assets/icons";

import NamedDropdown from "../../Controls/NamedDropdown/NamedDropdown";
import NamedInput from "../../Controls/Input/Input";
import UnderlinedButton from "../../Controls/UnderlinedButton/UnderlinedButton";

import { connect } from "react-redux";
import * as action from "../../../Redux/Actions/Index";

const Order = (props) => {
  const { orderData: od, onRemove, changeOnDropdown, toggleEditMode } = props;

  const dropdownChangeHandler = (e, orderId, type) => {
    const chosenData = { label: e.label, value: e.value };
    changeOnDropdown(orderId, chosenData, type);
  };

  return (
    <div className={styles.Order}>
      <div className={styles.imageSection}>
        <img className={styles.Img} alt={od.name} src={od.image}></img>
      </div>
      <div className={styles.InfoSection}>
        <div className={styles.PollardiSection}>
          <span>{od.type}</span>
          <span className={styles.LongDash} />
          {/* <span style={{ padding: "0 10px" }}> --- </span> */}
          <span>{od.typeValue}</span>
          <button
            onClick={onRemove}
            className={[styles.CloseButton, styles.IconButton].join(" ")}
          >
            <FaTimes />
          </button>
        </div>
        <div className={styles.NamePriceContainer}>
          <div className={styles.Name}>{od.name}</div>
          <div className={styles.Price}>₴{od.price}</div>
        </div>
        <div className={styles.dropDownContainer}>
          <NamedDropdown
            isEditModeAllowed={od.editMode}
            onChange={(e) => dropdownChangeHandler(e, od.id, "size")}
            name="Размер"
            options={od.sizes}
            chosenValue={od.chosenSize.label}
          />
          <NamedDropdown
            isEditModeAllowed={od.editMode}
            onChange={(e) => dropdownChangeHandler(e, od.id, "color")}
            name="Цвет"
            options={od.colors}
            chosenValue={od.chosenColor.label}
          />
          <NamedDropdown
            isEditModeAllowed={od.editMode}
            onChange={(e) => dropdownChangeHandler(e, od.id, "count")}
            name="Количество"
            options={od.counts}
            chosenValue={od.chosenCount.label}
          />
        </div>
        <button
          className={styles.EditToggler}
          onClick={() => toggleEditMode(od.id)}
        >
          {!od.editMode
            ? "Редактировать дополнительные характеристики"
            : "Зберегти"}
        </button>
        <div className={styles.AdditionalFeatures}>
          {od.additionalFeatures.selectedOptions.length ? (
            od.additionalFeatures.selectedOptions.map((feature, index) => (
              <NamedDropdown
                name={feature.name}
                description={feature.description}
                key={feature.name + "." + index}
                options={feature.options ? feature.options : []}
              ></NamedDropdown>
            ))
          ) : (
            <NamedDropdown
              name=""
              description={"Дополнительне характеристики..."}
              options={
                od.additionalFeatures.options
                  ? od.additionalFeatures.options
                  : []
              }
            ></NamedDropdown>
          )}
        </div>
        <div className={styles.Commentaries}>
          <NamedInput
            name="Комментарий"
            placeholder="Ваш коментарий"
            value={od.commentaries}
          />
        </div>
        <div className={styles.OrderFooter}>
          <div className={styles.attachmentsSection}>
            <button className={styles.IconButton}>{paperClip}</button>
          </div>
          <UnderlinedButton position="right">Отложить покупку</UnderlinedButton>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeOnDropdown: (orderId, newData, type) =>
    dispatch(action.changeOnDropdown(orderId, newData, type)),
  toggleEditMode: (orderId) => dispatch(action.toggleEditMode(orderId)),
});

export default connect(null, mapDispatchToProps)(Order);
