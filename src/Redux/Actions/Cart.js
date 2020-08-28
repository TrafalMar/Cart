import { actionTypes } from "./ActionTypes";

export const setOrders = (orders) => ({
  type: actionTypes.SET_CART,
  orders,
});

export const removeOrder = (orderId) => ({
  type: actionTypes.REMOVE_ORDER,
  orderId,
});

export const defferOrder = (orderId) => ({
  type: actionTypes.DEFFER_ORDER,
  orderId,
});

export const changeOnDropdown = (orderId, chosenData, type) => ({
  type: actionTypes.DROPDOWN_CHANGE,
  orderId,
  chosenData,
  chosenType: type,
});

export const toggleEditMode = (orderId) => ({
  type: actionTypes.TOGGLE_EDIT_MODE,
  orderId,
});
