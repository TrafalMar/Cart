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

const setCart = (state, action) => {
  console.log("Reducer:", action);
  const { orders } = action;
  console.log(orders);
  return { orders: orders, ...countOrders(orders) };
};

const removeOrder = (state, action) => {
  const { orderId } = action;

  let newOrders = [...state.orders];

  newOrders = state.orders.filter((order) => order.id !== orderId);

  return { orders: newOrders, ...countOrders(newOrders) };
};

const defferOrder = (state, action) => {
  console.log("Deffer order");
};

const changeOnDropdown = (state, action) => {
  const { orderId, chosenData, chosenType } = action;

  let newOrders = [...state.orders];

  console.log(chosenType);

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
  }

  return { orders: newOrders, ...countOrders(newOrders) };
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
    default:
      return state;
  }
};

export default Cart;
