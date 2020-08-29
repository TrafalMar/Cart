import React from "react";
import styles from "./CartMenu.module.css";
import { NavLink } from "react-router-dom";

const CartMenu = (props) => {
  const { activeOrdersCount, deferredOrdersCount } = props.cart;

  return (
    <div className={styles.CartMenu}>
      <NavLink
        to="/cart/orders"
        activeClassName={styles.Active}
        className={styles.Button}
      >
        Корзина ({activeOrdersCount ? activeOrdersCount : 0})
      </NavLink>
      <NavLink
        to="/cart/deferred"
        activeClassName={styles.Active}
        className={styles.Button}
      >
        Отложеные ({deferredOrdersCount ? deferredOrdersCount : 0})
      </NavLink>
    </div>
  );
};

export default CartMenu;
