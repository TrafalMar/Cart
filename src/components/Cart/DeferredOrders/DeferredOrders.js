import React from "react";
import styles from "./DeferredOrders.module.css";

import { connect } from "react-redux";
import * as action from "../../../Redux/Actions/Index";

import Order from "./../Order/Order";

function DeferredOrders(props) {
  const { orders, removeOrder, toggleDeffereOrder } = props;

  return (
    <div className={styles.DeferredOrders}>
      {orders.map(
        (order) =>
          order.isDeferred && (
            <Order
              key={order.id}
              onRemove={() => removeOrder(order.id)}
              onDeffereToggle={() => toggleDeffereOrder(order.id)}
              orderData={order}
            />
          )
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeOrder: (orderId, destination) =>
    dispatch(action.removeOrder(orderId, destination)),
  toggleDeffereOrder: (orderId) => dispatch(action.toggleDeffereOrder(orderId)),
});

export default connect(null, mapDispatchToProps)(DeferredOrders);
