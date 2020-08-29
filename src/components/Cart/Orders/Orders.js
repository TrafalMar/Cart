import React, { useEffect } from "react";
import { connect } from "react-redux";

import styles from "./Orders.module.css";
import * as action from "../../../Redux/Actions/Index";

import Order from "./../Order/Order";
import Summarizer from "./../Summarizer/Summarizer";
import Aux from "../../../hoc/_aux";

function Orders(props) {
  const { orders, removeOrder } = props;
  // const [scrollOffset, setScrollOffset] = useState(window.pageYOffset);

  useEffect(() => {
    // window.scrollTo(0, scrollOffset);
  }, []);

  return (
    <Aux>
      <div className={styles.Orders}>
        {orders.map((order) => {
          return (
            !order.isDeferred && (
              <Order
                key={order.id + order.name}
                onRemove={() => removeOrder(order.id)}
                orderData={order}
              />
            )
          );
        })}
      </div>
      <div className={styles.Info}>
        <Summarizer orders={orders} />
      </div>
    </Aux>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeOrder: (orderId) => dispatch(action.removeOrder(orderId)),
});

export default connect(null, mapDispatchToProps)(Orders);
