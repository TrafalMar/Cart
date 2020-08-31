import React from "react";
import styles from "./Order.module.css";

import { FaTimes } from "react-icons/fa";
import { TimesLight, TimesNormal } from "../../../assets/icons";

import NamedDropdown from "../../Controls/NamedDropdown/NamedDropdown";
import NamedInput from "../../Controls/Input/Input";
import UnderlinedButton from "../../Controls/UnderlinedButton/UnderlinedButton";
import Attachments from "./Attachments/Attachments";

import { connect } from "react-redux";
import * as action from "../../../Redux/Actions/Index";

const Order = (props) => {
  const {
    orderData: od,
    onRemove,
    changeOnDropdown,
    toggleEditMode,
    // addCharacteristic,
    editCharacteristic,
    changeCommentaries,
    onDeffereToggle,
  } = props;

  const dropdownChangeHandler = (e, orderId, type) => {
    const chosenData = { label: e.label, value: e.value };
    changeOnDropdown(orderId, chosenData, type);
  };

  const getCharOptions = (sizes) => {
    const initialOptions = [{ label: "Без характеристик", value: -1 }];
    if (sizes.length === 0) {
      return [
        ...initialOptions,
        ...od.additionalCharacteristics.filter((char) => char.data.size === 0),
      ];
    } else {
      return [
        ...initialOptions,
        ...od.additionalCharacteristics.filter(
          (char) => char.data.size === od.chosenSize.value
        ),
      ];
    }
  };

  let charOptions = getCharOptions(od.sizes);

  return (
    <div className={styles.Order}>
      <div className={styles.imageSection}>
        <img className={styles.Img} alt={od.id} src={od.image}></img>
      </div>
      <div className={styles.InfoSection}>
        <div className={styles.PollardiSection}>
          <span>{od.type}</span>
          <span className={styles.LongDash} />
          <span>{od.typeValue}</span>
          <button
            onClick={onRemove}
            className={[styles.CloseButton, styles.IconButton].join(" ")}
          >
            {TimesLight}
          </button>
        </div>
        <div className={styles.NamePriceContainer}>
          <div className={styles.Name}>{od.name}</div>
          <div className={styles.Price}>₴{od.price}</div>
        </div>
        <div className={styles.dropDownContainer}>
          {od.sizes.length !== 0 && (
            <NamedDropdown
              isEditModeAllowed={od.editMode}
              onChange={(e) => dropdownChangeHandler(e, od.id, "size")}
              name="Размер"
              options={od.sizes}
              chosen={od.chosenSize}
            />
          )}

          {od.colors.length !== 0 && (
            <NamedDropdown
              isEditModeAllowed={od.editMode}
              onChange={(e) => dropdownChangeHandler(e, od.id, "color")}
              name="Цвет"
              options={od.colors}
              chosen={od.chosenColor}
            />
          )}

          {od.counts.length !== 0 && (
            <NamedDropdown
              isEditModeAllowed={od.editMode}
              onChange={(e) => dropdownChangeHandler(e, od.id, "count")}
              name="Количество"
              options={od.counts}
              chosen={od.chosenCount}
            />
          )}
        </div>
        <button
          className={styles.EditToggler}
          onClick={() => toggleEditMode(od.id)}
        >
          {!od.editMode
            ? "Редактировать дополнительные характеристики"
            : "Сохранить"}
        </button>
        <div className={styles.AdditionalFeatures}>
          {od.additionalCharacteristics.length !== 0 && (
            <NamedDropdown
              isEditModeAllowed={od.editMode}
              onChange={(e) =>
                dropdownChangeHandler(e, od.id, "characteristic")
              }
              options={charOptions}
              placeholder={"Дополнительные характеристики"}
              chosen={od.chosenCharacteristic}
            />
          )}
        </div>
        <div className={styles.Commentaries}>
          <NamedInput
            isEditModeAllowed={od.editMode}
            orderId={od.id}
            onChange={(e) => changeCommentaries(od.id, e.target.value)}
            name="Комментарий"
            placeholder="Ваш коментарий"
            value={od.commentaries}
          />
        </div>
        <Attachments isEditModeAllowed={od.editMode} orderId={od.id} />
        <div className={styles.OrderFooter}>
          <UnderlinedButton onClick={onDeffereToggle} position="right">
            {!od.isDeferred ? "Отложить покупку" : "Вернуть в корзину"}
          </UnderlinedButton>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeOnDropdown: (orderId, newData, type) =>
    dispatch(action.changeOnDropdown(orderId, newData, type)),
  toggleEditMode: (orderId) => dispatch(action.toggleEditMode(orderId)),
  addCharacteristic: (orderId, chosenData) =>
    dispatch(action.addCharacteristic(orderId, chosenData)),
  editCharacteristic: (orderId, charId, chosenData) =>
    dispatch(action.editCharacteristic(orderId, charId, chosenData)),
  changeCommentaries: (orderId, input) =>
    dispatch(action.changeCommentaries(orderId, input)),
});

export default connect(null, mapDispatchToProps)(Order);
