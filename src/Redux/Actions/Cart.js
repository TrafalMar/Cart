import { actionTypes } from "./ActionTypes";

export const setOrders = (orders) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_CART,
    orders,
  });
  dispatch(recalculatePrice());
};

export const removeOrder = (orderId) => ({
  type: actionTypes.REMOVE_ORDER,
  orderId,
});

export const defferOrder = (orderId) => ({
  type: actionTypes.DEFFER_ORDER,
  orderId,
});

export const changeOnDropdown = (orderId, chosenData, type) => (dispatch) => {
  dispatch({
    type: actionTypes.DROPDOWN_CHANGE,
    orderId,
    chosenData,
    chosenType: type,
  });
  dispatch(recalculatePrice(orderId));
};

export const toggleEditMode = (orderId) => ({
  type: actionTypes.TOGGLE_EDIT_MODE,
  orderId,
});

export const addCharacteristic = (orderId, chosenData) => ({
  type: actionTypes.ADD_CHARACTERISTIC,
  orderId,
  chosenData,
});

export const editCharacteristic = (orderId, charId, chosenData) => (
  dispatch
) => {
  dispatch({
    type: actionTypes.EDIT_CHARACTERISTIC,
    orderId,
    charId,
    chosenData,
  });
  dispatch(recalculatePrice(orderId));
};

export const changeCommentaries = (orderId, input) => ({
  type: actionTypes.CHANGE_COMMENTARIES,
  orderId,
  input,
});

const recalculatePrice = (orderId) => ({
  type: actionTypes.RECALCULATE_PRICE,
  orderId,
});
