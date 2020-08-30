import React, { useEffect } from "react";
import styles from "./Summarizer.module.css";
import UnderlinedButton from "../../Controls/UnderlinedButton/UnderlinedButton";

const fixateOrderInfo = (fixator, offset = 0) => {
  let orderInfo = document.getElementsByClassName(styles.Summarizer)[0];

  let sticky = orderInfo.offsetTop;

  return function fixate() {
    let condition = fixator.offsetTop > sticky;
    if (fixator.self === window) {
      condition = fixator.pageYOffset + 30 > sticky;
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

  const { orders } = props;
  return (
    <div className={styles.Summarizer}>
      <div className={styles.Header}>
        <div className={styles.Title}>Информация о заказе</div>
      </div>
      {orders.map(
        (order) =>
          !order.isDeferred && (
            <div key={order.id} className={styles.SummarizeItem}>
              <div className={styles.Name}>
                {order.name}{" "}
                {order.chosenCount.value > 1 ? (
                  <span style={{ fontWeight: "bold" }}>
                    * {order.chosenCount.value}
                  </span>
                ) : null}
              </div>
              <div className={styles.Price}>₴{order.price}</div>
            </div>
          )
      )}
      <div className={styles.Summary}>
        <span className={styles.Total}>ВСЕГО:</span>
        <span className={styles.SumPrice}>
          <span style={{ paddingRight: "10px" }}>₴</span>
          {orders.reduce((sum, cur) => {
            if (!cur.isDeferred) {
              return sum + cur.price;
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
