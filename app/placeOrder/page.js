import Address from "@/components/Address/Address";
import OrderSummary from "@/components/OrderSummary/OrderSummary";
import styles from "./page.module.css"


const PlaceOrder = () => {
  return (
    <div className={styles.orderWrapper}>
      <h3>Place Order</h3>
      <div className={styles.order}>
        <div className={styles.left}>
          <Address />
        </div>
        <div className={styles.right}>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
