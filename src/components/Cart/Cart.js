import React, { useEffect } from "react";
import styles from "./Cart.module.css";

import { Orders as cartData } from "./dumyData";
import { connect } from "react-redux";
import * as action from "../../Redux/Actions/Index";
import { Route } from "react-router-dom";

import CartMenu from "./CartMenu/CartMenu";
import Orders from "./Orders/Orders";
import DeferredOrders from "./DeferredOrders/DeferredOrders";

const Cart = (props) => {
  const { setOrders, orders, activeOrdersCount, deferredOrdersCount } = props;

  useEffect(() => {
    // set orders in redux
    setOrders(cartData.orders);
  }, []);

  return (
    <div className={styles.Cart}>
      <CartMenu cart={{ activeOrdersCount, deferredOrdersCount }} />
      <Route path="/cart/orders" render={() => <Orders orders={orders} />} />
      <Route
        path="/cart/deferred"
        render={() => <DeferredOrders orders={orders} />}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  orders: state.Cart.orders,
  activeOrdersCount: state.Cart.activeOrdersCount,
  deferredOrdersCount: state.Cart.deferredOrdersCount,
});

const mapDispatchToProps = (dispatch) => ({
  setOrders: (orders) => dispatch(action.setOrders(orders)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
