import React from "react";
import styles from "./CartMenu.module.css";
import { Link } from "react-router-dom";

const CartMenu = (props) => {
  const { activeOrdersCount, deferredOrdersCount } = props.cart;

  return (
    <div className={styles.CartMenu}>
      <Link to="/cart/orders" className={styles.Button}>
        Корзина ({activeOrdersCount ? activeOrdersCount : 0})
      </Link>
      <Link to="/cart/deferred" className={styles.Button}>
        Отложеные ({deferredOrdersCount ? deferredOrdersCount : 0})
      </Link>
    </div>
  );
};

export default CartMenu;
