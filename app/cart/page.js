import CartProducts from "@/components/CartProduct/CartProduct";
import styles from "./page.module.css";
const Cart = () => {
  return (
    <div className={styles.cartWrapper}>
      <h3>Your Cart</h3>
      <CartProducts />
    </div>
  );
};

export default Cart;
