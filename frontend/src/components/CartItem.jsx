import PropTypes from "prop-types";

function CartItem({ item, onQuantityChange, onRemoveItem }) {
  const { id, name, price, quantity } = item;
  const lineTotal = (price * quantity).toFixed(2);

  const handleInputChange = (event) => {
    const nextValue = Math.max(1, Number(event.target.value));
    onQuantityChange(id, nextValue);
  };

  return (
    <div className="cart-item">
      <button
        type="button"
        className="remove-item"
        onClick={() => onRemoveItem(id)}
        aria-label={`Remove ${name} from cart`}
      >
        ×
      </button>
      <span>{name}</span>
      <div className="quantity-controls">
        <button
          onClick={() => onQuantityChange(id, Math.max(1, quantity - 1))}
          aria-label={`Decrease quantity of ${name}`}
        >
          –
        </button>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={handleInputChange}
          aria-label={`${name} quantity`}
        />
        <button
          onClick={() => onQuantityChange(id, quantity + 1)}
          aria-label={`Increase quantity of ${name}`}
        >
          +
        </button>
      </div>
      <span>${lineTotal}</span>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
};

export default CartItem;
