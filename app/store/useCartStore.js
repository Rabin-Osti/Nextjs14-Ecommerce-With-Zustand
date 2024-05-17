import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const INITIAL_STATE = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

// Create the store with Zustand, combining the status interface and actions
export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: INITIAL_STATE.cart,
      totalItems: INITIAL_STATE.totalItems,
      totalPrice: INITIAL_STATE.totalPrice,
      addToCart: (product) => {
        console.log("use cart store addtocart = ", product);
        const cart = get().cart;
        const cartItem = cart.find((item) => item._id === product._id);

        // If the item already exists in the Cart, increase its quantity
        if (cartItem) {
          const updatedCart = cart.map((item) =>
            item._id === product._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );

          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price,
          }));
        } else {
          const updatedCart = [...cart, product];

          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price,
          }));
        }
      },
      removeFromCart: (product) => {
        set((state) => ({
          cart: state.cart.filter((item) => item._id !== product._id),
          totalItems: state.totalItems - product.quantity,
          totalPrice: state.totalPrice - product.price * product.quantity,
        }));
      },
      handleInc: (product) => {
        console.log("product in handleinc = ", product.price);
        set((state) => ({
          cart: state.cart.map((item) =>
            item._id === product._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + product.price,
        }));
      },
      handleDec: (product) => {
        if (product.quantity === 1) {
          set((state) => ({
            cart: state.cart.filter((item) => item._id !== product._id),
            totalItems: state.totalItems - product.quantity,
            totalPrice: state.totalPrice - product.price * product.quantity,
          }));
        } else {
          set((state) => ({
            cart: state.cart.map((item) =>
              item._id === product._id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
            totalItems: state.totalItems - 1,
            totalPrice: state.totalPrice - product.price,
          }));
        }
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
