import { actionTypes } from "../Actions/ActionTypes";

const initialState = {
  orders: [],
  activeOrdersCount: 0,
  deferredOrdersCount: 0,
};

const countOrders = (newOrders) => {
  let activeOrdersCount = 0;
  for (let order of newOrders) {
    activeOrdersCount = !order.isDeferred
      ? activeOrdersCount + 1
      : activeOrdersCount;
  }

  const deferredOrdersCount = newOrders.length - activeOrdersCount;

  return { activeOrdersCount, deferredOrdersCount };
};

const countSinglePrice = (order) => {
  let price = 0;

  if (order.chosenSize.data) {
    price = parseInt(order.chosenSize.data);
  } else {
    price = parseInt(order.defaultPrice);
  }

  if (order.chosenColor.data) {
    price += parseInt(order.chosenColor.data);
  }

  if (order.selectedCharacteristics.length) {
    for (let char of order.selectedCharacteristics) {
      price += parseInt(char.data);
    }
  }

  if (order.chosenCount && order.chosenCount.data) {
    price *= order.chosenCount.data;
  }

  return Math.floor(price);
};

const recalculatePrice = (state, action) => {
  const { orderId } = action;

  let newOrders = [...state.orders];

  let price = 0;

  if (orderId !== undefined) {
    const order = newOrders.find((order) => order.id === orderId);

    price = countSinglePrice(order);

    newOrders.find((order) => order.id === orderId).price = price;
  } else {
    for (let order of newOrders) {
      price = countSinglePrice(order);

      order.price = price;
    }
  }

  return { ...state, orders: newOrders };
};

const setCart = (state, action) => {
  const { orders } = action;

  const newOrders = [...orders];

  for (let order of newOrders) {
    order.price = countSinglePrice(order);
  }

  return { orders: newOrders, ...countOrders(orders) };
};

const removeOrder = (state, action) => {
  const { orderId } = action;

  let newOrders = [...state.orders];

  newOrders = state.orders.filter((order) => order.id !== orderId);

  return {
    ...state,
    orders: newOrders,
    ...countOrders(newOrders),
  };
};

const defferOrder = (state, action) => {
  console.log("Deffer order");
};

const changeOnDropdown = (state, action) => {
  const { orderId, chosenData, chosenType } = action;

  let newOrders = [...state.orders];
  const order = newOrders.find((order) => order.id === orderId);
  let selectionData = null;
  switch (chosenType) {
    case "size":
      selectionData = order.sizes.find(
        (size) => size.value === chosenData.value
      ).data;
      order.chosenSize = { ...chosenData, data: selectionData };
      break;
    case "color":
      selectionData = order.colors.find(
        (color) => color.value === chosenData.value
      ).data;
      order.chosenColor = { ...chosenData, data: selectionData };
      break;
    case "count":
      selectionData = order.counts.find(
        (count) => count.value === chosenData.value
      ).data;
      order.chosenCount = { ...chosenData, data: selectionData };
      break;
    default:
      break;
  }

  return {
    ...state,
    orders: newOrders,
    ...countOrders(newOrders),
  };
};

const toggleEditMode = (state, action) => {
  const { orderId } = action;

  let newOrders = [...state.orders];
  const editMode = newOrders.find((order) => order.id === orderId).editMode;

  newOrders.find((order) => order.id === orderId).editMode = !editMode;

  return { ...state, orders: newOrders };
};

// const addCharacteristic = (state, action) => {
//   const { orderId, chosenData } = action;

//   let newOrders = [...state.orders];
//   const order = newOrders.find((order) => order.id === orderId);

//   const selectionData = order.additionalCharacteristics.find(
//     (addChar) => addChar.value === chosenData.value
//   ).data;

//   const newChar = { ...chosenData, data: selectionData };

//   let isNotDublicate = 1;

//   for (let char of order.selectedCharacteristics) {
//     if (char.value === newChar.value) {
//       isNotDublicate *= 0;
//     }
//   }

//   if (isNotDublicate) {
//     order.selectedCharacteristics.unshift(newChar);
//   }

//   return { ...state, orders: newOrders };
// };

const editCharacteristic = (state, action) => {
  const { orderId, charId, chosenData } = action;

  let newOrders = [...state.orders];
  const order = newOrders.find((order) => order.id === orderId);

  const selectionData = order.additionalCharacteristics.find(
    (addChar) => addChar.value === chosenData.value
  ).data;

  const newChar = { ...chosenData, data: selectionData };

  let isNotDuplicate = 1;

  for (let char of order.selectedCharacteristics) {
    if (char.value === newChar.value) {
      isNotDuplicate *= 0;
    }
  }

  if (isNotDuplicate) {
    order.selectedCharacteristics = order.selectedCharacteristics.filter(
      (char) => char.value !== charId
    );
    order.selectedCharacteristics.unshift(newChar);
  } else {
    console.log("There is duplicate");
  }

  return { ...state, orders: newOrders };
};

const changeCommentaries = (state, action) => {
  const { orderId, input } = action;
  const newOrders = [...state.orders];

  newOrders.find((order) => order.id === orderId).commentaries = input;

  return { ...state, orders: [...newOrders] };
};

const Cart = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CART:
      return setCart(state, action);
    case actionTypes.REMOVE_ORDER:
      return removeOrder(state, action);
    case actionTypes.DEFFER_ORDER:
      return defferOrder(state, action);
    case actionTypes.DROPDOWN_CHANGE:
      return changeOnDropdown(state, action);
    case actionTypes.TOGGLE_EDIT_MODE:
      return toggleEditMode(state, action);
    case actionTypes.EDIT_CHARACTERISTIC:
      return editCharacteristic(state, action);
    case actionTypes.CHANGE_COMMENTARIES:
      return changeCommentaries(state, action);
    case actionTypes.RECALCULATE_PRICE:
      return recalculatePrice(state, action);
    default:
      return state;
  }
};

export default Cart;
