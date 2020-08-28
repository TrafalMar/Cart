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
  let price = order.price;

  if (order.chosenSize.value) {
    price = parseInt(order.chosenSize.value);
  }

  if (order.chosenColor.value) {
    price += parseInt(order.chosenColor.value);
  }

  if (order.chosenCount && order.chosenCount.value) {
    price *= order.chosenCount.value;
  }
  return price;
};

const recountPrice = (state, orderId) => {
  let newOrders = [...state.orders];

  const order = newOrders.find((order) => order.id === orderId);

  let price = countSinglePrice(order);

  newOrders.find((order) => order.id === orderId).price = price;

  return newOrders;
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
    ...recountPrice(state, orderId),
  };
};

const defferOrder = (state, action) => {
  console.log("Deffer order");
};

const changeOnDropdown = (state, action) => {
  const { orderId, chosenData, chosenType } = action;

  let newOrders = [...state.orders];

  switch (chosenType) {
    case "size":
      newOrders.find((order) => order.id === orderId).chosenSize = chosenData;
      break;
    case "color":
      newOrders.find((order) => order.id === orderId).chosenColor = chosenData;
      break;
    case "count":
      newOrders.find((order) => order.id === orderId).chosenCount = chosenData;
      break;
    default:
      break;
  }

  return {
    ...state,
    orders: newOrders,
    ...countOrders(newOrders),
    ...recountPrice(state, orderId),
  };
};

const toggleEditMode = (state, action) => {
  const { orderId } = action;

  let newOrders = [...state.orders];
  const editMode = newOrders.find((order) => order.id === orderId).editMode;

  newOrders.find((order) => order.id === orderId).editMode = !editMode;

  return { ...state, orders: newOrders };
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
    default:
      return state;
  }
};

export default Cart;
