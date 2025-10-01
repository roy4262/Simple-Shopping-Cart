import { useState } from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem.jsx";

function CartModal({
  isOpen,
  items,
  total,
  onClose,
  onQuantityChange,
  onRemoveItem,
  onCheckout,
}) {
  const [isCheckedOut, setIsCheckedOut] = useState(false);

  if (!isOpen) return null;

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="cart-modal-backdrop" onClick={handleBackdropClick}>
      <div
        className="cart-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
      >
        <h2 id="cart-title">Shopping Cart</h2>
        <button className="close-btn" onClick={onClose} aria-label="Close cart">
          ×
        </button>

        {items.length === 0 ? (
          <p className={`empty ${isCheckedOut ? "order-placed" : ""}`}>
            {isCheckedOut ? "Order placed" : "No items in cart."}
          </p>
        ) : (
          <>
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onQuantityChange={onQuantityChange}
                onRemoveItem={onRemoveItem}
              />
            ))}

            <p className="total">Total: ${total.toFixed(2)}</p>
            <button
              onClick={() => {
                setIsCheckedOut(true);
                onCheckout();
              }}
              className="checkout-btn"
            >
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

CartModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  total: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onCheckout: PropTypes.func.isRequired,
};

export default CartModal;
