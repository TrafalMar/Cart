import React, { useEffect } from "react";
import styles from "./Summarizer.module.css";
import UnderlinedButton from "../../Controls/UnderlinedButton/UnderlinedButton";

const fixateOrderInfo = (fixator, offset = 0) => {
  let orderInfo = document.getElementsByClassName(styles.Summarizer)[0];

  let sticky = orderInfo.offsetTop;

  return function fixate() {
    let condition = fixator.offsetTop + offset > sticky;
    if (fixator.self === window) {
      condition = fixator.pageYOffset + offset > orderInfo.offsetTop;
    }
    if (condition && window.innerWidth > 767) {
      orderInfo.classList.add(styles.Sticky);
    } else {
      orderInfo.classList.remove(styles.Sticky);
    }
  };
};

const Summarizer = (props) => {
  useEffect(() => {
    window.addEventListener("resize", fixateOrderInfo(window, 30));
    window.addEventListener("scroll", fixateOrderInfo(window, 30));

    return () => {
      window.removeEventListener("resize", fixateOrderInfo(window, 30));
      window.removeEventListener("scroll", fixateOrderInfo(window, 30));
    };
  }, []);

  const countOrderPrice = (order) => {
    let price = parseInt(order.price);

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

  const { orders } = props;
  return (
    <div className={styles.Summarizer}>
      <div className={styles.Header}>
        <div className={styles.Title}>Информация о заказе</div>
      </div>
      {orders.map(
        (order) =>
          !order.isDeferred && (
            <div key={order.name} className={styles.SummarizeItem}>
              <div className={styles.Name}>
                {order.name}{" "}
                {order.chosenCount.value > 1 ? (
                  <span style={{ fontWeight: "bold" }}>
                    * {order.chosenCount.value}
                  </span>
                ) : null}
              </div>
              <div className={styles.Price}>₴{countOrderPrice(order)}</div>
            </div>
          )
      )}
      <div className={styles.Summary}>
        <span>ВСЕГО:</span>
        <span className={styles.SumPrice}>
          <span style={{ paddingRight: "10px" }}>₴</span>
          {orders.reduce((sum, cur) => {
            let price = countOrderPrice(cur);
            if (!cur.isDeferred) {
              return sum + price;
            }
            return sum;
          }, 0)}
        </span>
      </div>
      <hr className={styles.HorizontalLine} />
      <div className={styles.SubmitButton}>
        <UnderlinedButton position="right" margin>
          Отправить в оброботку
        </UnderlinedButton>
      </div>
    </div>
  );
};

export default Summarizer;
