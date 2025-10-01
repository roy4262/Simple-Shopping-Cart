import PropTypes from "prop-types";

function Header({ total, itemCount, onCartOpen }) {
  return (
    <header className="header">
      <div className="header-left">
        <h1>🛍️ Shopping Cart</h1>
        <p>Everything you love, all in one place.</p>
      </div>
      <button className="cart-button" onClick={onCartOpen}>
        <span>Cart ({itemCount})</span>
        <span>${total.toFixed(2)}</span>
      </button>
    </header>
  );
}

Header.propTypes = {
  total: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
  onCartOpen: PropTypes.func.isRequired,
};

export default Header;
