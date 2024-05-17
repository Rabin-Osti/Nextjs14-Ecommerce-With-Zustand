const CartIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M10.313 25.313a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.875ZM23.438 25.313a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.875ZM2.813 4.688h3.75l2.812 15.937h15"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M9.375 16.875h14.616a.469.469 0 0 0 .46-.377l1.687-8.437a.47.47 0 0 0-.46-.561H7.5"
    />
  </svg>
);
export default CartIcon;
